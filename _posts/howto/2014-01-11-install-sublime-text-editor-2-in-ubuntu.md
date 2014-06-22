---
layout: post
category : howto
title: Установка Sublime Text Editor 2 в Ubuntu
# tagline: "for dict comprehension"
tags : [howto, sublime]
---

Для установки необходимо добавить репозиторий webupd8team/sublime-text2, обновить пакеты и установить редактор:

{% highlight bash %}
sudo add-apt-repository ppa:webupd8team/sublime-text-2
sudo apt-get update
sudo apt-get install sublime-text
{% endhighlight %}

Для того чтобы редактор стал более удобным и приобрел необходимый функционал необходимо подключить репозиторий пакетов. Вызываем консоль Ctrl+` и вставляем код

{% highlight python %}
import urllib2,os; pf='Package Control.sublime-package'; ipp=sublime.installed_packages_path(); os.makedirs(ipp) if not os.path.exists(ipp) else None; urllib2.install_opener(urllib2.build_opener(urllib2.ProxyHandler())); open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read()); print('Перезапустите Sublime Text для окончания установки')
{% endhighlight %}