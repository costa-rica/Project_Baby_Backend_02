var express = require("express");
var router = express.Router();
const os = require("os");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/ca-marche", (req, res) => {
  // console.log("- dans GET /ca-marche");
  res.json({ result: "oui 🚀" });
});

/* GET home page. */
router.get("/areWeRunning", function (req, res, next) {
  console.log("we're up!");
  // Get the machine name
  const machineName = os.hostname();

  // Print to the console
  console.log(`Machine name: ${machineName}`);

  console.log("dotenv check: ", process.env.TEST);

  res.json({
    result: true,
    running_on: machineName,
    dotenvCheck: process.env.TEST,
    current_time: new Date(),
    app_name: process.env.APP_NAME,
  });
});

module.exports = router;
