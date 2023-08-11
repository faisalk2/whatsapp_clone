import mongoose from "mongoose";

const conversationSchema = mongoose.Schema(
  {
    members: { type: Array },
    message: { type: String },
  },
  {
    timestamps: true,
  }
);

const conversation = mongoose.model("conversation", conversationSchema);

export default conversation;
