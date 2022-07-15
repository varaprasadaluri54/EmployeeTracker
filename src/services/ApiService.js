import axios from "axios";
// const BASE_URL = "https://lsi-employeetracker.herokuapp.com"; // heruko.
// const BASE_URL = "http://18.206.244.251:8181/employee-0.0.1-SNAPSHOT"; // devops
const BASE_URL = "http://10.81.4.195:2022"; // umer pc
// const BASE_URL = "http://10.81.3.30:9090"; // charan pc
//Header

//get
const ALL_EMPLOYEES = `${BASE_URL}/api/v1/emp/get-all-employee`;
const ALL_EMPLOYEES_BY_ID = `${BASE_URL}/api/v1/emp/getting/id?id=`;
//post
const LOGIN_API_URL = `${BASE_URL}/api/v1/auth/login`;
const REGISTER_API_URL = `${BASE_URL}/api/register`;
const INSERT_EMP_DETAILS_API_URL = `${BASE_URL}/api/v1/emp/insert-emp-details`;
const TEST = `http://10.81.4.195:2022/api/v1/admin/create-roles`;
const BILL_EXPENSE = `${BASE_URL}/api/v1/exp/insert-expenses`;
//delete

export function auth() {
  const token = sessionStorage.getItem("Access_Token");
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${token}`,
    },
  };
  return config;
}

export default new (class ApiService {
  login(data) {
    return axios.post(LOGIN_API_URL, data);
  }

  register(data) {
    return axios.post(REGISTER_API_URL, data);
  }
  insertEmployee(data) {
    return axios.post(INSERT_EMP_DETAILS_API_URL, data, auth());
  }
  getAllEmployees() {
    return axios.get(ALL_EMPLOYEES, auth());
  }
  getEmployeeById(id) {
    return axios.get(ALL_EMPLOYEES_BY_ID + id, auth());
  }
  getTest(data) {
    return axios.post(TEST, data);
  }
  getBillExpense(data, id, typeId) {
    return axios.post(
      `${BILL_EXPENSE}?empId=${id}&expTypeId=${typeId}`,
      data,
      auth()
    );
  }
})();
