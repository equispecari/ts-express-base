import app from "./app";
import { MongoDatabase } from "./database/MongoDatabase";

const port = process.env.PORT || 3000;

async function init() {
  const config = {
    uri: "mongodb://localhost/my_database",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
  };
  // const db = new MongoDatabase(config);
  // await db.connect();

  app.listen(port, () => {
    console.log(`run on port ${port}`);
  });
}

init();
