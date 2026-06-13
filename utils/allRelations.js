import MODEL from "./allModels.js";
const modelrelations = () => {
 
MODEL.COMPANY.hasMany(MODEL.EMPLOYEE);
MODEL.EMPLOYEE.belongsTo(MODEL.COMPANY);

};
export default modelrelations;