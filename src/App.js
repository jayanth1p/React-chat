import React, { useState } from 'react';
// import data from './data';



function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  
  const data = [
    ];


async function  comp() {
  // Simple POST request with a JSON body using fetch
  // const url = 'http://127.0.0.1:5000/incomes'
  // fetch(url)
  // .then(response => response.json())  
  // .then(json => {
  //     console.log(json);


  fetch("http://127.0.0.1:5000/incomes", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
       data: "jay6a"}),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }

 
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json =>  data.push(json.data))
      
  })

}
var k= 10;
onclick= () =>{
  fetch('data.txt')
      .then(function(response){
        // console.log(response);
          return response.text();
      }).then(function (dat) {
      console.log(dat);
      data.push(dat);

  })


  fetch("http://127.0.0.1:5000/i?data=jaayay", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
       data: "jay6a"}),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }

 
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json =>  data.push(json.data))
      
  })
};



  const handleSubmit = (e) => {
    e.preventDefault();
   onclick();
comp()
   


  var ja={
name:"jayantgh",rool:"good"
  };
// const json = JSON.stringify(ja);
// console.log(json);

  // console.log(ret);
// data.push(toString(ret));

    data.push(count);
   console.log(data);
  //  data.concat([count]);
   k=k+1;
    setText(data);
  };


  return (
    <section className='section-center'>
      <h3>chat here</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='text '
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
