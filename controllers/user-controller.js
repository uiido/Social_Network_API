const { User, Thought } = require("../models");

const userController = {
    // Users
    getUsers(req, res) {
        User.find()
            .select("__v")
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // DONE?

    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userID })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: "Sorry, no user found with this ID!" });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // NOT DONE

    createUsers(req, res) {
        User.create(req.body)
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // NOT DONE

    deleteUsers(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: "Sorry, no user found with this ID!" });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // NOT DONE

    updateUsers(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: "Sorry, no user found with this ID!" });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // NOT DONE

    // Friends
    addFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: "Sorry, no user found with this ID!" });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // NOT DONE

    removeFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: "Sorry, no user found with this ID!" });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};
// NOT DONE

module.exports = userController;