const client = require("../Configs/db.config");

//Create function to get all movies
module.exports.movielist = async (req, res) => {
    try{  
        await client.query(`
            SELECT * FROM Movies;`, (error, results) => {
            if(error){ //checks for errors and return them 
                return res.status(400).json({
                    error: "Database error"
                })//Throw t //Throw the error in the terminal
            }
            res.status(200).json(results.rows) //Return a status 200 if there is no error
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
    };
}

//Create function to get movie by id
module.exports.moviebyid = async (req, res) => {
    const movie_id = parseInt(req.params.movie_id)
    try{  
        await client.query(`
            SELECT * FROM Movies as m 
            INNER JOIN Actors as a ON m.movie_id = a.movie_id
            WHERE m.movie_id = $1`,[movie_id], (error, results) => {
            if(error){ //checks for errors and return them 
                return res.status(400).json({
                    error: "Database error"
                })//Throw t //Throw the error in the terminal
            }
            res.status(200).json(results.rows) //Return a status 200 if there is no error
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
    };
}
