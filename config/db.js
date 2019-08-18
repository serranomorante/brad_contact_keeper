const mongoose = require("mongoose");
const config = require("config");
// config.get toma cualquier que sea el valor del atributo entre comillas, que esté dentro
// de un archivo default.json
const db = config.get("mongoURI");

// moongose devuelve promesas
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      // estas configuraciones son solo por advertencias de parte de mongodb si no se las utiliza
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("Mongodb connected");
  } catch (error) {
    console.error(err.message);
    // exit with failiures
    process.exit(1);
  }
};

module.exports = connectDB;
