const Package = require("../models/Package");

const getAllPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPackageById = async (req, res) => {
  try {
    const pack = await Package.findById(req.params.id);
    if (!pack) {
      return res.status(404).json({ error: "Package not found" });
    }
    res.status(200).json(pack);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPackage = async (req, res) => {
  try {
    const pack = await Package.create(req.body);
    res.status(201).json(pack);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatePackage = async (req, res) => {
  try {
    const pack = await Package.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!pack) {
      return res.status(404).json({ error: "Package not found" });
    }
    res.status(200).json(pack);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePackage = async (req, res) => {
  try {
    const pack = await Package.findByIdAndRemove(req.params.id);
    if (!pack) {
      return res.status(404).json({ error: "Package not found" });
    }
    res.status(200).json({ message: "Package deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllPackages,
  getPackageById,
  createPackage,
  updatePackage,
  deletePackage,
};
