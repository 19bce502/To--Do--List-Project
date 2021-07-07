// // // // alert('hello world');
// // // console.log('Hello World');
// // // console.log(123);
// // // console.log(true);
// // // var greetings='Hello';
// // // console.log(greetings);
// // // console.log([1,2,3,4]);
// // // console.log({a:1 , b:2});
// // // console.table({a:1 , b:2});
// // // console.error('this is some error');
// // // console.clear();
// // // console.warn('This is a warning');
// // // console.time('Hello');
// // //     console.log('Hello World');
// // //     console.log('Hello World');
// // //     console.log('Hello World');
// // // console.timeEnd('Hello');
// // // console.clear();

// // // var name="sakshi";
// // // console.log(name);
// // // //init variable
// // // var greetings;
// // // console.log(greetings);
// // // greetings='Hello';
// // // console.log(greetings);


// // const person={

// //     name: 'Sakshi',
// //     age:30
// // }
// // person.name='Sara';
// // person.age=32;
// // console.log(person);
// // const num=[1,2,3,4,5];
// // num.push(6);
// // console.log(num);
// //primitive datatypes
// //String 
// // const name ='abc';
// // const age = 21;
// // const haskid= true;
// // const car=null;
// // let test;
// // const sym=Symbol();
// // //const reference 
// // const hobbies =['movies','music' ];
// // const address={
// //     city:'boston',
// //     state:'MA'
// // }
// // const today=new Date();
// // console.log(today);
// // console.log(typeof today);
// // let val;
//  val=String(5);
//  console.log(val);
//  console.log(typeof val);
//  console.log(val.length);


// val=String(555);
// val=String(4+4);
// val=String(true);
// val=String(new Date());

// val =String([1,2,3,4,5]);
// val=(5).toString();
// val=(true).toString();

//Math variables
// const num1=20;
// const num2=50;
// let val;
// val=num1+num2;
// console.log(val);
// //Math objects
// val=Math.PI;
// console.log(val);
// val=Math.PI;
// val=Math.E;
// console.log(val);
// val=Math.round(2.8);
// val=Math.ceil(2.4);
// val=Math.floor(2.8);
// console.log(val);
// val=Math.sqrt(64);
// val=Math.abs(-4);
// val=Math.pow(8,2);
// val=Math.random();
// val=Math.floor(Math.random()*20+1);
// console.log(val);




//Strings 


// const firstname='Sakshi';
// const lastname='Ankleshwariya';
// const str='My name is sakshi';
// const tag='web design , portfolio ';
// const age=21;
// let val;
// val=firstname+" " + lastname;

// val='Hello my name is '+firstname+'and my age is '+age;
// val=firstname[2];   
// val=firstname.indexOf('h');
// val=firstname.lastIndexOf('h');
// val=firstname.charAt('2');
// val=firstname.charAt(firstname.length-1);
// val=firstname.substring(0,4);
// val=firstname.slice(0,4);
// val=str.split(' ');
// val=tag.split(',')
// console.log(val);

//template string

// const firstname='Sakshi';
// const lastname='Ankleshwariya';
// const age='21';
// let html;
// // html= '<ul>'+
// // '<li>Name : '+firstname+'</li>'+
// // '<li>Name : '+lastname+'</li>'+
// // '<li>Name : '+age+'</li>';
// html=`
// <ul>
// <li>Name :${firstname}</li>
// <li>LastName :${lastname}</li>
// <li>Age :${age}</li>
// </ul>
// `;



// document.body.innerHTML=html;




//Arrays 
// const num=[1,2,3,4];
// const num1=new Array(11,22,33,44,55);
// const fruit =['Apple','Banana','Grapes'];
// const mixed=[22,'hello', true, undefined ,null ,{a:1 , b:1},new Date()];
// let val;
// val=num.length;
// val=Array.isArray(num);

// console.log(num);
// val=num.concat(num1);
// val=num.sort(function(x,y){
// return x-y;
// });
// //reverse sort
// val=num.sort(function(x,y){
//     return x-y;
// });
// function under50(num)
// {
//     return num<50;
// }
// val=num.find(under50);
// console.log(num);
// console.log(val); 

// let val;
// const today=new Date();
// let birthday=new Date('9-10-1981 11:25:00');
// birthday =new Date('September 10 1981');
// birthday=new Date('9/10/1981');
// val=today.getMonth(); 
// val=today.getDate(); 
// console.log(val);


//if else 
// const na ='Sakshi';
// const age = 28;

// if(age<16 || age >45)
// {
//     console.log(`${na} cannot run in race`);
// }
// else{
//     console.log(`${na} done`)
// }
//switch cases 
// const color='red';
// switch(color)
// {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('çolor is not red');
//         break;
// }

//function declaration

// function greet(firstname ='john')
// {
//     //console.log("Hello");
//     return 'Hello'+ ' '+firstname;
// }
// console.log(greet());

// const square=function(x)
// {
//     return x*x;
// }
// console.log(square(8));


// (function(){
// console.log('abcs....');
// })();


// const todo={
//     add:function()
//     {
//         console.log('Add todo');
//     }
// }
// todo.add();

// const user=[
// {id : 1 , name: 'John'},
// {id : 2 , name: 'sakshi'},
// {id : 3 , name: 'alice'}

// ];

// const ids=user.map(function (user)
// {
// return user.id;
// });
// console.log(ids);

// let val;
// val=window.outerHeight;
// val=window.outerWidth;
// val.window.scrollY;
// console.log(val);


// let val

// val=document;
// val=document.all;
// val=document.all[0];
// val=document.all.length;
// val=document.head;
// val=document.body;
// val=document.doctype;
// val=document.domain;
// val=document.URL;
// val=document.characterSet;
// val=document.contentType;
// console.log(val);


// console.log(document.getElementById('task-title'));
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);
// const taskTitle=document.getElementById('task-title');

// //styling
// document.getElementById('task-title').style.background='#333';
// document.getElementById('task-title').style.color='#fff';
// document.getElementById('task-title').style.padding='5px';
// //change content
// taskTitle.textContent='Task List';
// taskTitle.innerText='My Task';
// taskTitle.innerHTML ='<span style="color:red">Task List</span>';


//document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));
// document .querySelector('li').style.color='red';
// document .querySelector('ul li').style.color='blue';
// document.querySelector('li:last-child').style.color='red';
// document.querySelector('li:nth-child(3)').style.color='yellow';

// const items=document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color='red';
// items[3].textContent='Hello';
// const listItems=document.querySelectior('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// const lis=document.getElementsByTagName('li');
// console.log(lis);
//  console.log(lis[0]);
//  lis[0].style.color='red';
//  lis[3].textContent='Hello';
// lis=Array.from(lis);
// lis.reverse();
// lis.foreach(function (li,index) {
//     console.log(li.className);
//     li.textContent=`${index}:Hello`;

// })
// console.log(lis);
// // items[3].textContent='Hello';

// const items=document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item,index) {
//     item.textContent=`${index}: Hello`;
// });
// const liOdd=document.querySelectorAll('li:nth-child(odd)');
// const lieven=document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li,index){
//     li.style.background='#ccc';

// });
// for(let i=0;i<lieven.length;i++)
// {
//     lieven[i].style.background='#f4f4f4';
// }
// console.log(items);

// let val;
// const list =document.querySelector('ul.collection');
// const list=document.querySelector('li.collection-item:first-child');
// val=listItem;
// val=list;
// val=list.childNodes;
// val=list.childNodes[0];
// val=list.childNodes[0].nodeName;
// val=list.childNodes[3].nodeType;
// // 1- Element
// // 2-Attribute
// // 3-textnode
// // 8-comment
// // 9-document itself
// // 10-doctype
// //get children node
// val=list.children;
// val=list.children[1];
// list.children[1].textContent='Hello';
// list.children[3].children[0].id='test';
// val=list.children[3].children[0];
// console.log(val);


// //create element
// const li =document.createElement('li');
// //add class name
// li.className='collection-item';
// li.id='new-item';
// //Add attribute
// li.setAttribute('title','New Item');
// //create text node and append
// li.appendChild(document.createTextNode('Hello World'));
// //create new link element
// const link=document.createElement('a');
// //Add classes
// link.className='delete-item secondary-content';
// //add icon html
// link.innerHTML='<i class="fa fa-remove"></i>';
// //append link to li
// li.appendChild(link);
// //append li as a child 
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);




//create element
// const newHeading=document.createElement('h2');
// //Add id
// newHeading.id='task-title';
// //new text node
// newHeading.appendChild(document.createTextNode('Task List '));

// //get oldelement replace
// const oldHeading=document.getElementById('task-title');
// //parent
// const cardAction=document.querySelector('.card-action');

// //Replace
// cardAction.replaceChild(newHeading,oldHeading);
// //remove element
// const lis =document.querySelectorAll('li');
// const list=document.querySelector('ul');

// //Remove list item
// lis[0].remove();
// list.removeChild(lis[3]);
// //class attr
// const firstLi=document.querySelector('li:first-child');
// const link = firstLi.children[0];
// let val;
// val=link.className;
// val=link.classList;
// val=link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val=link;
// //attribute
// val=link.getAttribute('href');
// val=link.setAttribute('href','http://google.com');
// link.setAttribute('title','Google');
// val=link.hasAttribute('title');
// link.removeAttribute('title');
// val=link;

// console.log(val);
// document.querySelector('.clear-task').addEventListener('click',function(e){
// console.log('Hello World')
// });

// document.querySelector('.clear-tasks').addEventListener('mouseover', 
// onClick);
// function onClick(e){
//     //console.log('Clicked');
//     let val;
//     val=e;
//     val=e.target;
//     val=e.target.id;
//     val=e.target.className;
//     val=e.target.classList;
// //event type
// val=e.type;
// val=e.timeStamp;
// val=e.clientX;
// val=e.clientY;

// val=e.offsetY;
// val=e.offsetX;
    
//     console.log(val);

// }

// const clearBtn=document.querySelector('.clear-task');
// const card=document.querySelector('.card');
// const heading = document.querySelector('h5');

// //click
// // clearBtn.addEventListener('click' , runEvent);
// // //DoubleClick
// // clearBtn.addEventListener('dblclick', runEvent);
// card.addEventListener('mousemove',runEvent);
// //Event handler
// function runEvent(e) {
// console.log(`EVENT TYPE: ${e.type}`);  

// heading.textContent=`MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
// document.body.style.backgroundColor= ``;
// }

// const form=document.querySelector('form');
// const taskInput=document.getElementById('task');
// const heading =document.querySelector('h5');
// //clear task
// taskInput.value ='';
// taskInput.addEventListener('keydown',runEvent);
// function runEvent(e)
// {
//     console.log(`EVENT TYPE : ${e.type}`);
//     console.log(e.target.value);
//     heading.innerText=e.target.value;
    
// }