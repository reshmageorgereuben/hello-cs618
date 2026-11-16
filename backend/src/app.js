//setting the routes

import express from "express";
import { postsRoutes } from "./routes/posts.js";
import bodyParser from "body-parser";
import cors from 'cors'

const app = express();
app.use(bodyParser.json())
app.use(cors())
// app.use(cors(
//   { origin: "http://localhost:5173",}
// ))

postsRoutes(app);

// home page route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

export { app };
