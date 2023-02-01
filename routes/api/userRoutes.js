const router = require('express').Router();
const {
    getUsers,
    getSingleUsers,
    createUsers,
    deleteUsers,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUsers);

router.route('/:userId').get(getSingleUsers).delete(deleteUsers);

module.exports = router;