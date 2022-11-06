import Joi from "joi";

const passSchema = Joi.string().min(3).max(10).alphanum();

export default function validatePassword(password) {
  console.log("validatePassword is working");
  return passSchema.validate(password);
}
