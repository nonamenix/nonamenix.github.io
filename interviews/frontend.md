---
layout: page
title: Frontend Developer Interview Topics
---


Вводная: Расскажите, пожалуйста, чтобы вы использовали для написания нового проекта. 


### HTML


- [http://thatjsdude.com/interview/html.html](http://thatjsdude.com/interview/html.html)


#### Что такое doctype? 

Элемент `<!DOCTYPE>` предназначен для указания типа текущего документа — DTD (document type definition, описание типа 
документа). Это необходимо, чтобы браузер понимал, как следует интерпретировать текущую веб-страницу, поскольку HTML 
существует в нескольких версиях, кроме того, имеется XHTML (EXtensible HyperText Markup Language, расширенный язык 
разметки гипертекста), похожий на HTML, но различающийся с ним по синтаксису. Чтобы браузер «не путался» и понимал, 
согласно какому стандарту отображать веб-страницу и необходимо в первой строке кода задавать `<!DOCTYPE>`.

#### Как можно развернуть текст? 

```html
<p><bdo dir="rtl">This text will go right to left.</bdo></p>
```

#### Как вы проверяете что поддерживают те или иные браузеры?

Например: [caniuse](http://caniuse.com)

#### http request

Будет ли запущена загрузка изображения во время загрузки страницы?

```html
<img src="mypic.jpg" style="visibility: hidden" alt="My photo">
```

Ответ: Да

```html
<div style="display: none;">
  <img src="mypic.jpg" alt="My photo">
</div>
```

Ответ: Да

#### download order

Вопрос: Будет ли style1.css скачен и распаршен перед style2.css 

```html
<head>
    <link href="style1.css" rel="stylesheet">
    <link href="style2.css" rel="stylesheet">
</head>
```
  
Ответ: Нет

Вопрос: Будет ли style2.css скачен и распаршен перед тем как, Paragraph 1 будет отрендерен на странице?   

```html
<head>
    <link href="style1.css" rel="stylesheet">
</head>
<body>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <link href="style2.css" rel="stylesheet">
</body>
```

Ответ: Да 

#### В чём разница между div и span

div - блочный элемент, span - инлайновый. 

#### В чем разница между svg и canvas

<table class="table">
    <thead>
        <tr>
            <td>
                <p align="center"><strong>Canvas</strong></p>
            </td>
            <td>
                <p align="center"><strong>SVG</strong></p>
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p>Pixel-based (canvas is essentially an image element with
                a drawing API)</p>
            </td>
            <td><p>Object Model-based (SVG elements are similar to HTML
            elements)</p></td>
        </tr>
        <tr>
            <td><p>Single HTML element similar to &lt;img&gt; in behavior</p></td>
            <td><p>Multiple graphical elements which become part of the
            Document Object Model (DOM)</p></td>
        </tr>
        <tr>
            <td><p>Visual presentation created and modified programmatically
            through script</p></td>
            <td><p>Visual presentation created with markup and modified by CSS
            or programmatically through script</p></td>
        </tr>
        <tr>
            <td><p>Event model/user interaction is coarse—at the canvas
            element only; interactions must be manually programmed from
            mouse coordinates</p></td>
            <td><p>Event model/user interaction is object-based at the level
            of primitive graphic elements—lines, rectangles, paths</p></td>
        </tr>
        <tr>
            <td><p>API does not support accessibility; markup-based techniques
            must be used in addition to canvas</p></td>
            <td><p>SVG markup and object model directly supports
            accessibility</p></td>
        </tr>
    </tbody>
</table>

#### Semantic

Семантическая вёрстка, или семантический HTML-код, — это подход к созданию веб-страниц на языке HTML, основанный на 
использовании HTML-тегов в соответствии с их семантикой (предназначением), а также предполагающий логичную и 
последовательную иерархию страницы.


### JavaScript 

JavaScript — прототипно-ориентированный сценарный язык программирования.

#### null vs undefined

`undefined` обозначает что значение не определено. В JavaScript есть глобальная переменная `undefined` значение, которой 
  "undefined" и `type undefined` тоже "undefined".
  
Способы получить `undefined`:
- объявить переменную без присвоения значения;
- неявный return;
- обращение к несуществующему свойству объекта;
- аргумент, который не был передан в функцию;
- присвоить;
- значение глобальной переменной `undefined`.
  
`null` примитивное значение, которое обозначает пустую или несуществующую переменную. 

#### == vs ===

`==` — проверка на равенство значений.

`===` - проверка на равенство значений и типов.


#### Что дает прототипирование? 

Легкий monkey patching, что в свою очередь может давать, например, расширение объектов ядра.  

```javascript
Date.prototype.nextDay = function(){
  var currentDate = this.getDate();
  return new Date(this.setDate(currentDate +1));
}
```

Next questions: [http://thatjsdude.com/interview/js2.html](http://thatjsdude.com/interview/js2.html)

### JS API 

#### windows vs document

window — глобальный объект, содержащий: глобальные переменные, глобальные функции, location, история и т.п.

document — представляет DOM, объектно ориентированное представление html. Логично, что функции getElementById и 
addEventListener относятся к document, а не к window.

```javascript
window.document === document; //true
window.getElementById; //undefined
document.getElementById; //function getElementById() { [native code] }
```

#### window.onload vs document.onload

`window.onload` вызывается когда DOM готов, а также весь контент включая изображения, css, скрипты, sub-frames и т.д. загружен. 

`document.onload` вызывается DOM построен. 

#### DOM Query 

- `getElementById`
- `getElementsByClassName` 
- `getElementsByTagName`
- `querySelector` 
- `querySelectorAll`

#### DOM ready 

Vanilla version `$(document).ready`?

__Вариант №1__ 

Положить скрипт в конец `body`

__Вариант №2__

```javascript
document.addEventListener('DOMContentLoaded', function(){   
   //put your script here
});
```

__Вариант №3__

```javascript
document.onreadystatechange = function () {  
  if (document.readyState == "complete") {
    //put your script here
  }
}
```
    
    
#### Событийная модель DOM'а (Event bubble)

Вопрос: Что такое событийная модель? Как распрространяются события? 
  
#### Document Rendering

* CSSOM — CSS Object Model
* DOM — Document Object Model

#### defer vs async 

![defer vs async](http://thatjsdude.com/images/asyncVsDefer.jpg)

### Another Important Topics

* Webpack 
* NPM (optimizations) 
* Tests 
* Linters
* Babel (ES6) 
* Graceful Degradation and Progressive Enhancement
* 

