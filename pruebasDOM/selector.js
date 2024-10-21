//Selecting all buttons
let buttons = document.querySelectorAll('button')
console.log(buttons)

//Selecting all <h1>
let h1_array = document.querySelectorAll('h1')
console.log(h1_array)

//Selecting first <h1>
let first_h1 = document.querySelector('h1')
console.log(first_h1)

//Selecting second <h1>
console.log(h1_array[1])

//Selecting all elements from "relevant" class
let relevantElements = document.querySelectorAll('.relevant')
console.log(relevantElements)

//Selecting the <mark> tag
let highlighted = document.querySelector('mark')
console.log(highlighted)

//Selecting <li> from "relevant" class
let liRelevant = document.querySelectorAll('li.relevant')
console.log(liRelevant)

//Selecting the "relevant" and "subline" elements
let relevantAndSubline = document.querySelectorAll('.subline.relevant')
console.log(relevantAndSubline)

//Selecting all links in the navigations menu
let linkNavMenu = document.querySelectorAll('.menu')
console.log(linkNavMenu)

//Selecting the disabled button
let disableButton = document.querySelector('button[disabled]')
console.log(disableButton)

//Selecting the button that has an onClick() actions
let onClickButton = document.querySelector('button[onClick]')
console.log(onClickButton)

//Selecting the header with the "article2" id
let article2Header = document.querySelector('#article2')
console.log(article2Header)

//Selecting the "subline" elements inside the "relevant" <p>
let sublineInsideRelevant = document.querySelectorAll('p.relevant .subline')
console.log(sublineInsideRelevant)

//Selecting the <th> from the header of the <table>
let th_from_thead = document.querySelectorAll('thead th')
console.log(th_from_thead)

//Selecting the <th> which are "relevant" from the header of the <table>
let relevant_th_from_thead = document.querySelectorAll('thead th.relevant')
console.log(relevant_th_from_thead)

//Selecting the <th> which join 2 cells
let joined_th_cells = document.querySelectorAll('th[colspan]')
console.log(joined_th_cells)

//Selecting the <link> that redirects to "IES Las Galletas"
let linkIESLasGalletas = document.querySelector('a[href="https://ieslasgalletas.org/"]')
console.log(linkIESLasGalletas)

//Selecting the external links to the web
let externalLinks = document.querySelectorAll('a[href^="https://"]')
console.log(externalLinks)

//Selecting the <td> which are "relevant" from the body of the <table>
let relevant_td_from_tbody = document.querySelectorAll('tbody td.relevant')
console.log(relevant_td_from_tbody)

//Selecting the <h1> which are first-children from the header
let first_children_h1 = document.querySelectorAll('header > h1')
console.log(first_children_h1)

//Selecting the sections right after a <header>
let sections_header = document.querySelectorAll('header + section')
console.log(sections_header)

//Selecting the first cell from every row from the body of the <table>
let firstCellEveryRow = document.querySelectorAll('td:first-child')
console.log(firstCellEveryRow)

//Selecting both first <th> and <td>
console.log(document.querySelectorAll('td:first-child, th:first-child'))

//Selecting even <td>
console.log(document.querySelectorAll('td:nth-of-type(even)'))

//Selecting <p> which have at least 1 <span>
console.log(document.querySelectorAll('p:has(span)'))

//Selecting the last element of every <list>
console.log(document.querySelectorAll('li:last-child'))

//Selecting the 3rd column from <tbody>
console.log(document.querySelectorAll('tbody td:nth-child(3n)'))