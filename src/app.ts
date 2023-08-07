import express   from "express";
import { Request,Response } from "express";
const app = express()
app.use(express.static('./public'));

app.get('/a', (req:Request,res:Response)=>{
    req.query
    res.send(req.query)
})

app.listen(5000, ()=>{
    console.log('server running on port 5000');
})