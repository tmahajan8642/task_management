// const httpStatus = require("http-status");
const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { roleService } = require("../services");

module.exports.createRole = catchAsync(async (req, res) => {
  const { role_name, status } = req.body;

  if (!role_name) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Role name is required");
  }

  const role = await roleService.createRole({ role_name, status });

  res.status(StatusCodes.CREATED).send({
    success: true,
    message: "Role created successfully",
    statusCode: StatusCodes.CREATED,
    data: {
      name : role.role_name
    },
  });
});