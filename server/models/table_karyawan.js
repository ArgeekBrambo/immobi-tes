'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table_karyawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      table_karyawan.belongsTo(models.table_jabatan, {
        foreignKey: 'id_jabatan'
      })
    }
  }
  table_karyawan.init({
    name: DataTypes.STRING,
    id_jabatan: {
      type: DataTypes.INTEGER,
      references: {
        model: 'table_jabatans',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    tanggal_lahir: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'table_karyawan',
  });
  return table_karyawan;
};