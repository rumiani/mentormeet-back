import express   from "express";
const app = express()
app.use(express.static('./public'));

app.get('/a', (req,res)=>{
    req.query
    res.send(req.query)
})

app.listen(5000, ()=>{
    console.log('server running on port 5000');
})