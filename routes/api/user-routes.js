const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend,
} = require('../../controllers/user-controller');

router.route('/').get(getUser).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;