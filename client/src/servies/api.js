import axios from "axios";
let url = "http://localhost:8080";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (e) {
    console.log("Error while addUser api", e.message);
  }
};

export const getUser = async () => {
  try {
    let response = await axios.get(`${url}/user`);
    return response.data;
  } catch (error) {
    console.log("Error while getUser :", error.message);
  }
};

export const setConversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversation/add`, data);
    console.log(response);
  } catch (error) {
    console.log("Error while calling setConversation api", error.message);
  }
};

export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversation/get`, data);
    return response.data;
  } catch (e) {
    console.log("Error while calling getConversation api :", e.message);
  }
};

export const newMessage = async (data) => {
  try {
    await axios.post(`${url}/message/add`, data);
  } catch (error) {
    console.log("error while calling new message", error.message);
  }
};

export const getMessages = async (id) => {
  try {
    let response = await axios.get(`${url}/message/get/${id}`);
    return response.data;
  } catch (error) {
    console.log("error while calling get message api", error.message);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${url}/file/upload`, data);
  } catch (e) {
    console.log("error while calling upload file api", e.message);
  }
};
