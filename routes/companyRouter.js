import express from "express";
import {
  addCompany,
  getCompany,
  getCompanyById,
  addBulkCompany,
  updateCompany,
  deleteCompany,
} from "../controller/companyController.js";

const router = express.Router();

router.post("/addcompany", addCompany);
router.get("/company", getCompany);
router.get("/companybyid", getCompanyById);
router.post("/addbulkcompany", addBulkCompany);
router.put("/updatecompany", updateCompany);
router.delete("/deletecompany", deleteCompany);

export default router;
