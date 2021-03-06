'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    costumerId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    invoice: DataTypes.STRING
  }, {});
  order.associate = function(models) {
    // associations can be defined here
    order.belongsTo(models.costumer, {
      foreignKey: 'costumerId',
      as: 'costumerOrder',
      sourceKey: 'id'
    });
    order.belongsTo(models.user, {
      foreignKey: 'userId',
      as: 'userOrder',
      sourceKey: 'id'
    });
    order.hasMany(models.order_detail, {
      foreignKey: 'id',
      as: 'OrderDetail',
      sourceKey: 'id'
    });
  };
  return order;
};