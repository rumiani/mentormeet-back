import express from 'express';
import User from '../models/user.js';

const userRouter = new express.Router()
userRouter.post('/login', async (req, res)=>{
  const username = req.body;
  console.log(username);
  try {
    const user = await User.findOne({ "username":username })
    if(!user) return res.status(404).send('User not found');
    res.send(`<h1>${user.username}<h1>`)
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});


userRouter.post('/', (req, res)=>{
    // User.find(req.body).then( () =>{
    //   res.send(user)
    // }).catch((err) =>{
    //   res.status(400)
    //   res.send(err)
    // })
});
userRouter.get('/mentors/:username', async(req,res)=>{
  const username = req.params.username;
  try {
    const user = await User.findOne({ "username":username })
    if(!user) return res.status(404).send('User not found');
    res.send(`<h1>${user.username}<h1>`)
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
})

userRouter.get('/mentors', async(req,res)=>{
  console.log(req.body);
  try {
    const mentors = await User.find({ role: 'mentor' })
    res.send(mentors)
  } catch (error) {
    console.log(error);
    res.status(500).send(error)
  }
})
// update time slots
userRouter.patch('/mentors/:username', async (req, res) =>{
  const username = req.params.username;
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'password', 'age']
  const isValidOperation = allowedUpdates.every(update => allowedUpdates.includes(update))

  if(!isValidOperation) return res.status(400).send('invalid updates')
  try {
    const user = await User.findOneAndUpdate({ "username":username }, req.body,{new: true, runValidators: true})
    if(!user) return res.status(404).send()
    res.send(user)
  } catch (error) {
    res.status(500).send(error)
  }
})
// delete time slots
userRouter.delete('/mentors/:username', async (req, res) =>{
  const username = req.params.username;
  try {
    const user = await User.findOneAndDelete({ "username":username })
    if(!user) return res.status(404).send()
    res.send(user)
  } catch (error) {
    res.status(500).send(error)
  }
})
export default userRouter