import multer from 'multer';
import multers3 from 'multer-s3';
import path from 'path';

import { v4 as uuid } from 'uuid';

import AWS from '../config';

const {
  AWS_S3_BUCKET,
  AWS_S3_BUCKET_MEDIA_KEY_PREFIX,
} = process.env;

const s3 = new AWS.S3();

const upload = multer({
  fileFilter: (req, file, cb) => {
    const extension = path.extname(file.originalname);

    const filetypes = /mp4|webm|jpg|jpeg|png/;

    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(extension);

    if (mimetype && extname) {
      return cb(null, true);
    }

    return cb(new Error(`Invalid extension ${extension}`));
  },
  storage: multers3({
    s3,
    bucket: AWS_S3_BUCKET,
    acl: 'public-read',
    key: (req, file, cb) => {
      cb(null, `${AWS_S3_BUCKET_MEDIA_KEY_PREFIX}/${uuid()}-${file.originalname}`);
    },
  }),
});

export default upload;
