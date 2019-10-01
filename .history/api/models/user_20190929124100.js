import { DataTypes } from 'sequelize/types';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    title: DataTypes.STRING,
  });
};
