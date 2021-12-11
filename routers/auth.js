const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
//Contollers
const usersController = require('../controllers/users');

router.route('/')
    .get((req, res) => {
        res.send('GET Auth router');
    })
    .post((req, res) => {
        res.send('POST Auth router');
    })

router.route('/login')
    .post((req, res) => {
        if (!req.body) {
            return res.status(400).json({message: 'Missing data'});
        } else if (!req.body.user || !req.body.password) {
            return res.status(400).json({message: 'Missing data'});
        }
        //Comprobamos credenciales 
        usersController.checkUserCredentials(req.body.user, req.body.password, (err, result) => {
            // Si no son validos, error
            if(err || !result){
                return res.status(401).json({message: 'Invalid credentials'});
            }
            //Si son validas, generamos un jwt y lo devolvemos 
            let user = usersController.getUserIdFromUserName(req.body.user);
            const token = jwt.sign({userId: user.userId}, 'secretPassword');
            res.status(200).json(
                {token: token}
            )
        })
    });

exports.router = router;