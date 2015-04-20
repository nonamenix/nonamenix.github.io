---
layout: post
title: Varnish Configuration Language
image: /assets/images/covers/varnish.jpg
tags: 
 - varnish
 - highload
---

## Описание языка

VCL специальный предметно-ориентированный язык, разработанный для обработки HTTP запросов и закешированных документов.
При загрузке новой конфигурации, главный процесс *varnishd* компилирует **VCL** в **C**. 

Код, который получается в результате компиляции можно посмотреть запустив varnishd с параметром *-С*, например: 

{% highlight bash %}
sudo varnishd -f ~/Projects/sandbox/varnish.vcl -n ~/Projects/sandbox/varnish_home/ -u nonamenix -C
{% endhighlight %}
