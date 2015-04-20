---
layout: post
title: Установка Varnish
tags: 
 - varnish
 - highload
---
## Установка
Про установку и быстрый запуск хорошо описано в [официальной документации](https://www.varnish-cache.org/docs/4.0/installation/index.html). 
На Ubuntu установка сводится к команде: 

{% highlight bash %}
sudo apt-get install varnish
{% endhighlight %}

## Настройка
Для настройки существуют два конфига. Первый определяет базовые настройки, которые необходимы для запуска процесса 
varnishd, достаточно будет определить настройку DAEMON_OPTS: 
 
{% highlight ini %}
DAEMON_OPTS = "-a :80 -T localhost:6082 -f /etc/varnish/default.vcl -S /etc/varnish/secret -t 120 -s malloc,256m"
{% endhighlight %}

*TODO*: Описать все параметры базовой конфигурации.

Одним из параметров DAEMON_OPTS является *-f /etc/varnish/default.vcl*, в нем указывается путь до VCL конфига, 
который пишется на **Varnish Configuration Language**.