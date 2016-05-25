---
layout: page
title: Frontend Developer Interview Topics
---


Frontend Developer Interview Topics
-----------------------------------


### Общие вопросы

#### Как проверить что поддерживают браузеры: CSS, HTML5, JS API, SVG 

### HTML

- [http://thatjsdude.com/interview/html.html](http://thatjsdude.com/interview/html.html)


#### Что такое doctype? 

#### Как можно развернуть текст? 
  
  <!-- Switch text direction -->
  <p><bdo dir="rtl">This text will go right to left.</bdo></p>

#### http request

Будет ли запущена загрузка изображения во время загрузки страницы?

  <img src="mypic.jpg" style="visibility: hidden" alt="My photo">

Ответ: Да

  <div style="display: none;">
    <img src="mypic.jpg" alt="My photo">
  </div>
  
Ответ: Да

### download order

Вопрос: Будет ли style1.css скачен и распаршен перед style2.css 


<head>
    <link href="style1.css" rel="stylesheet">
    <link href="style2.css" rel="stylesheet">
</head>
  
Ответ: Нет

Вопрос: Будет ли style2.css скачен и распаршен перед тем как, Paragraph 1 будет отрендерен на странице?   

<head>
    <link href="style1.css" rel="stylesheet">
</head>
<body>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <link href="style2.css" rel="stylesheet">
</body>

Ответ: Да 

### Document Rendering

* CSSOM — CSS Object Model
* DOM — Document Object Model

### Layout 
* Graceful Degradation and Progressive Enhancement

