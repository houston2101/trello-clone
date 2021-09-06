const { Router } = require("express");
const config = require("config");
const Board = require("../models/board");

const router = Router();

router.post("/add", async (req, res) => {
  const data = req.body;
  const newBoard = new Board(data);
  await newBoard.save();
  return res.json({ message: "board added" });
});

router.post("/remove", async (req, res) => {
  const data = req.body;
  Board.findByIdAndDelete(data.id);
  return res.json({ message: "board removed" });
});

router.post("/get", async (req, res) => {
  const data = req.body;
  const boards = Board.find({ userId: data.userId });
  return res.json({ boards, message: "board got" });
});

router.post("/change", async (req, res) => {
  const data = req.body;
  Board.findByIdAndUpdate(data.id, data);
  return res.json({ message: "board changed" });
});

module.exports = router;
