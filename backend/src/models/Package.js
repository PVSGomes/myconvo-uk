const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Package = mongoose.model("Package", PackageSchema);
module.exports = Package;
