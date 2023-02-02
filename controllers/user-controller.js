const { User, Thought } = require("../models");

const userController = {
    // Users
    getUser(req, res) {
        User.find({})
            .then((user) => {
                res.json(user);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userID })
            .select('__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    createUser(req, res) {
        User.create(req.body)
            .then((user) => {
                res.json(user);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId },
            { $set: req.body, },
            { runValidators: true, new: true, })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // Friends
    addFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true, })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    removeFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};

module.exports = userController;