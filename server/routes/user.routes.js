const router = require("express").Router();
const User = require("./../models/User.model");

router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  User.findById(id).then((user) => {
    res.json(user);
  });
});

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  const { name, email } = req.body;

  User.findByIdAndUpdate(id, { name, email }, { new: true }).then(
    (updatedFruit) => {
      res.json(updatedFruit);
    }
  );
});

module.exports = router;
