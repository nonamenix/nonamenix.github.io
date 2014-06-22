---
layout: post
category : coffeescript
tagline: "for dict comprehension"
tags : [zip, coffeescript]
---

В Python есть отличная функция для создания словарей: zip
При помощи этой функции можно создать словарь из картажа пар элементов. До появления версии 2.7 это была основная возможность реализовать dict comprehension.

В CoffeeScript не оказалось dict comprehension так что в файлик utils попадает функция zip:

<!-- language: lang-coffeescript -->

    zip = (pairs) ->
      dict = {}
      dict[key] = value for [key, value] in pairs
      dict

    # Example
    zip ([el, el * el] for el in [4..8]) # {4:16, 5:25, 6:36, 7:49, 8:64}
