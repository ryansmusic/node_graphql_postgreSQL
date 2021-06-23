import {
  encryptPassword,
  authenticate,
  generateToken,
  generateOTP,
  sendMessage,
} from '../../utils';
const AWS = require('aws-sdk');
const { Op } = require('sequelize');
const {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  AWS_BUCKET_NAME,
} = process.env;
const s3 = new AWS.S3({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: AWS_REGION,
});
const { v4: uuidv4 } = require('uuid');
const userResolvers = {
  Query: {
    users: async (root, args, { models: { User } }) => {
      let whrCondition = { isActive: true };

      const page = args.pageNo ? Number(args.pageNo) : 1;
      const limit = args.pageSize ? Number(args.pageSize) : 10;

      if (args.search) {
        let searchwhrCondition = {
          [Op.or]: [
            {
              firstName: {
                [Op.like]: '%' + args.search + '%',
              },
            },
            {
              lastName: {
                [Op.like]: '%' + args.search + '%',
              },
            },
            {
              email: {
                [Op.like]: '%' + args.search + '%',
              },
            },
          ],
        };
        whrCondition = { ...searchwhrCondition, ...whrCondition };
      }
      const users = await User.findAndCountAll({
        where: whrCondition,
        order: [
          ['createdAt', 'DESC'],
          ['firstName', 'ASC'],
        ],
        offset: (page - 1) * limit,
        limit,
      });
      let reqposse = { users: [], count: 0 };
      if (users) reqposse = { users: users.rows, count: users.count };

      return reqposse;
    },

    user: async (root, { UserDetails }, { models: { User } }) => {
      return User.findByPk(UserDetails.id);
    },
  },
  Mutation: {
    register: async (root, { UserDetails }, { models: { User } }) => {
      const userDetail = await User.findOne({
        where: { email: UserDetails.email.toLowerCase() },
      });
      if (userDetail) {
        throw new Error('User already exist with same email');
      }
      try {
        const otp = generateOTP();
      //const inf=  sendMessage(23323, otp, 'Your otp is =',(err,info)=>{return info });
        const user = await User.create({
          firstName: UserDetails.firstName,
          lastName: UserDetails.lastName,
          dob: UserDetails.dob,
          email: UserDetails.email.toLowerCase(),
          password: encryptPassword(UserDetails.password),
          userName: UserDetails.userName,
          gender: UserDetails.gender,
          otp: otp,
          otpExpireTime: Date.now(),
        });
        return {
          token: generateToken(user),
          user: user,
        };
      } catch (error) {
        throw new Error(error.errors[0].message);
      }
    },

    login: async (root, { UserDetails }, { models: { User } }) => {
      const reqEmail = UserDetails.email.toLowerCase();
      const user = await User.findOne({ where: { email: reqEmail } });
      if (!user) {
        throw new Error('Invalid email or password');
      }
      const correctPassword = authenticate(UserDetails.password, user.password);

      if (!correctPassword) {
        throw new Error('Invalid email or password');
      }
      return {
        token: generateToken(user),
        user: user,
      };
    },

    updateUser: async (root, { UserDetails }, { models: { User } }) => {
      return User.update(
        {
          firstName: UserDetails.firstName,
          lastName: UserDetails.lastName,
        },
        {
          returning: true,
          where: {
            id: UserDetails.id,
          },
        },
      ).then(([rowsUpdate, [updated]]) =>
        rowsUpdate ? updated.dataValues : {},
      );
    },

    deleteUser: async (root, { UserDetails }, req) => {
      if (!req.authScope) {
        throw new Error('Unauthenticated');
      }
      await req.models.User.update(
        {
          isActive: true,
        },
        {
          returning: true,
          where: {
            id: UserDetails.id,
          },
        },
      ).then(([rowsUpdate, [updated]]) =>
        rowsUpdate ? updated.dataValues : {},
      );
    },
  },
};

export default userResolvers;
