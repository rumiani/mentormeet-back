// import mongodb from 'mongodb'
// const MongoClient = mongodb.MongoClient
// const url = 'mongodb://localhost:27017'
// const dbName = 'maztest'
// MongoClient.connect(url, {  useNewUrlParser: true}, (error, client) =>{
//     if(error){
// console.log('error');
//     }else{
//         const db = client.db(dbName)
//         db.collection('users').insertMany(
//             [
//                 {
//                     name: 'maz',
//                     age:32
//                 },{
//                     name: 'aaa',
//                     age:44
//                 }
//             ],(error, res)=>{
//                 error? console.log(error):
//                 console.log(res.ops);
//             })
//         console.log('data')
//     }
// })