import Message from "../model/messageModel.js";
import Conversation from "../model/conversationModel.js";

export const newMessage = async (request, response) => {
  try {
    const newMessage = new Message(request.body);

    await newMessage.save();
    await Conversation.findByIdAndUpdate(request.body.conversationId, {
      message: request.body.text,
    });

    return response.status(200).json("Message has been sent successfully");
  } catch (error) {
    return response.status(500).json(error.Message);
  }
};

export const getMessage = async (request, response) => {
  try {
    const message = await Message.find({ conversationId: request.params.id });
    return response.status(200).json(message);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
