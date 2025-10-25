import bcrypt from 'bcrypt';
import { Schema, model } from "mongoose";

const userScheme = new Schema({
    email: {
        type: String,
        required: [true, 'User email is required!'],
    },
    password: {
        type: String,
        required: [true, 'User password is required!'],
    } 
});

// Check repeatPassword in model
userScheme.virtual('repeatPassword')
    .get(function() {
        return this._repeatPassword;
    })
    .set(function(value) {
        this._repeatPassword = value;
    });

userScheme.pre('validate', function() {
    if(this.isNew && this.password !== this._repeatPassword) {
        throw new Error('Password missmatch!')
    }
})
// hash password
userScheme.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 12);
});

const User = model('User', userScheme);

export default User;