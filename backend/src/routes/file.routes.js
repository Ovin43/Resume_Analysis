import express from "express";
import { upload } from "../controller/file.controller.js";
import uplos from "../storages/file.storage.js";

const router=express.Router();

router.post("/upload",uplos.single('file'),upload);

export default router;