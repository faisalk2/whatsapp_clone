import conversation from "../model/conversationModel.js";

export const newConversation = async (request, response) => {
  try {
    const { senderId, receiverId } = request.body;

    let exist = await conversation.findOne({
      members: { $all: { receiverId, senderId } },
    });

    if (exist) {
      response.status(200).json("user already exist");
    }

    const newConversation = new conversation({
      members: [senderId, receiverId],
    });
    await newConversation.save();

    response.status(200).json("conversation save and successful");
  } catch (error) {
    response.status(500).json(error.message);
  }
};

export const getConversation = async (request, response) => {
  try {
    const { senderId, receiverId } = request.body;

    let newConversation = await conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });

    return response.status(200).json(newConversation);
  } catch (error) {
    response.status(500).json(error.message);
  }
};
