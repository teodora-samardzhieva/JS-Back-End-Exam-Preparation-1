import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
import User from "../models/User.js";
import { generateAuthToken } from '../utils/tokenUtils.js';
// import { JWT_SECRET } from '../config/constants.js';

export async function register(email, password) {
    // BONUS: check if use exists
    const user = await User.findOne({email});
    if(user) {
        throw new Error('Email already exists!');
    }

    // return User.create({email, password});
    // auto login on register
    const createdUser = await User.create({email, password});
    const token = generateAuthToken(createdUser);
    return token;
}

// create index.js file in src/services

export async function login(email, password) {
    // validate if user exists
    const user = await User.findOne({email});

    if(!user) {
        throw new Error('Invalid email or password!');
    }

    // validate password
    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid) {
        throw new Error('Invalid email or password!');
    }

    // generate token - moved to tokenUtils.js
    // const payload = {
    //     id: user.id,
    //     email: user.email,
    // };

    // const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '2h'});

    const token = generateAuthToken(user);

    return token;
}