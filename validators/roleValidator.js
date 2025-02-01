const { body } = require("express-validator");

const createRoleRules = [
  body("role_name")
    .notEmpty()
    .withMessage("Role name is required")
    .isString()
    .withMessage("Role name must be a string"),
  body("status")
    .optional()
    .isIn(["active", "inactive"])
    .withMessage('Status must be either "active" or "inactive"'),
];

module.exports = { createRoleRules };
