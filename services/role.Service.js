// const httpStatus = require("http-status");
const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const { Role } = require("../models");
const ApiError = require("../utils/ApiError");

const roleTaken = async (roleName) => {
  const role = await Role.findOne({ where: { role_name: roleName } });
  return !!role;
};

const createRole = async (roleBody) => {
  if (!roleBody.role_name) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Role name is required");
  }

  if (await roleTaken(roleBody.role_name)) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Role already taken");
  }

  const newRole = await Role.create(roleBody);
  return newRole;
};

module.exports = {
  createRole,
};
