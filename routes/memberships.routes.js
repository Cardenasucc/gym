/**
 * @author deivid & santiago
 * @version 1.0.0
 * 
 * People routes
 * This file defines people routes
 */

const {Router} = require('express');
const router = Router();


const{AddMembership, DeleteMembership, EditMembership, ShowMembership, Showmemberships } = require('');

router.get('/', Showmemberships);
router.post('/', AddMembership);
router.delete('/:id', DeleteMembership);
router.put('/:id', EditMembership);
router.get('/:id', ShowMembership);

MediaSourceHandle.exports=router;