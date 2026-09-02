const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: string,
        required: true,
        unique: true
    }
});

UserSchema.plugin(passportLocalMongoose.default);

module.exports = mongoose.model('User', UserSchema);