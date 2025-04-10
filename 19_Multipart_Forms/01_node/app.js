import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));

import multer from 'multer';
//const upload = multer({ dest: 'uploads/' });

const storage = multer.diskStorage({
  destination: (req, file, cb) => { //cb = call back
    cb(undefined, 'uploads/');
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const uniquefilename = `${uniqueSuffix}__${file.originalname}`;
    
    cb(undefined, uniquefilename); //file.originalname = name of the file
  }
});

function fileFilter(req, file, cb) {
  const validTypes = ['image/svg', 'image/png', 'image/jpeg'];

  if(!validTypes.includes(file.mimetype)) {
    cb(new Error('Invalid file type'), false);
  } else{
    cb(null, true);
  }
}

const upload = multer({ 
  storage,
  limits: { fileSize: 20 * 1024 * 1024 // 20MB in bytes 
  },
  fileFilter
});



app.post("/form", (req, res) => {
  console.log(req.body);
  delete req.body.password;
  res.send(req.body)
});

app.post("/fileform", upload.single('file'), (req, res) => {
  console.log(req.body);
  res.send();
});


const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});