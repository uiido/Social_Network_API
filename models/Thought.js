const { Schema, model, Types } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            unique: true,
            required: "You must leave a thought!",
            minlength: 1,
            maxlength: 280,
            trim: true,
        },
        username: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;