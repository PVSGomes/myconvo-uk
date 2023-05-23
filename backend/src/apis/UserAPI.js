const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  validateUser,
  createStudent,
  userGetByUserType
} = require("../controllers/UserController");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/create", createUser);
router.post("/createStudent", createStudent);
router.post("/validate", validateUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/userType/:userType", userGetByUserType);

module.exports = router;
