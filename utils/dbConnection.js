import { Sequelize } from "sequelize";

const sequelize = new Sequelize("company", "root", "kashi_mahtta123*", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default sequelize;
