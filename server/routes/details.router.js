const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

 router.get('/', (req, res)=>{
    //const query = `SELECT * FROM movies JOIN movies_genres ON movies.id = movies_genres.movie_id JOIN genres ON genres.id = movies_genres.genre_id WHERE movies.id = $1,$2,$3,$4;`
    const query = `SELECT * FROM movies`;
    //console.log('in details router', req.params);
    pool.query(query).then( result => {
         res.send(result.rows);
       })
       .catch(err => {
         console.log('ERROR: Get all details', err);
        res.send(params)
        })
 });



 // router.get('/like/:id', req,res)=>{
    //console.log(req.params);
    // pool = req.params.id;
    //for(const poolInfo of pool){
   //if (poolInfo.id == poolInfo){
     //pool.query(query, [req.body.title, req.body.poster, req.body.description])
  // }
// }
//} 



module.exports = router;