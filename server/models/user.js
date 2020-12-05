import mongoose from 'mongoose';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, 'Navnet må være på minst tre bokstaver.'],
      maxlength: [120, 'Navnet kan ikke på være mer enn 120 bokstaver.'],
    },
    email: {
      type: String,
      required: [true, 'Fyll inn epost'],
      unique: true,
      match: [
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, // Hentet fra koden til Marius
        'Eposten du oppga er ikke gyldig.',
      ],
    },
    password: {
      type: String,
      required: [true, 'Fyll inn passord'],
      minlength: [6, 'Passordet må minmum bestå av seks verdier.'],
      select: false,
    },
    role: {
      type: String,
      enum: {
        values: ['user', 'admin', 'superadmin'],
        message: 'Fyll inn rolle',
      },
      default: 'user',
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UserSchema.pre('save', async function (next) {
  this.password = await argon2.hash(this.password);
  next();
});

UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

UserSchema.methods.comparePassword = async function (password) {
  const result = argon2.verify(this.password, password);
  return result;
};

UserSchema.virtual('articles', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'admin',
  justOne: false,
});

const User = mongoose.model('User', UserSchema);

export default User;
