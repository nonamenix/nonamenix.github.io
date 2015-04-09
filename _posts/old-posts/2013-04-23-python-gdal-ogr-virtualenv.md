---
layout: post
title: 'Python :: Установка GDAL и OGR в virtualenv'
date: '2013-04-23T12:49:00.001+04:00'
author: Данил Иванов
tags:
- howto
- python
- ubuntu
modified_time: '2014-01-17T08:34:52.464+04:00'
blogger_id: tag:blogger.com,1999:blog-818473394352822470.post-2960745315568098821
blogger_orig_url: http://notes.nonamenix.ru/2013/04/python-gdal-ogr-virtualenv.html
---

Для установки python-gdal в виртуальное окружение, необходимо установить *gdal-bin*. 
После этого выбираем нужное виртуальное окружение и устанавливаем gdal

{% highlight bash %}
pip install --no-install GDAL
python setup.py build_ext --include-dirs=/usr/include/gdal/
{% endhighlight %} 

Для того чтобы установить gdal не виртуальное окружение можно подлючить репозиторий ubuntugis и из него установить python-gdal:
 {% highlight bash %}
$ sudo apt-add-repository ppa:ubuntugis/ubuntugis-unstable
$ sudo apt-get update
$ sudo apt-get install python-gdal
{% endhighlight %} 
