import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Menu from "./MenuModel.js";

const { DataTypes } = Sequelize;

const Product = db.define(
  "product",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

Menu.hasMany(Product);

Product.belongsTo(Menu, {
  foreignKey: "menuId",
});

export default Product;
