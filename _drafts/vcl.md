---
layout: post
title: Varnish Configuration Language
image: /assets/images/covers/varnish.jpg
tags: 
 - varnish
 - highload
---

## Описание языка

VCL — Специализированный предметно-ориентированный язык программирования, реализующий обработку запросов согласно 
конечному автомату Varnish.

В упрощенном варианте эта стейт-машина выглядит слудующим образом. 

<img class="img-responsive" src="https://docs.google.com/drawings/d/12YykcOea1XUd0eqP_wt54A-hfAFhPKl_MlnAWKHt7_g/pub?w=1215&amp;h=601">


Полный вариант: 

<img class="img-responsive" src="http://www.emanuelis.eu/wp-content/uploads/2014/09/vcl1.png">   


При загрузке новой конфигурации, главный процесс *varnishd* компилирует **VCL** в **C**.
Код, который получается в результате компиляции можно посмотреть запустив varnishd с параметром *-С*, например:

{% highlight bash %}
sudo varnishd -f ~/Projects/sandbox/varnish.vcl -n ~/Projects/sandbox/varnish_home/ -u nonamenix -C
{% endhighlight %}
