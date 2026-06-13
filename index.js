
import express from "express";
import companyRoutes from "./routes/companyRouter.js";
import employeeRoutes from "./routes/employeesRouter.js";
import sequelize from "./utils/dbConnection.js";
import modelrelations from "./utils/allRelations.js";

const app = express();
app.use(express.json());

modelrelations();

sequelize
  .authenticate()
  .then(() => console.log("✅ DB Connected"))
  .catch(() => console.log("❌ DB Connection Failed"));
sequelize.sync();

app.use("/company", companyRoutes);
app.use("/employee", employeeRoutes);

app.listen(1000, () => {
  console.log("✅ Server running on port 1000");
});
