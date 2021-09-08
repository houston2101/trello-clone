const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const serverPort = config.get("port") || 8000;

const app = express();

app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/board", require("./routes/board.routes"));
app.use("/api/card", require("./routes/card.routes"));

const start = async () => {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(serverPort, () => console.log(`App started on port ${serverPort}`));
  } catch (e) {
    console.log("Server error", e.message);
    process.exit(1);
  }
};

start();
