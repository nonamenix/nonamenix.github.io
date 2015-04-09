---
layout: post
title: Установка Sublime Text Editor 2 в Ubuntu
date: '2014-01-11T14:49:00.001+04:00'
author: Данил Иванов
tags:
- howto
- ubuntu
modified_time: '2014-01-15T08:40:15.832+04:00'
thumbnail: http://3.bp.blogspot.com/-57Ij5maze-8/UtWa50kWF_I/AAAAAAAAKMo/2SVD1zyIeSU/s72-c/tjfAO.jpg
blogger_id: tag:blogger.com,1999:blog-818473394352822470.post-8978306347620525772
blogger_orig_url: http://notes.nonamenix.ru/2014/01/webupd8teamsublime-text2-sudo-add-apt.html
---

Для установки необходимо добавить репозиторий webupd8team/sublime-text2, обновить пакеты и установить редактор:

{% highlight bash %}
sudo add-apt-repository ppa:webupd8team/sublime-text-
sudo apt-get update
sudo apt-get install sublime-text
{% endhighlight %}

Для того чтобы редактор стал более удобным и приобрел необходимый функционал надо подключить репозиторий пакетов. Вызоваем консоль Ctrl+` и вставляем код

{% highlight python %}
import urllib2,os; pf='Package Control.sublime-package'; ipp=sublime.installed_packages_path(); os.makedirs(ipp) if not os.path.exists(ipp) else None; urllib2.install_opener(urllib2.build_opener(urllib2.ProxyHandler())); open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read()); print('Перезапустите Sublime Text для окончания установки')
{% endhighlight %}
