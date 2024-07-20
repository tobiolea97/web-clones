import { body, validationResult } from "express-validator";

const validatePassword = body("password")
  .isLength({ min: 6 })
  .trim()
  .withMessage("Password must be at least 6 characters long");

const validatePasswordConfirmation = body("passwordConfirmation")
  .custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation does not match password");
    }
    return true;
  })
  .trim();

const validateEmail = body("email")
  .isEmail()
  .normalizeEmail()
  .withMessage("Invalid email address");

const authValidation = {
  validatePassword,
  validatePasswordConfirmation,
  validateEmail,
  validationResult,
};

export default authValidation;
