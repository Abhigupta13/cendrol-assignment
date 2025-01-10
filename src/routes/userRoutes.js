const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
} = require("../controllers/userController");
const auth = require("../middleware/Auth");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.get("/", auth, getAllUsers);
router.get("/:id", auth, getUserById);
router.post("/", upload.single("profilePicture"), createUser);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);

module.exports = router;
