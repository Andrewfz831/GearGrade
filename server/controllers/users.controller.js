const db = require('../config/mysql.config')
const bcrypt = require('bcrypt')

module.exports = {

    register: async (req, res) => {
        try {
            const q = "SELECT * FROM users Where email = ? OR username = ?"

            db.query(q, [req.body.email, req.body.name], (err, data) => {
                if (err) return res.json(err)
                if (data.length) return res.status(409).json('User exists')

                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(req.body.password, salt)

                const q = 'INSERT INTO users(`username`, `email`, `password`) VALUES (?)'
                const values = [
                    req.body.username,
                    req.body.email,
                    hash
                ]

                db.query(q, [values], (err, data) => {
                    if (err) return res.json(err)
                    return res.status(200).json('user has been created')
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
            const email = req.body.email
            const q = "SELECT * FROM users WHERE email = ?"
            console.log(email);
            db.query(q, [email], (err, data) => {
                if (err) {
                    return res.json("Error in database query")
                }
                if(data.length === 0) {
                    return res.status(404).json("Email not found")
                }
                
                return res.status(200).json('User Logged In')
            })

        }
        catch (err) {
            console.log(err);
            res.status(400).json(err)
        }
    }
} 