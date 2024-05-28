const router = require("express").Router();

router.delete("/actions/:userId", (req, res, next) => {

    res.send("successfully deleted user " + req.params.userId)
  
});

module.exports = router;
