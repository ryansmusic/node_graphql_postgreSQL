import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
  jwtSecret,
  jwtExpireIn,
  accountSid,
  authToken,
  number,
} from '../config';
import { User } from '../models';
import twilio from 'twilio';

export const authenticate = (plainTextPass, password) => {
  if (!plainTextPass) return false;
  return bcrypt.compareSync(plainTextPass, password);
};

export const encryptPassword = (password) => bcrypt.hashSync(password, 8);

export const generateToken = (user) =>
  `${jwt.sign({ id: user.id, email: user.email }, jwtSecret, {
    expiresIn: jwtExpireIn,
  })}`;

export const generateOTP = () => {
  return Math.floor(Math.random() * 8888 + 1000);
};

export const sendMessage = (mobile, otp, subject, callback) => {
  var sms = new twilio(accountSid, authToken);
  const smsOption = {
    body: subject + ' ' + otp,
    from: number,
    to: '+919548245355',
  };

  sms.messages.create(smsOption, (err, info) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, info);
    }
  });
};
export const getUser = async (token) => {
  if (!token) {
    return {
      user: null,
    };
  }

  try {
    const decodedToken = jwt.verify(token.substring(4), jwtSecret);
    const user = await User.findOne({ where: { id: decodedToken.id } });
    return {
      user,
    };
  } catch (err) {
    return {
      user: null,
    };
  }
};
