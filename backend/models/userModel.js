import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    friendsList: {
      type: Array,
      required: true,
    },
    pendingFriendsList: {
      type: Array,
      required: true,
    },
    checkedIn: {
      type: Boolean,
      required: true,
    },
    profilePicture: {
      //receive picture from spotify profile api
      type: String,
      required: false,
    },
    song: {
      //receive song information from spotify api
      title: {
        type: String,
        required: true,
      },
      artist: {
        type: String,
        required: true,
      },
      songImage: {
        type: String,
        required: true,
      },
      songLink: {
        type: String,
        required: true,
      },
      pmos: {
        type: Number,
        required: true,
      },
      required: false,
    },
  },
  { timestamps: true }
);

export default model("User", userSchema);
