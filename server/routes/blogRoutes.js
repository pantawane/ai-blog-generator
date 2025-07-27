import express from 'express'
import { addBlog, addComment, deleteBlogById, generateContent, getAllBlogs, getBlogById, getBlogComments, tooglePublish } from '../controllers/blogController.js';
import upload from '../midleware/multer.js';
import auth from "../midleware/auth.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single('image'),auth, addBlog)
blogRouter.get('/all', getAllBlogs);
blogRouter.get('/:blogId', getBlogById);
blogRouter.post('/delete', auth, deleteBlogById);
blogRouter.post('/toogle-publish', auth , tooglePublish);
blogRouter.post('/add-comment', addComment);
blogRouter.post('/comments', getBlogComments);

blogRouter.post('/generate', auth,  generateContent);

export default blogRouter;

