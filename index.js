// Write your solution in this file!

const employee = {
  Melvin: "Baragoi",
};

beforeEach(function () {
  for (const key in employee) {
    delete employee[key];
  }

  employee.name = 'Sam';
});

function updateEmployeeWithKeyAndValue(obj, key, value) {
  const employee = { ...obj };

  employee[key] = value;

  return employee;
}

const obj = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
  
}
deleteFromEmployeeByKey(employee, 'name');

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key];
  return employee;
  
}
destructivelyDeleteFromEmployeeByKey(employee, "name")