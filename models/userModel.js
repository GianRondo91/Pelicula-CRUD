const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const userSchema = {
    name: String,
    lastname: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: String,
    password: String
}

const toJSONConfig = {
    transform: (doc,ret,opt) => {
           delete ret['password']
           return ret
    }
}


userSchema.set('toJSON', toJSONConfig);

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;