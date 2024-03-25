import { UnAuthriseError, ValidationError } from "../../error_handling/error.class.js";

export const validationMidFactory = (schema) => {
  return (req, res, next) => {
    schema
      .validate(req.body)
      .then(() => {
        next();
      })
      .catch((err) => {
        next(new ValidationError(err.errors[0]));
      });
  };
};

export const AuthValidation = (req, res, next) => {
  if (!req.user) throw new UnAuthriseError("you need to sign in!");
  next();
};
