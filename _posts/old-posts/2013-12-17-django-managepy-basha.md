---
layout: post
title: Автокомпит django manage.py для bash'a
date: '2013-12-17T07:39:00.002+04:00'
author: Данил Иванов
tags:
- django
modified_time: '2014-01-15T08:36:47.222+04:00'
thumbnail: http://3.bp.blogspot.com/-NNHRw7X2u_4/Uq_HOYR6ITI/AAAAAAAAJ6U/2xSUZpMzeAc/s72-c/detail_1358343195_1.jpg.1280x1280_q85.jpg
blogger_id: tag:blogger.com,1999:blog-818473394352822470.post-9155462042803066400
blogger_orig_url: http://notes.nonamenix.ru/2013/12/django-managepy-basha.html
---

Расширение добавляет автокомлит для django manage.py в линуксовую терминал.

<!--more-->

Скачиваем расширение и устанавливаем переменную:
{% highlight bash %}
wget -O ~/.django_bash_completion.sh https://raw.github.com/django/django/master/extras/django_bash_completion
echo "source $HOME/.django_bash_completion.sh" >> ~/.bashrc
{% endhighlight %}
