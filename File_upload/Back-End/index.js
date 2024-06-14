const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');


app.use(express.json());
app.use(cors());
const port = process.env.port || 4000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads")
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  })
  
  const upload = multer({ storage: storage})

let arr =["safi","sheri","aqeel","adnan"]

app.get('/', (req , res)=>{
    res.status(200).send({data: arr})
})
app.post('/upload', upload.single('files'), (req, res)=>{
    console.log(req.file)
    res.status(200).send({data: "uploaded"})
    return res.redirect("/")
})


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})