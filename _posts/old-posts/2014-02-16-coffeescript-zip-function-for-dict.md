---
layout: post
title: CoffeeScript / Zip function
date: '2014-02-16T22:31:00.001+04:00'
author: Данил Иванов
tags:
- coffeescript
modified_time: '2014-02-16T22:39:02.249+04:00'
blogger_id: tag:blogger.com,1999:blog-818473394352822470.post-746323200779358039
blogger_orig_url: http://notes.nonamenix.ru/2014/02/coffeescript-zip-function-for-dict.html
---

В CoffeeScript не оказалось функциии **zip**, которая мне очень понравился в Python.

При помощи этой функции можно создать словарь из картажа пар элементов. До появления версии 2.7 это была основная возможность реализовать dict comprehension.

<!--more-->

{% highlight coffee %}
zip = (pairs) ->
  dict = {}
  dict[key] = value for [key, value] in pairs
  dict
  
# Example 
zip ([el, el * el] for el in [4..8]) # {4:16, 5:25, 6:36, 7:49, 8:64}
{% endhighlight %}
