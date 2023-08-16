import mongoose from 'mongoose'

mongoose.connect(process.env.LOCAL_MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})