import React from 'react';
import ReactDOM from 'react-dom';
import {HelloPlanet} from './components/HelloPlanet'


ReactDOM.render( 
<div>         
<HelloPlanet name="JM" />
<HelloPlanet name="Yanny" />
<HelloPlanet name="Nia" />
<HelloPlanet name="Jr." />   
</div>,
document.getElementById('firtssapp')
);

ReactDOM.render(

<h1>{1+1}</h1>,    
    document.getElementById('sum')
);