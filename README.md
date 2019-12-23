# getElementAll

## what is this?
this package help you when you do getElementById or getElementsByClass

```
import * as getAll from 'getelements'
getAll.getAllElementById(); // Get all the elements that have an ID
getAll.getAllElementByClass() // get all the elements that have an classes

```

## example

```
// index.html
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
  </head>
  <body>
      <div id="test1" class="test hi"></div>
      <div id="test2" class="test hi"></div>
      <div id="test3" class="test"></div>
      <div id="test4" class="test"></div>
  </body>
</html>

// index.js

import * as getAll from 'getelements'

getAll.getAllElementById();
/*
{
  test1:<div id="test1" class="test hi"></div>,
  test2:<div id="test2" class="test hi"></div>
  test3:<div id="test3" class="test"></div>
  test4:<div id="test4" class="test"></div>
}
*/

getAll.getAllElementByClass();
/*
  {
    hi:[
      <div id="test1" class="test hi"></div>
      <div id="test2" class="test hi"></div>
    ],
    test:[
      <div id="test1" class="test hi"></div>
      <div id="test2" class="test hi"></div>
      <div id="test3" class="test"></div>
      <div id="test4" class="test"></div>
    ]
  }
*/


getAll.getAllElementByTagName();
