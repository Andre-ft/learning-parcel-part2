import shortid from "shortid";

export const addUser = (name) => {
  const user = {
    id: shortid.generate(),
    name,
  };
  return user;
};

export const anotherFetchAllUsers = () => {
  console.log("anotherFetchAllUsers in work");
};

export const anotherFetchUserById = () => {
  console.log("anotherFetchUserById in work");
};

export const anotherUpdateUserById = () => {
  console.log("anotherUpdateUserById in work");
};

export const x = 5;

export const y = "kiwi 9898";
