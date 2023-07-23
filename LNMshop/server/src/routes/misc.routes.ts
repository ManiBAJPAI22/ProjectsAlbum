import express, { Request } from 'express';
import { homeHandler, uploadImageHandler } from '../controllers';
const multer = require('multer');
const router = express.Router();

const fileFilter = (
  req: Request,
  file: any,
  cb: (err: Error | null, isAccepted: boolean) => void
) => {
  if (
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png'
  ) {
    cb(null, true);
  } else {
    cb(new Error('File Format is not an jpg/jpeg/png'), false);
  }
};

const storage = multer.memoryStorage();

// multer middleware
const upload = multer({
  storage,
  fileFilter,
});

router.put('/:id/upload-image', upload.single('imgfile'), uploadImageHandler);

router.get('/home', homeHandler);

export default router;
