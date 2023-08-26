import './db/mongoose.js'
import express from 'express';
import userRouter from './routers/user.js'
import cors from 'cors';
const app = express();
app.use(express.json())

const port = process.env.PORT || 5000;

app.use(cors({
  origin: ['http://localhost:3000'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));


app.use(userRouter)



app.listen(port, ()=> {
console.log(`[Server]: Running at https://localhost:${port}`);
});