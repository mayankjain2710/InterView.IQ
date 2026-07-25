import mongoose, { connect } from 'mongoose'

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected")
    } catch (error) {
        console.log(`Error Occured in database Connection ${error}`)
    }
}

export default connectDb