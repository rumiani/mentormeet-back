import express, {Express, Request, Response} from 'express';
import User from './models/user';
const app: Express = express();
const port = process.env.PORT || 5000;

app.use(express.json())

// app.get('/', (req: Request, res: Response)=>{
//     res.send('Heldlo, this dis Express + TypeScript');
// });
app.post('/', (req: Request, res: Response)=>{
    const user = new User(req.body)
    user.save().then( () =>{
      res.send(user)
    }).catch((err) =>{
      console.log(err);
    })
});

app.listen(port, ()=> {
console.log(`[Server]: I am running at https://localhost:${port}`);
});