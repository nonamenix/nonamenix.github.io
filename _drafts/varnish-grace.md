---
title: Varnish Grace
layout: post
tags:
  - varnish
  - highload
image: /assets/images/covers/varnish_2.png
---

Grace атрибут позволяет отдавать кэш, с истекшим <abbr title="временем жизни">ttl</abbr>. 
Это может понадобиться в следующих ситуациях:
1. Бэкенд упал.
2. Два и более одновременнных, идентичных запроса, кэша для которых еще нет. 


Grace in the scope of Varnish means delivering otherwise expired objects when circumstances call for it. This can happen because:


{% highlight cpp %}
sub vcl_fetch_backend {
   set beresp.grace = 3d;
}
{% endhighlight %}

Можно выставить grace период, например, на три дня для того чтобы не спешить с выходных ;)
Кэш будет удален только по истечения трех дней. 

Также grace режим позволяет реализовать очередь для одинаковых запросов.

