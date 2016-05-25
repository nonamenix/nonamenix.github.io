---
layout: page
title: Frontend Developer Interview Topics
---

### Общие вопросы

- Как вы проверяете что поддерживают те или иные браузеры 

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

<table class="tables">
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


### Document Rendering

* CSSOM — CSS Object Model
* DOM — Document Object Model

### Layout 
* Graceful Degradation and Progressive Enhancement

