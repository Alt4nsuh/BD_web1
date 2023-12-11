const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Tetgeleg = require("./model/Tetgeleg");

const app = express();
app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.use(express.urlencoded({ extended: true, limit: "20mb" }));

mongoose
  .connect("mongodb://localhost:27017/webdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));

app.post("/tetgelegInsert", async (req, res) => {
  const {
    bai_id,
    tetgeleg_ner,
    tetgeleg_hugatsaa,
    tetgeleg_tuhai,
    tetgeleg_zurag,
    hamrah_huree,
    tawigdah_shaardlaga,
    burduuleh_material,
    holboo_barih,
  } = req.body;

  const data = {
    bai_id,
    tetgeleg_ner,
    tetgeleg_hugatsaa,
    tetgeleg_tuhai,
    tetgeleg_zurag,
    hamrah_huree,
    tawigdah_shaardlaga,
    burduuleh_material,
    holboo_barih,
  };

  const tet = Tetgeleg.create(data);

  if (tet) {
    res.status(200).json("Succesfully");
  } else {
    res.status(400).json("Failed");
  }
});

app.get("/tetgelegShow/:id", async (req, res) => {
  const id = req.params.bai_id
  try {
    const tetgeleg = await Tetgeleg.find(id);

    if (!tetgeleg) {
      return res.status(404).json({ error: "tetgeleg not found" });
    }

    return res.json(tetgeleg);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get("/tetgelegShow", async (req, res) => {
  try {
    const tetgeleg = await Tetgeleg.find();

    if (!tetgeleg) {
      return res.status(404).json({ error: "tetgeleg not found" });
    }

    return res.json(tetgeleg);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});




app.get("/TetgelegDelgerengui/:id", async (req, res) => {
  const id = req.params.id
  try {
    const tetgeleg = await Tetgeleg.findById(id);

    if (!tetgeleg) {
      return res.status(404).json({ error: "tetgeleg not found" });
    }

    return res.json(tetgeleg);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
app.listen(3001, () => {
  console.log("Server is Running");
});
