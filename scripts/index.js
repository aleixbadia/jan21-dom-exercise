'use strict';


// Working with Attributes of the elements

const h1 = document.querySelector('#title');
const googleLink = document.querySelector('#google-link');
const contentDiv = document.querySelector('#content');

const list = document.querySelector('#item-list');
// const list = contentDiv.querySelector('#item-list');
// const list = document.querySelector('ul');
// const list = document.querySelector('#content ul');





console.log('h1', h1);
console.log('googleLink', googleLink);

//  .getAttribute() -  Get the attribute value from an element
const h1Id = h1.getAttribute('id');
const linkClass = googleLink.getAttribute('class');
const linkHref = googleLink.getAttribute('href');


// .setAttribute(attrName, attrValue) - Change the value of the attribute
googleLink.setAttribute('href', 'https://google.com');
contentDiv.setAttribute('class', 'container');


console.log('contentDiv', contentDiv);

// .removeAttribute(attrName) - Removes and existing 
console.log('list', list);
list.removeAttribute('id');



// CREATE NEW ELEMENTS
// document.createElement( elementType )

const h2Tag = document.createElement('h2');
h2Tag.innerHTML = 'Sub Title';


const body = document.querySelector('body');  // document.body

body.appendChild(h2Tag);


// Adding content to an element 
// .innerHTML = 'content'    or   .createTextNode('text content')
// .innerHTML is dynamic and it can be used to create HTML elements

// Create element
const articleBrief = document.createElement('h3');
const articleContent = document.createElement('p');

// Create text node
const textContent1 = document.createTextNode('I am an article brief');
const textContent2 = document.createTextNode('Lorem Ipsum'.repeat(100));

// Append text node to element
articleBrief.appendChild(textContent1);
articleContent.appendChild(textContent2);

// Append element with to the body
body.appendChild(articleBrief);
body.appendChild(articleContent);

