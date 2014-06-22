---
layout: post
title: Удаление всех *.pyc файлов
tags : [bash, python]
---

Команда для удаления все скомпилированных в байт код pyc файлы в Linux:

<!--language: lang-bash -->
    find . -name "*.pyc" -exec rm -rf {} \;