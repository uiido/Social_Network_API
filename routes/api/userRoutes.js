const router = require('express').Router();
const {
    getUsers,
    getSingleUsers,
    createUsers,
    deleteUsers,
    updateUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUsers);

router.route('/:userId').get(getSingleUsers).delete(deleteUsers);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;