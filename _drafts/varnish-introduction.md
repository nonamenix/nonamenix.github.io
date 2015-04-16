---
layout: post
title: Varnish. Вступление
image: /assets/images/covers/varnish.jpg
tags:
  - varnish
  - highload
---

Основным способом увеличить производительность веб-приложения является кеширование. В Django кешировать приходиться почти все:

- пользовательские аккаунты; 
- шаблоны и их части ([django-phased](https://github.com/codysoyland/django-phased)); 
- запросы к БД; 
- ответы от view;
- и т.д.  

<!--more-->

Идеальный случай это не ходить на бекенд вообще, но такое не возможно. Необходимо свести количество запросов к минимуму. 
Такое реально на большинстве страниц новостных сайтов, за исключение ситуаций когда необходимо авторизовать пользователя, 
дать ему возможность подписаться, оставить комментарий и т.п. А остальное по сути является статикой, которую можно 
сгенерировать заранее и инвалидировать по мере необходимости. 

Для решение данной задачи подходит **Varnish**.

<img class="img-responsive" src="/assets/images/covers/varnish.jpg" style="margin-bottom: 10px">

> Varnish Cache is a web application accelerator also known as a caching HTTP reverse proxy.
> You install it in front of any server that speaks HTTP and configure it to cache the contents. 
> Varnish Cache is really, really fast. 
> It typically speeds up delivery with a factor of 300 - 1000x, depending on your architecture.

Как сказано выше, Varnish — это реверс-прокси, который занимается ретрансляцией запросов из внешней сети на бекенд-сервера. 
Основной возможностью является гибкое кеширования и быстрая отдача хранимого кеша. 

Varnish принимает запросы от клиента и пытается дать ответы из кеша. Если ответ не найден в кеша, то происходит 
перенаправление на бекенд, полученный ответ сохраняется в кеше и отдаетя в клиенте. 
В случае когда необходимый ответ есть в кеше, то обычно он отдается в считанные микросекунды. 

### Общая архитектура: 

{% highlight bash %}
[client] \ 
[client] —— [varnish] —— [backend server] 
[client] /
{% endhighlight %}

Для django приложения возможна следующая архитектура:
 
{% highlight bash %}
[client] \ 
[client] —— (http) —— [nginx] —— (hhtp) —— [varnish] —— (http) —— [uwsgi] 
[client] /              |
                        |
[admin] —— —— (ssl) ——  ⌋ 
{% endhighlight %}
 

Бекенд может управлять кешом с помощью HTTP Cache-Control заголовков 
([Part of RFC 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html),
[HTTP-кеширование от Google](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=ru)).

<span class="label label-warning">Warning</span> Есть несколько условий когда Varnish **не кеширует**, наиболее частый - **использование Cookie**. 
То есть, как только, в запросе появляются Cookie, Varnish перестает его кешировать и начинает считать контент персонифицированным. Однако это можно обойти преобразовав необходимые Cookie в HTTP заголовки.

Об установке можно прочитать [Varnish Installation](https://www.varnish-cache.org/docs/4.0/installation/index.html).

#### Что почитать о Varnish
В скором времени будут статьи на тему: Varnish Configuration Language, Varnish flow, мониторинге и особенностях работы с Cookies. 
Уже сейчас есть статья об инструменте [varnishhist](/2015/04/16/varnishhist/). 

Так же для быстрого старта можно ознакомиться со статьями: 

- [Кэширование с Varnish](http://ruhighload.com/index.php/2009/04/21/varnish-%D0%B1%D1%8B%D1%81%D1%82%D1%80%D1%8B%D0%B9-%D1%81%D1%82%D0%B0%D1%80%D1%82/) на ruhighload.com;
- [Ускоряемся с Varnish](http://webperformance.ru/2011/06/03/varnish-speed-up/) на webperformance.ru.

И конечно же [документация](https://www.varnish-cache.org/docs/4.0/index.html)

