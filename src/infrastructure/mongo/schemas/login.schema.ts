import mongoose from 'mongoose';
const { Schema } = mongoose;

const loginSchema = new Schema({
    userId: Number,
    username: String
});

const Login = mongoose.model('Login', loginSchema)