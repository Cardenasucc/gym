/**
 * @author daferarte
 * @version 1.0.0
 * 
 * Rutas de personas
 * Este archivo define las rutas de personas
 */

const{Router}=require('express');
const router=Router();


const {AddOItems, DeleteOItems, EditOItems, ShowOItems, ShowOItemss} = router('/')
router.get('/', ShowOItems);
router.post('/', AddOItems);
router.delete('/:id', DeleteOItems);
router.put('/:id', EditOItems);
router.get('/:id', ShowOItemss);

module.exports=router;