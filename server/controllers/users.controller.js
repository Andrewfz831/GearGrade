const db = require('../config/mysql.config')
const bcrypt = require('bcrypt')
const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken')


module.exports = {

    register: async (req, res) => {
        try {
            //this checks if the email exist when the user tries to register
            const q = "SELECT * FROM users Where email = ? OR username = ?"

            // checks if the email or the username already exist and if it does it throws an err
            db.query(q, [req.body.email, req.body.username], (err, data) => {
                if (err) return res.json(err)
                if (data.length) return res.status(409).json('User exists')

                // using bcrypt to encrypt the users password
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(req.body.password, salt)

                const q = 'INSERT INTO users(`username`, `email`, `password`,`created`) VALUES (?)'
                const values = [
                    req.body.username,
                    req.body.email,
                    hash,
                    new Date()
                ]

                // use the information given from the form to insert the users info in the database
                db.query(q, [values], async (err, data) => {
                    if (err) return res.json(err)
                    const userId = data.insertId
                    const getUserById = 'SELECT * FROM users WHERE ID = ?'

                    db.query(getUserById, [userId], async (err , data) => {
                        if(err) return res.json(err)

                        const user = data[0]
                        //creates token, three arguments
                        //1.pass in what we want to serialize(payload)
                        //2.secret key to serialize
                        //3.set time for userToken to expire in 
                        const userToken = jwt.sign({userID: user.id, email: user.email}, secret, {expiresIn: '2h'});
                        console.log(userToken);
                        return res.cookie('userToken', userToken, {httpOnly:true, maxAge: 2*60*60*1000}).status(200).json({message: 'user logged in'})
                    })
                    
                })
            })
        }
        catch (err) {
            console.log(err);
            res.status(400).json(err)
        }
    },
    login: async (req, res) => {
        try {
            // saving email and password that user inputed and saving into a variable
            const email = req.body.email
            const password = req.body.password
            //doing a query to check if email matches a user in the DB
            const q = "SELECT * FROM users WHERE email = ?"
            db.query(q, [email], async (err, data) => {
                if (err) {
                    return res.json("Error in database query")
                }
                //if the data returns with nothing then give error
                if(data.length === 0) {
                    return res.status(404).json("Email/password incorrect")
                }
                //grab the user that returns and store in a variable 
                const user = data[0]
                console.log('here', user);

                // use bcrypt method to compare password given by the user and password stored in the database
                const passwordMatch = await bcrypt.compare(password, user.password)
                //if passwords do match make a userToken and input id and email into the payload for later use 
                if(passwordMatch) {
                    const {id,email} = user

                    const userToken = jwt.sign({userID: user.id, email: user.email}, secret, {expiresIn: '2h'});
                    return res.cookie('userToken', userToken, {httpOnly:true, maxAge: 2*60*60*1000}).status(200).json({message: 'user logged in', id, email})
                }else {
                    return res.status(404).json({error: 'Email/password incorrect'})
                }
                
            })

        }
        catch (err) {
            console.log(err);
            res.status(400).json(err)
        }
    },
    logout: (req,res) => {
        res.clearCookie('userToken');
        // res.clearCookie('loggedUser');
        res.json({ message: 'User is logged out' })
    }
} 