import express from 'express';

const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('vwAccount/signup');
}); 
router.post('/signup', (req, res) => {
    res.send(JSON.stringify(req.body));
    res.sendFile('Thank you for registering!');
});
router.get('/login', (req, res) => {
    res.render('vwAccount/login');
});

export default router;