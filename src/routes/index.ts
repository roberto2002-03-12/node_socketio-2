import { Router } from 'express';
import path from 'path';

// ruta de views
const views = path.join(__dirname, "/../views");

const router = Router();

import { isLoggedIn } from '../middlewares/isLoggedIn'

router.get("/", isLoggedIn, (req, res) => {
  res.sendFile(views + "/index.html");
})

router.get("/login", (req, res) => {
  res.sendFile(views + "/register.html");
});

export default router;