import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  iss: { type: String },
  azp: { type: String },
  aud: { type: String },
  sub: { type: String, require: true },
  email: { type: String },
  email_verified: { type: String },
  nbf: { type: Number },
  name: { type: String, require: true },
  picture: { type: String, require: true },
  given_name: { type: String },
  family_name: { type: String },
  locale: { type: String },
  iat: { type: Number },
  exp: { type: Number },
  jti: { type: String },
});

const User = mongoose.model("user", userSchema);

export default User;
