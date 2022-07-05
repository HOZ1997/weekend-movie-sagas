import React from 'react';
//import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';


function MovieGenres() {

    //const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);



        return (
            <main>
               <h1>MovieGenres</h1>
               <h3> Genres: {JSON.stringify (genres)}</h3>
               <ul>
                   {genres.map(genres => (
                           <li key={genres.id} >
                              <h3>{genres.name}</h3>
                            </li>
                       
                   ))}
                   </ul>
             
           </main>
     
        
   
       );
   }
   
   export default MovieGenres;