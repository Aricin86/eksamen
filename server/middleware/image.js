import multer from 'multer';
import ErrorHandler from '../utils/errorHandler.js';

function fileFilter(req, file, cb) {
  const filetypes = /\.(jpeg|jpg|png)$/;
  if (!file.originalname.match(filetypes)) {
    return cb(new ErrorHandler('Kun bildefiler er lov', 400));
  }
  cb(null, true);
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/images');
  },
  filename(req, file, cb) {
    cb(null, `custom_value_${file.originalname}`);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 1000000 }, // 1 MB
  fileFilter,
}).single('image');
