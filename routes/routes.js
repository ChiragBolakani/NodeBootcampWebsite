const express = require("express");
const router = express.Router();
const connection = require("../db/connection");
const mailer = require("../services/mailer");

router.get("/testpage", (req, res) => {
  res.render("test.ejs");
});

router.post("/test", async (req, res) => {
  try {
    const { email } = req.body;
    const db = await connection();

    const newsletterSubscriber = await db
      .collection("tests")
      .findOne({ email: req.body.email });

    if (newsletterSubscriber) {
      return res
        .json({
          message: "You have already subscribed to our newsletter",
        })
        .status(200);
    } else {
      const result = await db.collection("tests").insertOne(req.body);
      console.log(result);
      res
        .json({
          message: "You are now subscribed",
        })
        .status(200);

      mailer.sendEmail(req.body.email);
      return;
    }
  } catch (error) {
    console.error(error);
    res
      .json({
        message: "please try later",
      })
      .status(503);
  }
});

router.get('/google', (req,res)=>{
  res.send('you are now logged in')
});

module.exports = router;
