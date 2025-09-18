import express from 'express';
import productModel from '../models/product.model.js';
const router = express.Router();

router.get('/byCat', async (req, res) => {
    const id = req.query.id || 0 ;
    const list = await productModel.findByCat(id);    
    res.render('vwProducts/byCat', { products: list });
});

export default router;