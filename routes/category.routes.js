import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('vwAdminCategory/list');
});

router.get('/add', (req, res) => {
    res.render('vwAdminCategory/add');
});

router.get('/edit', (req, res) => {
    res.render('vwAdminCategory/edit');
});
export default router;