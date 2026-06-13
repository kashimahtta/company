import sequelize from "../utils/dbConnection.js";
import { DataTypes } from "sequelize";

const employeeModel = sequelize.define("employee", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phonenumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default employeeModel;
