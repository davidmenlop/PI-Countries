const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    level: {
      type: DataTypes.INTEGER,
    },
    time: {
      type: DataTypes.INTEGER,
    },
    season: {
      type: DataTypes.ENUM,
      values: ['Verano', 'Otoño', 'Invierno', 'Primavera'],
      allowNull: false,
    },
  });
};
