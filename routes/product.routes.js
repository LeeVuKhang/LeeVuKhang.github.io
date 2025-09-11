import express from 'express';

const router = express.Router();

router.get('/byCat', (req, res) => {
    res.render('vwProducts/byCat');
});

export default router;