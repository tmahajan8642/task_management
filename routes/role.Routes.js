const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const { roleController } = require("../controllers");
const { createRoleRules } = require("../validators/roleValidator");

router.post(
  "/",
  createRoleRules,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: errors.array()[0].msg,
      });
    }
    next();
  },
  roleController.createRole
);

module.exports = router;
