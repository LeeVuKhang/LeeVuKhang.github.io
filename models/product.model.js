import db from '../utils/db.js';

export default {
    findByCat(id){
        return db('products').where('catid', id);
    }
}