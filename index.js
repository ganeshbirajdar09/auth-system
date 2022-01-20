const app = require("./app");
const { PORT } = process.env;

app.listen(PORT, (req, res) =>
  console.log(`Server is Up and Running at port ${PORT}`)
);
