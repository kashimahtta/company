import MODEL from "../utils/allModels.js";

// Add Employee
export const addEmployee = async (req, res) => {
  const { name, email, phonenumber, companyId } = req.body;

  if (!name || !email || !phonenumber || !companyId)
    return res.status(400).send("❌ data required.");

  try {
    const e = await MODEL.EMPLOYEE.create({
      name,
      email,
      phonenumber,
      companyId,
    });

    res.status(200).json({
      message: "employee added successfully",
      e,
    });
  } catch (err) {
    res.status(500).send("❌ Error adding employee");
  }
};

// Get all Employees
//{include: { model: MODEL.EMPLOYEE }}
export const getEmployee = async (req, res) => {
  try {
    const employees = await MODEL.EMPLOYEE.findAll({
      include: MODEL.COMPANY,
    });
    res.status(200).json({
      message: "employees fetched successfully",
      employees,
    });
  } catch (err) {
    res.status(500).send("❌ Error fetching employees");
  }
};

// Get Employee by ID
export const getEmployeeById = async (req, res) => {
  try {
    const employee = await MODEL.EMPLOYEE.findOne({
      where: { id: req.query.id },
      include: MODEL.COMPANY,
    });

    res.status(200).json({
      message: "employee fetched successfully",
      employee,
    });
  } catch (err) {
    res.status(500).send("❌ Error fetching employee");
  }
};

// Bulk Add Employees
export const addBulkEmployee = async (req, res) => {
  try {
    const data = req.body;
    const employees = await MODEL.EMPLOYEE.bulkCreate(data);

    res.status(200).json({
      message: "employees added successfully",
      employees,
    });
  } catch (err) {
    res.status(500).send("❌ Error adding employees");
  }
};

// Update Employee
export const updateEmployee = async (req, res) => {
  try {
    const id = req.query.id;
    const { name, email, phonenumber, companyId } = req.body;

    const employee = await MODEL.EMPLOYEE.findOne({ where: { id } });
    if (!employee)
      return res.status(404).json({ message: "Employee not found" });

    employee.name = name ?? employee.name;
    employee.email = email ?? employee.email;
    employee.phonenumber = phonenumber ?? employee.phonenumber;
    employee.companyId = companyId ?? employee.companyId;

    await employee.save();

    res.status(200).json({
      message: "Employee updated successfully",
      employee,
    });
  } catch (err) {
    res.status(500).send("❌ Error updating employee");
  }
};

// Delete Employee
export const deleteEmployee = async (req, res) => {
  try {
    const id = req.query.id;

    const employee = await MODEL.EMPLOYEE.findOne({ where: { id } });
    if (!employee)
      return res.status(404).json({ message: "Employee not found" });

    await employee.destroy();

    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).send("❌ Error deleting employee");
  }
};
