---
layout: post
title: Varnish. Вступление
image: /assets/images/covers/varnish.jpg
tags:
  - varnish
  - highload
---


Основным способом увеличения производительности веб-приложения является кэширование. 
Кэш - это промежуточный буфер с более быстрым доступом к необходимым данным. 
Положить контент поближе к пользователя может позволить web-акселератор, позволяющих кэшировать http трафик.

<img class="img-responsive" src="/assets/images/covers/varnish.jpg" style="margin-bottom: 20px">

> Varnish Cache is a web application accelerator also known as a caching HTTP reverse proxy.
> You install it in front of any server that speaks HTTP and configure it to cache the contents. 
> Varnish Cache is really, really fast. 
> It typically speeds up delivery with a factor of 300 - 1000x, depending on your architecture.

Как сказано выше, Varnish — это реверс-прокси, который занимается ретрансляцией запросов из внешней сети на бекенд-сервера. 
Основной возможностью является гибкое кэширования и быстрая отдача хранимого кэша. 

Varnish принимает запросы от клиента и пытается дать ответы из кэша. Если ответ не найден в кэша, то происходит 
перенаправление на бекенд, полученный ответ сохраняется в кэше и отдается клиенту. 
В случае когда необходимый ответ есть в кэше, то обычно он отдается в считанные микросекунды. 

### Общая архитектура: 

<img class="img-responsive" src="https://docs.google.com/drawings/d/1BNNxn_gHjE2bpu0VE40YXDywy4u6ygy4rojkTtYKUbY/pub?w=845&amp;h=221">


Для django приложения возможна следующая архитектура:
 

<img class="img-responsive" src="https://docs.google.com/drawings/d/1W7de5EiEdH2h2BXSK3xr8Lg-UD58eDrCq7LuT6bpORs/pub?w=1277&amp;h=545"> 
 
 
Бэкенд может управлять кэшем с помощью HTTP Cache-Control заголовков 
([Part of RFC 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html),
[HTTP-кэширование от Google](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=ru)).

<span class="label label-warning">Warning!</span> Есть несколько условий когда Varnish **не кэширует**, наиболее частый - **использование Cookie**. 
То есть, как только, в запросе появляются Cookie, Varnish перестает его кэшировать и начинает считать контент персонифицированным. Однако это можно обойти преобразовав необходимые Cookie в HTTP заголовки.

Об установке можно прочитать [Varnish Installation](https://www.varnish-cache.org/docs/4.0/installation/index.html).

#### Что почитать о Varnish
В скором времени будут статьи на тему: Varnish Configuration Language, Varnish flow, мониторинге и особенностях работы с Cookies. 
Уже сейчас есть статья об инструменте [varnishhist](/2015/04/16/varnishhist/). 

Так же для быстрого старта можно ознакомиться со статьями: 

- [Кэширование с Varnish](http://ruhighload.com/index.php/2009/04/21/varnish-%D0%B1%D1%8B%D1%81%D1%82%D1%80%D1%8B%D0%B9-%D1%81%D1%82%D0%B0%D1%80%D1%82/) на ruhighload.com;
- [Ускоряемся с Varnish](http://webperformance.ru/2011/06/03/varnish-speed-up/) на webperformance.ru.

И конечно же [документация](https://www.varnish-cache.org/docs/4.0/index.html)

