import express from "express";
import cors from "cors"; // Đổi từ require sang import
import postRoutes from "./routes/post.route.js";
import { getPosts } from "./controllers/post.controller.js";
import { getUser } from "./controllers/authorize.controller.js";

const app = express();

// Sử dụng cors ngay sau khi khởi tạo app
app.use(cors()); 

app.use(express.json()); 
app.use("/api/posts", postRoutes);
app.use("/api/get", getPosts );

app.use("/login/get" , getUser)


export default app;