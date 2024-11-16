import multer from 'multer'
const storage=multer.diskStorage({
    filename:function(req,file,calllback){
        calllback(null,file.originalname)
    }
})

const upload =multer({storage})
export default upload