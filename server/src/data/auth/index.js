import SQ from 'sequelize';
import { sequelize } from '../../db/database.js';

const DataTypes = SQ.DataTypes;

export const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  userName: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(128),
  },
});

export const findByUserName = async (userName) => {
  return User.findOne({ where: { userName } });
};

export const createUser = async (user) => {
  return User.create(user).then((data) => data.dataValues.id);
};
