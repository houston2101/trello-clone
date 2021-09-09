const { Router } = require("express");
const config = require("config");
const Board = require("../models/board");

const router = Router();

router.post("/add", async (req, res) => {
  try {
    const { id, cardInfo } = req.body;
    const board = await Board.findById(id);
    const card = {
      ...cardInfo,
      id: board.columns[0].cards.length + 1,
      column: "to-do",
    };
    board.columns[0].cards.push(card);
    await Board.findByIdAndUpdate(id, board);
    return res.json({ message: "card added" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post("/delete", async (req, res) => {
  try {
    const { boardId, cardId, column } = req.body;
    const board = await Board.findById(boardId);
    board.columns.map((el) => {
      if (el.id === column) {
        el.cards.map((card, idx) => {
          if (card.id === cardId) {
            el.cards.splice(idx, 1);
            el.cards.map((el, idx) => {
              el.id = idx + 1;
            });
          }
        });
      }
    });
    await Board.findByIdAndUpdate(boardId, board);
    return res.json({ message: "card removed" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post("/change", async (req, res) => {
  try {
    const { boardId, cardId, column, cardData } = req.body;
    const board = await Board.findById(boardId);
    board.columns.map((el) => {
      if (el.id === column) {
        el.cards.map((card, idx) => {
          if (card.id === cardId) {
            card.title = cardData.title;
            card.description = cardData.description;
          }
        });
      }
    });
    await Board.findByIdAndUpdate(boardId, board);
    return res.json({ message: "card changed" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post("/move", async (req, res) => {
  try {
    const { boardId, cardId, column, moveTo } = req.body;
    const board = await Board.findById(boardId);
    board.columns.map((el) => {
      if (el.id === column) {
        el.cards.map((card, idx) => {
          if (card.id === cardId) {
            card.column = moveTo;
          }
        });
      }
    });
    await Board.findByIdAndUpdate(boardId, board);
    return res.json({ message: "card moved" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
