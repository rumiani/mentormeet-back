import './db/mongoose.js'
import express from 'express';
import User from './models/user.js';
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())

// app.get('/', (req: Request, res: Response)=>{
//     res.send('Heldlo, this dis Express + TypeScript');
// });


app.post('/', (req, res)=>{
    const user = new User(req.body)
    user.save().then( () =>{
      res.send(user)
    }).catch((err) =>{
      res.send(err)
    })
});

app.listen(port, ()=> {
console.log(`[Server]: Running at https://localhost:${port}`);
});