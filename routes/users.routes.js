/**
 * @author deivid & santiago
 * @version 1.0.0
 * 
 * Users routes
 * This file defines users routes
 */

const {Router} = require('express');

const router= Router();

/**
 * Importing methods or controllers
 */

const {AddUsers, ShowUsers, DeleteUsers, EditUsers, ShowUser, Login} = require('../controllers/users.controller');

/**
 * Routes
 */
router.get('/', ShowUsers);
router.post('/', AddUsers);
router.delete('/:id', DeleteUsers);
router.put('/:id', EditUsers);
router.get('/:id', ShowUser);
router.post('/Login', Login);

module.exports = router;