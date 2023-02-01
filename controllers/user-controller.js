const { User, Thought } = require("../models");

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    getSingleUser(req, res) {
        User.findOne()
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    createUsers(req, res) {
        User.create()
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    deleteUsers(req, res) {
        User.findOneAndDelete()
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    updateUsers(req, res) {
        User.findOneAndUpdate()
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    addFriend(req, res) {
        User.findOneAndUpdate()
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    removeFriend(req, res) {
        User.findOneAndUpdate()
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};

module.exports = userController;