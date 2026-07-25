import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    credit: {
        type: Number,
        default: 100,
        required: true
    }

}, {timestamps:true})

const User = mongoose.model("User", userSchema)

export default User