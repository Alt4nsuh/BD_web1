const mongoose = require("mongoose");

// Define the user schema
const TetgelegSchema = new mongoose.Schema({
  bai_id: {
    type: Number,
    required: true,
  },
  tetgeleg_ner: {
    type: String,
  },
  tetgeleg_hugatsaa: {
    type: String,
  },
  tetgeleg_tuhai: {
    type: String,
  },
  tetgeleg_zurag: {
    type: String,
  },
  hamrah_huree: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
  tawigdah_shaardlaga: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
  burduuleh_material: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
  holboo_barih: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
});

// Create the user model
const Tetgeleg = mongoose.model("Tetgeleg", TetgelegSchema);

// Export the User model
module.exports = Tetgeleg;
