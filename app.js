const express = require("express");
const morgan = require("morgan");
const { db, user, page } = require('./models');
const PORT = 1337;
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');

const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use('/wiki', wikiRouter);


app.get("/", (req, res) => {
  res.redirect(`/wiki/`)
})

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

async function sync (){
  await db.sync({force: true});
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

sync();





