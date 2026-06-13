import sequelize from "../utils/dbConnection.js";
import { DataTypes } from "sequelize";

const companyModel = sequelize.define(
  "company",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gstno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
);

export default companyModel;
