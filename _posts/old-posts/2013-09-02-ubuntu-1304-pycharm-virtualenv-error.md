---
layout: post
title: 'Ошибка создания виртуального окружения в PyCharm'
date: '2013-09-02T23:27:00.005+04:00'
author: Данил Иванов
tags:
- howto
- pycharm
- ubuntu
modified_time: '2014-01-15T00:47:47.455+04:00'
blogger_id: tag:blogger.com,1999:blog-818473394352822470.post-5491408863163659088
blogger_orig_url: http://notes.nonamenix.ru/2013/09/ubuntu-1304-pycharm-virtualenv-error.html
image: /assets/images/covers/pycharm.png
---

При попытке создать виртуальное окружение из PyCharm'a появляется окно с ошибкой: 

{% highlight bash %}
$ virtualenv.py --never-download --distribute /home/nonamenix/Projects/virtualenvs/VNAME
{% endhighlight %}

Хотя при этом обычный virtualenv работал. Вывод прост, создаем символьную ссылку в папку helpers PyCharm'a.

{% highlight bash %}
$ which virtualenv
$ /usr/local/bin/virtualenv
$ rm -rf /opt/pycharm/helpers/virtualenv.py
$ ln -s /usr/local/bin/virtualenv ~/pycharm/helpers/virtualenv.py
{% endhighlight %}
