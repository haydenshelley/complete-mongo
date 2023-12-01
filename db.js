const { MongoClient } = require("mongodb");

let dbConnection;
let uri =
  "mongodb+srv://haydenmshelley:test1234@cluster0.fvyll82.mongodb.net/?retryWrites=true&w=majority";

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
