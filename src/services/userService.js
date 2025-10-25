import User from "../models/User.js";

export async function register(email, password) {
    // BONUS: check if use exists
    const user = await User.findOne({email});
    if(user) {
        throw new Error('Email already exists!');
    }

    return User.create({email, password});
}

// create index.js file in src/services