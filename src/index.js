import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';



const fname ="Rohit";
const lname ="Bhatti";

const img1 = "https://picsum.photos/280/300?grayscale";
const img2 = "https://picsum.photos/210/300?grayscale";
const img3 = "https://picsum.photos/150/300?grayscale";


const currentDate = new Date().toLocaleDateString(); 
const currentTime = new Date().toLocaleTimeString(); 


ReactDOM.render(



  // <div>
  //   <h1>Hello</h1>
  //   <p>ROHIT</p>
  //   </div >


  // Template Literals in JSX

  
  // <React.Fragment>
  //   <h1>Hello</h1>
  //   <p>ROHIT</p>
  //   </React.Fragment>




/* <>
<h1>Hello</h1>
<p>ROHIT</p>
</> */




/* <div class ="div">
<h1>Netflex pick</h1>
<p>list of series</p>
<ol>
  <li>DARK</li>
  <li>DARK</li>
  <li>DARK</li>
</ol>
</div> */







// JavaScript Expressions in JSX in ReactJs


//  <div class ="div">
//    <h1>My name is {fname} </h1>
//    <h3>My lucky number is {5+10} </h3>
//    <h3>My lucky number is {Math.random()} </h3>
//  </div>



// ES6 Template Literals 


//  <div class ="div">
//    <h1>My name is {fname} {lname} </h1>

//    <h1>My name is {fname + " " +lname} </h1>

//    <h1>{`My name is ${fname}  ${lname}` }</h1>

//  </div>

/* <div class ="div">
<h1>My name is {fname}</h1>
<p>Current date is = {currentDate}</p>
<p>Today  date is = {currentTime}</p>

</div> */




<>



{/* <h1 class ="div">picture</h1>
<div className="img_div">
  <img src = {img1} />
<img src = {img2} />
<a href = "https://www.facebook.com" target = "_blank"><img src = {img3} /></a>

</div> */}



</>
,document.getElementById('root')
);
