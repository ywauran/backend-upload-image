import express from "express";
import {
  getMenus,
  getMenuById,
  createMenu,
  updateMenu,
  deleteMenu,
} from "../controllers/Menu.js";

const router = express.Router();

router.get("/menus", getMenus);
router.get("/menu/:id", getMenuById);
router.post("/menu", createMenu);
router.patch("/menu/:id", updateMenu);
router.delete("/menu/:id", deleteMenu);

export default router;
