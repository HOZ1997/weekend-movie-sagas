import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function MovieDetails() {

    const dispatch = useDispatch();
    const details = useSelector(store => store.details);

    useEffect(() => {
        dispatch({ type: 'DETAILS_MOVIES' });
    }, []);

    
    return (
        <main>
            <h1>MovieList2</h1>
            {/* <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section> */}
        </main>

    );
}

export default MovieDetails;