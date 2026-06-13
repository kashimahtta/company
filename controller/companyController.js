import MODEL from "../utils/allModels.js";

// Add Company
export const addCompany = async (req, res) => {
  const { name, address, gstno } = req.body;

  if (!name || !address || !gstno)
    return res.status(400).send("❌ data required.");

  try {
    const c = await MODEL.COMPANY.create({
      name,
      address,
      gstno,
    });

    res.status(200).json({
      message: "company added successfully",
      c,
    });
  } catch (err) {
    res.status(500).send("❌ Error adding company");
  }
};

// Get all Companies
export const getCompany = async (req, res) => {
  try {
    const companies = await MODEL.COMPANY.findAll({
      include: { model: MODEL.EMPLOYEE },
    });
    res.status(200).json({
      message: "companies fetched successfully",
      companies,
    });
  } catch (err) {
    res.status(500).send("❌ Error fetching companies");
  }
};

// Get Company by ID
export const getCompanyById = async (req, res) => {
  try {
    const company = await MODEL.COMPANY.findOne({
      where: { id: req.query.id },
      include: { model: MODEL.EMPLOYEE },
    });

    res.status(200).json({
      message: "company fetched successfully",
      company,
    });
  } catch (err) {
    res.status(500).send("❌ Error fetching company");
  }
};

// Bulk Add Companies
export const addBulkCompany = async (req, res) => {
  try {
    const data = req.body;
    const companies = await MODEL.COMPANY.bulkCreate(data);

    res.status(200).json({
      message: "companies added successfully",
      companies,
    });
  } catch (err) {
    res.status(500).send("❌ Error adding companies");
  }
};

// Update Company
export const updateCompany = async (req, res) => {
  try {
    const id = req.query.id;
    const { name, address, gstno } = req.body;

    const company = await MODEL.COMPANY.findOne({ where: { id } });
    if (!company) return res.status(404).json({ message: "Company not found" });

    company.name = name ?? company.name;
    company.address = address ?? company.address;
    company.gstno = gstno ?? company.gstno;

    await company.save();

    res.status(200).json({
      message: "Company updated successfully",
      company,
    });
  } catch (err) {
    res.status(500).send("❌ Error updating company");
  }
};

// Delete Company
export const deleteCompany = async (req, res) => {
  try {
    const id = req.query.id;

    const company = await MODEL.COMPANY.findOne({ where: { id } });
    if (!company) return res.status(404).json({ message: "Company not found" });

    await company.destroy();

    res.status(200).json({ message: "Company deleted successfully" });
  } catch (err) {
    res.status(500).send("❌ Error deleting company");
  }
};
