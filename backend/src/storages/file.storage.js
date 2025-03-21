import multer from "multer";

const storage=multer.diskStorage({
    destination:'./filedic',
    filename:(req,file,cb )=>{
        cb(null, `${file.originalname}`);
    }
})

const uplos = multer({ storage });

export default uplos;