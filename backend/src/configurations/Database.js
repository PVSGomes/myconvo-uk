const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const URI ="mongodb+srv://admin:admin@cluster0.om8kxzy.mongodb.net/?retryWrites=true&w=majority";
      // "mongodb+srv://abcssd:admin@cluster0.lk4uxej.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("\x1b[35m%s\x1b[0m", "Database Connected");
  } catch (error) {
    console.error("Connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
