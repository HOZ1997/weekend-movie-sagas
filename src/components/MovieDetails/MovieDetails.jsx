//import React, { useEffect } from 'react';
import React from 'react';
import {useSelector } from 'react-redux';
//import axios from 'axios';

function MovieDetails() {

    
    const details = useSelector (store =>store.details);
  
    
    return (
         <main>
            <h1>MovieDetails</h1>
            <h3> Details: {JSON.stringify (details)}</h3>
            <ul>
                {details.map(details => (
                        <li key={details.id} >
                           <h3>{details.title}</h3>
                           <p>{details.poster}</p>
                           <p>{details.description}</p>
                         </li>   
                ))}
                </ul>
          
        </main>
  
     

    );
}

export default MovieDetails;