---
layout: post
title: Установка GeoServer
date: '2013-03-13T16:55:00.001+04:00'
author: Данил Иванов
tags:
- howto
- ubuntu
modified_time: '2014-01-17T08:42:42.780+04:00'
blogger_id: tag:blogger.com,1999:blog-818473394352822470.post-7453622080078394410
blogger_orig_url: http://notes.nonamenix.ru/2013/03/install-geoserver.html
---

## Install Oracle Java 

{% highlight bash %}	
$ sudo add-apt-repository ppa:webupd8team/java
$ sudo apt-get update
$ sudo apt-get install oracle-java7-installer
{% endhighlight %} 

## Install Tomcat7 {% highlight bash %}

$ sudo apt-get install tomcat7\n\n{% endhighlight %} 
if tomcat write: "no JDK found - please set JAVA_HOME" {% highlight bash %}
$ sudo vim  /etc/default/tomcat7
JAVA_HOME=/usr/lib/jvm/java-7-oracle
{% endhighlight %} 

look at [http://localhost:8080/}(http://localhost:8080/) 

## Install GeoServer {% highlight bash %}

$ mkdir geoserver_src
$ cd geoserver_srv
$ wget http://downloads.sourceforge.net/geoserver/geoserver-2.2.5-war.zip
$ unzip geoserver-2.2.5-war.zip
$ sudo cp geoserver.war /var/lib/tomcat7/webapps
{% endhighlight %} 

test : <a href="http://localhost:8080/geoserver/web/">http://localhost:8080/geoserver/web/</a>
user : admin
pass : geoserver
