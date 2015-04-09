---
layout: post
title: Удаление всех *.pyc файлов
date: '2014-01-21T11:58:00.001+04:00'
author: Данил Иванов
tags:
- howto
- ubuntu
modified_time: '2014-02-18T00:02:15.274+04:00'
blogger_id: tag:blogger.com,1999:blog-818473394352822470.post-2012977537578726905
blogger_orig_url: http://notes.nonamenix.ru/2014/01/pyc.html
---

<p>Команда для удаления все скомпилированных в байт код pyc файлы в Linux: 
<!-- more -->

{% highlight bash %}
find . -name "*.pyc" -exec rm -rf {} \;
{% endhighlight %}