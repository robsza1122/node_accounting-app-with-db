'use strict';

const { DataTypes } = require('sequelize');
const { sequelize } = require('../db.js');

const Expense = sequelize.define('Expense', {
  userId: {
    type: DataTypes.NUMBER,
    autoIncrement: true,
    primaryKey: true,
  },
  spentAt: {
    type: DataTypes.DATE,
    defaultValue: Date.now(),
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.NUMBER,
  },

  note: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING,
  },
});

module.exports = {
  Expense,
};
