
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    _id: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    status:DataTypes.STRING,
    role:DataTypes.STRING
  });
  return User;
};