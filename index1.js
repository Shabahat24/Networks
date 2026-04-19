import https from 'https';

const API = "https://jsonplaceholder.typicode.com/posts/1"
https.get (API, (res)=>{
    let data = '';
    res.on('data',(chunk)=>data+=chunk);
    res.on('end',()=>console.log(JSON.parse(data)))

}).on('error',(err)=>console.log('Request Failed!', err.message))