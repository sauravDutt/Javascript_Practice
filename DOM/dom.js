// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
//  var items = document.getElementsByClassName('list-group-item');
//  console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
    
// }
// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px yellow';

// var input = document.querySelector('input');
// input.value = "Hello World";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = "red";

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = "green";

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = "blue";

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// //titles[0].textContent = "Hello"
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// var header = document.getElementById('main-header')
// header.style.borderBottom = 'solid 3px #000';

// TRAVERSING THE DOM // 

// var itemList = document.querySelector('#items');

//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChiled
// //console.log(itemList.firstChild);

// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello One"

// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Last Element Child"

// nextSibling
// console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
//console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'yellow';

// createElement

// create a div
// var newDiv = document.createElement('div');
// // add class
// newDiv.className = 'hello';

// //add id
// newDiv.id = 'hello1'

// // add attribute
// newDiv.setAttribute('title', 'Hello Div');

// // Create text node
// var newDivText = document.createTextNode('Hello World');

// //Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '20px';
// newDiv.style.fontWeight = '50';


// container.insertBefore(newDiv, h1);

// Events //

// Adding Event Listener 
// the following is one way of doing it :- 
// var button = document.getElementById('button').addEventListener ('click', function(){
//     console.log("123");
// });

//the other way is to use a name function :-
// var button = document.getElementById('button').addEventListener ('click', buttonClick);

// function buttonClick(e){
//     // console.log("You just chicked a Button")
//     // document.getElementById('header-title').textContent = "Changed";
//     // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//     // console.log(e);

//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>'+ e.target.id +'</h3>'

//     // console.log(e.type);

//     // console.log(e.clientX);
//     // console.log(e.clientY);
//     // console.log(e.offsetX)
//     // console.log(e.offsetY)

//     // console.log(e.altKey)
//     // console.log(e.ctrlKey)
//     // console.log(e.shiftKey)

// }
// var button = document.getElementById('button');
// var box = document.getElementById('box');

// button.addEventListener ('click', runEvent);
// button.addEventListener ('dblclick', runEvent);
// button.addEventListener ('mousedown', runEvent);
// button.addEventListener ('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

// var itemInput = document.querySelector('input[type="text"]'); 
// var form = document.querySelector('form');
// var select = document.querySelector('select');
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent)

// function runEvent(e){
//     console.log('Event Type ' + e.type);

//     e.preventDefault();
//     // console.log(e.target.value);
//     // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
//     // output.innerHTML = '<h3>MouseX: '+e.offsetX+ ' </h3><h3>MouseY: '+e.offsetY+'</h3>';
//     // document.body.style.backgroundColor = "rgb("+e.offsetX+ ","+e.offsetY+", 40)";
// }



//------------------- ALL THE BASICS OF DOM IS COVERED ABOVE --------------------//


// Working of the ITEM LISTER APPLICATION //

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}