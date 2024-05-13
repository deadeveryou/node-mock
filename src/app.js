const express = require('express')
const app = express();
const port = 3000

//我这边使用了中间件
var cors=require("cors");

app.use(cors()); // 允许跨域

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/file/province/get',(req,res)=>{
  console.log(req);
  res.send(["福建","taibs"])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})