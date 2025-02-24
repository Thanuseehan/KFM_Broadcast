import e from "express";
import { verify } from "jsonwebtoken";
import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true , unique: true},
    password: { type: String, required: true },
    verifyOtp: {type: String, default: ""},
    verifyOtpExpires: { type: Number, default: 0},
    isAdmin: { type: Boolean, required: true, default: false },
    isAccountVerified: { type: Boolean, required: true, default: false },
    resetotp: { type: String, default: "" },
    resetotpExpires: { type: Number, default: 0 },
});

const userModel = mongoose.models.user || mongoose.model("User", userSchema);

export default userModel;
