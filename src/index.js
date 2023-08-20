import './db/mongoose.js'
import express from 'express';
import userRouter from './routers/user.js'

const app = express();

const port = process.env.PORT || 5000;

app.use(userRouter)

app.use(express.json())


app.listen(port, ()=> {
console.log(`[Server]: Running at https://localhost:${port}`);
});