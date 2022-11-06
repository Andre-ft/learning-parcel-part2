import qwe from "./js/validate-pass.js";
import apiService from "./js/api-service.js";
import {
  anotherFetchAllUsers,
  anotherFetchUserById,
  addUser,
  x as xValue,
  y,
} from "./js/another-service.js";
import Joi from "joi";
// import * as anotherApiService from './js/another-service';

// console.log("joi", Joi);

console.log("some text!!!");

console.log("qwe = " + qwe);
// console.log("qwe * 2 = " + qwe * 2);
console.log(qwe("564"));
qwe(123);

// console.log(apiService.fetchAllUsers);
apiService.fetchAllUsers();

anotherFetchAllUsers();
console.log("x = ", xValue);
console.log("y = ", y);

const newUser = addUser("Lusya");
console.log(newUser);
