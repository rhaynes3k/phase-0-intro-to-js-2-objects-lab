// Write your solution in this file!
const employee = {
  name: "Dumas",
  streetAddress: "2300 Jackson St"
}

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
  return { ...employee, ...{ [name]: streetAddress } }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value
  return employee
}

function deleteFromEmployeeByKey(employee, key) {
  const newObj = {...employee}
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key]
  return employee
}
