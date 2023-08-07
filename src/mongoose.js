import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost:27017/mentorship-ser', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const User = mongoose.model('User', {
    task: String,
    status: Boolean
})
const user = new User({
    task: 'this is new task',
    status:5
})
user.save().then((user)=>{
    console.log(user);
}
).catch((err) => {
    console.log(err._message);
})