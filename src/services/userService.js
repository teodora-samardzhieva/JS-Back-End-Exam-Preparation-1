import User from "../models/User.js";

export function register(email, password) {
    return User.create({email, password});
}

// create index.js file in src/services