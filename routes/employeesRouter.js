import express from "express";
import {
  addEmployee,
  getEmployee,
  getEmployeeById,
  addBulkEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controller/employeesController.js";

const router = express.Router();

router.post("/addemployee", addEmployee);
router.get("/employee", getEmployee);
router.get("/employeebyid", getEmployeeById);
router.post("/addbulkemployee", addBulkEmployee);
router.put("/updateemployee", updateEmployee);
router.delete("/deleteemployee", deleteEmployee);

export default router;
