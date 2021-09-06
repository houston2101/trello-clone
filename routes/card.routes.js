const { Router } = require("express");
const config = require("config");
const Card = require("../models/card");

const router = Router();

router.post("/add", async (req, res) => {
  const data = req.body;
  const newCard = new Card(data);
  await newCard.save();
  return res.json({ message: "card added" });
});

router.post("/remove", async (req, res) => {
  const data = req.body;
  Card.findByIdAndDelete(data.id);
  return res.json({ message: "card removed" });
});

router.post("/change", async (req, res) => {
  const data = req.body;
  Card.findByIdAndUpdate(data.id, data);
  return res.json({ message: "card changed" });
});

router.post("/get", async (req, res) => {
  const data = req.body;
  const cards = Card.find({ boardId: data.boardId });
  return res.json({ cards, message: "card got" });
});

module.exports = router;
