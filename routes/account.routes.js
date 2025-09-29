import express from 'express';
import userModel from '../models/user.model.js';
const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('vwAccount/signup');
}); 
router.get('/signin', (req, res) => {
    res.render('vwAccount/signin');
});

import bcrypt from 'bcryptjs';

router.post('/signup', async (req, res) => {
    const hash_password = bcrypt.hashSync(req.body.password, 10);
    const user = {
        username: req.body.username,
        password: hash_password,
        name: req.body.name,
        email: req.body.email,
        dob: req.body.dob,
        permission: 0
    }

    await userModel.add(user);
    res.render('vwAccount/signup');
});


router.post('/signin', async (req, res) => {
    const user = await userModel.findByUsername(req.body.username);
    const matchPassword = bcrypt.compareSync(req.body.password, user.password)
    if (matchPassword == false){
        return res.redirect('/admin/signup');
        
    }

    req.session.isAuthenticated = true;
    req.session.authUser = user;
    return res.redirect('/');
});

router.post('/signout', async (req, res) => {
    req.session.isAuthenticated = false;
    req.session.authUser = null;
    return res.redirect(req.headers.referer);
});

router.get('/is-available',async (req, res) => {
    const username = req.query.username;
    const user = await userModel.findByUsername(username);
    if (!user){
        return res.json(true);
    }
    return res.json(false);
});

export default router;