const { User, Thought } = require("../models");

module.exports = {
    // getUsers
    getUsers(req, res) {
        User.find()
        // 
    }
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
},

    // getSingleUser
    getSingleUser(req, res) {
    User.findOne()
    // 
}
    .catch ((err) => {
    console.log(err);
    res.status(500).json(err);
});
},

// createUser
createUsers(req, res) {
    User.create()
    // 
}
    .catch ((err) => {
    console.log(err);
    res.status(500).json(err);
});
},

// deleteUser
deleteUsers(req, res) {
    User.findOneAndDelete()
    // 
}
    .catch ((err) => {
    console.log(err);
    res.status(500).json(err);
});
},

// updateUser
updateUsers(req, res) {
    User.findOneAndUpdate()
    // 
}
    .catch ((err) => {
    console.log(err);
    res.status(500).json(err);
});
},

// addFriend
addFriend(req, res) {
    User.findOneAndUpdate()
    // 
}
    .catch ((err) => {
    console.log(err);
    res.status(500).json(err);
});
},

// removeFriend
removeFriend(req, res) {
    User.findOneAndUpdate()
    // 
}
    .catch ((err) => {
    console.log(err);
    res.status(500).json(err);
});
},


module.exports = userController;