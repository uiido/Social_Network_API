const { User, Thought } = require("../models");

module.exports = {
    // getThoughts
    getThoughts(req, res) {
        Thought.find()
        // 
    }
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
},

    // getSingleThought
    getSingleThought(req, res) {
    Thought.findOne()
    // 
}
    .catch ((err) => {
    console.log(err);
    res.status(500).json(err);
});
},

// createThought
createThought(req, res) {
    Thought.create()
    // 
}
    .catch ((err) => {
    console.log(err);
    res.status(500).json(err);
});
},

// deleteThought
deleteThought(req, res) {
    Thought.findOneAndUpdate()
    // 
}
    .catch ((err) => {
    console.log(err);
    res.status(500).json(err);
});
},

// updateThought
updateThought(req, res) {
    Thought.findOneAndUpdate()
    // 
}
    .catch ((err) => {
    console.log(err);
    res.status(500).json(err);
});
},

// addReaction
addReaction(req, res) {
    Thought.findOneAndUpdate()
    // 
}
    .catch ((err) => {
    console.log(err);
    res.status(500).json(err);
});
},

// removeReaction
removeReactions(req, res) {
    Thought.findOneAndUpdate()
    // 
}
    .catch ((err) => {
    console.log(err);
    res.status(500).json(err);
});
},

module.exports = thoughtController;