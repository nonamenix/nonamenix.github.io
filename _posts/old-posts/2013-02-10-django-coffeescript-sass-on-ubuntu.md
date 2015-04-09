---
layout: post
title: 'Django :: CoffeeScript + SASS on Ubuntu'
date: '2013-02-10T02:25:00.002+04:00'
author: Данил Иванов
tags:
- django
- howto
- ubuntu
modified_time: '2014-01-15T00:18:35.371+04:00'
blogger_id: tag:blogger.com,1999:blog-818473394352822470.post-5899170706836190835
blogger_orig_url: http://notes.nonamenix.ru/2013/02/django-coffeescript-sass-on-ubuntu.html
---

Установка интерпретаторов CoffeeScript и SASS
<!--more--> 

## Установка CoffeeScript: 

{% highlight bash %}
$ sudo apt-get install coffeescript
{% endhighlight %}

## Устанавливаем расширения для django:

{% highlight bash %}
$ pip install django-coffeescript
{% endhighlight %}

1. Убеждаемся что CoffeeScript установлен правильно <a href="http://jashkenas.github.com/coffee-script/">Сайт CoffeeScript</a>;
2. Добавляем "coffeescript" в INSTALLED_APPS;
3. Добавляем  'coffeescript.finders.CoffeescriptFinder' в STATIC_FINDERS 
4. Примеры и дополнительные параметры читаем здесь: <a href="http://pypi.python.org/pypi/django-coffeescript/">django-coffeescript on pypi</a>

## Установка SASS.

Немного сложнее т.к. придется установить всю среду для ruby.

{% highlight bash %}
# install ruby 
$ sudo apt-get install ruby-full build-essential

# Installing rubygems
$ sudo apt-get install rubygems

# installing sass
$ sudo gem install sass

# check you sass
$ sass -v
{% endhighlight %}

### Compass

{% highlight bash %}
$ sudo gem install compass
{% endhighlight %}

### Bootstrap styles on sass

{% highlight bash %}
$ sudo gem install bootstrap-sass
{% endhighlight %}

### Компилируем sass

Базовый способ: запускаем watch:

{% highlight bash %}
sass --watch style.scss:style.css
{% endhighlight%}
