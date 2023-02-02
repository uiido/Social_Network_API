const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        // createdAt: {
        //     type: Date,
        //     default: Date.now,
        //     get: (timeMade) => dateFormat(timeMade),
        // },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

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
        // createdAt: {
        //     date: Date,
        //     default: Date.now,
        //     get: (timeMade) => dateFormat(timeMade),
        // },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;