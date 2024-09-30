/**
 * @author deivid & santiago
 * @version 1.0.0
 * 
 * Rutas de personas
 * Este archivo define las rutas de personas
 */


const {Router} = require('express');
const router = Router();

const{AddOrder, DeleteOrder, EditOrder, ShowOrder, ShowOrders} = require('')

router.get('/', ShowOrder);
router.post('/', AddOrder);
router.delete('/:id', DeleteOrder);
router.put('/:id', EditOrder);
router.get('/:id', ShowOrders);

module.exports=router;