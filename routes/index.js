const express = require('express');
const models = require('../app/models');
const router = express.Router();

const jwt = require('jsonwebtoken');
const secretObj = require("../database/config").development.jwtObj;
console.log(secretObj);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', async function (req, res, next) {
  let token = jwt.sign({
      email: "foo@example.com"
    },
    secretObj.secret,
    {
      expiresIn: '5m'
    });
  
  await models.user.findOne({
    where: {
      email: "foo@example.com"
    }
  })
  .then( user => {
    console.log('user:');
    console.log(user);
    if (user.password === "foo") {
      res.cookie("user", token);
      res.json({
        token
      })
    } else {
      res.json({
        message: 'login failed'
      })
    }
  })
});

router.get("/api", function (req, res, next) {
  const token = req.cookies.user;
  try {
    const decoded = jwt.verify(token, secretObj.secret);
  
    res.send('authorized user');
  } catch (e) {
    console.log(e);
    res.send('not allowed');
  }
});

module.exports = router;
