---
layout: post
title: Установка TortoiseHg под Ubuntu
date: '2013-07-28T11:59:00.001+04:00'
author: Данил Иванов
tags:
- ubuntu
- howto
modified_time: '2014-01-17T08:33:33.408+04:00'
blogger_id: tag:blogger.com,1999:blog-818473394352822470.post-3238960998734638508
blogger_orig_url: http://notes.nonamenix.ru/2013/07/tortoisehg-ubuntu.html
---

{% highlight bash %}
$ sudo add-apt-repository ppa:mercurial-ppa/releases
$ sudo add-apt-repository ppa:tortoisehg-ppa/releases
$ sudo apt-get update
$ sudo apt-get install tortoisehg tortoisehg-nautilus
{% endhighlight %}