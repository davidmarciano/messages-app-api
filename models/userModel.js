import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userModel = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: {
          validator: function(value) {
            const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
            return regex.test(value);
          },
          message: '{VALUE} is not a valid email'
        }
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
    },    
    gravatar: {
        type: String,
        required: [true, 'Gravatar is required'],
        validate: {
            validator: function(value) {
                const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
                return regex.test(value);
            },
            message: '{VALUE} is not a valid gravatar url'
        }
    }
});

export default mongoose.model('User', userModel);