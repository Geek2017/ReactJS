import React from 'react';


export class HelloPlanet extends React.Component{


    
    render()
    {
var data0;  
var request = new XMLHttpRequest();
request.open('GET', 'http://freegeoip.net/json/', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
   var resp = request.responseText;
   JSON.stringify(resp);
   data0 = JSON.parse(resp).country_name
    // console.log(jm);
  } else {
    // We reached our target server, but it returned an error

  }
// console.log(jm);
localStorage.setItem('data',data0);
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
  var y=localStorage.getItem("data");

      return  <h1>I'm From { y } {this.props.name}</h1>
    }
}

