---
layout: post
title: Django Suit
date: '2014-01-11T01:55:00.003+04:00'
author: Данил Иванов
tags:
- django
modified_time: '2014-01-15T00:12:53.233+04:00'
thumbnail: http://4.bp.blogspot.com/-ca0yJSwH8Gg/UtBsPBzVQXI/AAAAAAAAKHo/M0Vne-IWjnQ/s72-c/django-suit.png.1280x600_q85_crop.png
blogger_id: tag:blogger.com,1999:blog-818473394352822470.post-5689348767999159089
blogger_orig_url: http://notes.nonamenix.ru/2014/01/django-suit.html
---

*Django Suit* – весьма приятная тема для админки сверстанная на основе bootstrap.

{% img img-responsive http://4.bp.blogspot.com/-ca0yJSwH8Gg/UtBsPBzVQXI/AAAAAAAAKHo/M0Vne-IWjnQ/s1600/django-suit.png.1280x600_q85_crop.png %}

<!--more-->

## О приложении
Django Suit это набор шаблонов и виджетов, сверстанных на основе Bootstrap'a.

Сайт: [http://djangosuit.com/](http://djangosuit.com)

Документация: [http://django-suit.readthedocs.org/en/develop/](http://django-suit.readthedocs.org/en/develop)

### Установка
Установка сводится к двум простым шагам:

{% highlight bash %}
nonamenix@angara ~ $ pip install django-suit
{% endhighlight %}

в INSTALLED_APPLICATION до 'django.admin.contrib' надо добавить 'suit'