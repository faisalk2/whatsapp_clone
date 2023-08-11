import express from "express";
import { addUser, getUser } from "./user_controller.js";
import { getConversation, newConversation } from "./conversation_controller.js";
import { getMessage, newMessage } from "./message_controller.js";
import { getImage, uploadFile } from "./file_controller.js";
import upload from "../utiles/upload.js";
const route = express.Router();

route.post("/add", addUser);
route.get("/user", getUser);

route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);

route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessage);

route.post("/file/upload", upload.single("file"), uploadFile);
route.get("/file/:filename",getImage);
export default route;
