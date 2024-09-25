/**
 * @author deivid & santiago
 * @version 1.0.0
 * 
 * People routes
 * This file defines people routes
 */

const {Router} = require('express');
const router = Router();

/**
 * Importing methods or controllers
 */
const {AddPeople, DeletePeople, EditPeople, ShowPerson, ShowPeople} = require('../controllers/people.controller');

/**
 * Routes
 */
router.get('/', ShowPeople);
router.post('/', AddPeople);
router.delete('/:id', DeletePeople);
router.put('/:id', EditPeople);
router.get('/:id', ShowPerson);

module.exports = router;