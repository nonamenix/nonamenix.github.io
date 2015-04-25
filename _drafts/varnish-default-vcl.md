---
layout: post
title: Разбор стандартного Varnish VCL файла

---

Ниже приведён default.vcl с комментариями.

{% highlight C %}
sub vcl_recv {
    if (req.restarts == 0) {
        if (req.http.x-forwarded-for) {
            set req.http.X-Forwarded-For =
                req.http.X-Forwarded-For + ", " + client.ip;
        } else {
            set req.http.X-Forwarded-For = client.ip;
        }
    }
    
    // Отсекаем недопустимые методы запросов
    // Non-RFC2616 or CONNECT which is weird.
    if (req.request != "GET" &&
      req.request != "HEAD" &&
      req.request != "PUT" &&
      req.request != "POST" &&
      req.request != "TRACE" &&
      req.request != "OPTIONS" &&
      req.request != "DELETE") {
        return (pipe);
    }
    
    // Кэшируются только GET и HEAD запросы 
    if (req.request != "GET" && req.request != "HEAD") {
        return (pass);
    }
    
    // По умолчанию запросы которые требуют авторизации, либо имеют установленные куки не кэшируются
    if (req.http.Authorization || req.http.Cookie) {
        return (pass);
    }
    return (lookup);
}

sub vcl_pipe {
    # Note that only the first request to the backend will have
    # X-Forwarded-For set.  If you use X-Forwarded-For and want to
    # have it set for all requests, make sure to have:
    # set bereq.http.connection = "close";
    # here.  It is not set by default as it might break some broken web
    # applications, like IIS with NTLM authentication.
    return (pipe);
}

sub vcl_pass {
    return (pass);
}

sub vcl_hash {
    // Функция для подсчета хэша от запроса. Здесь определяются параметры, которые будут участвовать при выборе кэша.
    hash_data(req.url);  // URL ресурса
    
    // Если указан хост, к которому идет обращение, то в хеш включается он, в противном случае ip-адресс.
    if (req.http.host) {
        hash_data(req.http.host);
    } else {
        hash_data(server.ip);
    }
    return (hash);
}

sub vcl_hit {
    // В случае попадания в кэш управление переходит в функцию vcl_deliver
    return (deliver);
}

sub vcl_miss {
    // В случае промаха управление переходит в функцию vcl_backend_fetch
    return (fetch);
}

sub vcl_fetch {
    if (beresp.ttl <= 0s ||  // Если TTL ответа не положительный
        beresp.http.Set-Cookie || // или ответ от бэкенда устанавливает куки 
        beresp.http.Vary == "*") {  // или ответ зависит от всех параметров запроса. 
                /*
                 * Mark as "Hit-For-Pass" for the next 2 minutes
                 */
                set beresp.ttl = 120 s;
                return (hit_for_pass);
    }
    return (deliver);
}

sub vcl_deliver {
    return (deliver);
}

sub vcl_error {
    set obj.http.Content-Type = "text/html; charset=utf-8";
    set obj.http.Retry-After = "5";
    synthetic {"
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <title>"} + obj.status + " " + obj.response + {"</title>
  </head>
  <body>
    <h1>Error "} + obj.status + " " + obj.response + {"</h1>
    <p>"} + obj.response + {"</p>
    <h3>Guru Meditation:</h3>
    <p>XID: "} + req.xid + {"</p>
    <hr>
    <p>Varnish cache server</p>
  </body>
</html>
"};
    return (deliver);
}

sub vcl_init {
    return (ok);
}

sub vcl_fini {
        return (ok);
}
{% endhighlight %}