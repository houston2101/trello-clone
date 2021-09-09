const { Router } = require("express");
const config = require("config");
const Board = require("../models/board");

const router = Router();

router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newBoard = new Board(data);
    await newBoard.save();
    return res.json({ message: "board added" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post("/remove", async (req, res) => {
  try {
    const data = req.body;
    await Board.findByIdAndDelete(data.id);
    return res.json({ message: "board removed" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post("/get", async (req, res) => {
  try {
    const data = req.body;
    const boards = await Board.find({ userId: data.userId });
    return res.json({ boards, message: "board got" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post("/get-by-id", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const boards = await Board.findById(data.id);
    return res.json({ boards, message: "board got" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post("/change", async (req, res) => {
  try {
    const data = req.body;
    await Board.findByIdAndUpdate(data.id, data);
    return res.json({ message: "board changed" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
