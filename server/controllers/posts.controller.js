const db = require('../config/mysql.config')


module.exports = {
    createPost: async (req,res) => {
        try {
            const {productName, type,rating,review} = req.body
            const imageName = req.file.filename

            const query= 'INSERT INTO posts (productName, type, rating, review, imageName) VALUES (?, ?, ?, ?, ?)';
            const values= [productName,type,rating,review,imageName]
            console.log('postcontroller',rating);

            db.query(query,values, (err,result) => {
                if(err) {
                    console.error('Error inserting data into database:', err);
                    res.status(500).json({ error: 'Internal server error' }); 
                }else {
                    console.error('Error inserting data into database:', err);
                    res.status(500).json({ error: 'Internal server error' }); 
                }
            })
        }
        catch (error){
            console.log('here', error)
        }
    }
}