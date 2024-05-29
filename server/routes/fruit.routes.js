const router = require("express").Router();
const Fruit = require("./../models/Fruit.model");

router.get("/", (req, res, next) => {
  Fruit.find().then((fruits) => {
    res.json(fruits);
  });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  Fruit.findById(id).then((fruit) => {
    res.json(fruit);
  });
});

router.post("/", (req, res, next) => {
  const { name, category } = req.body;

  Fruit.create({ name, category }).then((newFruit) => {
    res.json(newFruit);
  });
});

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  const { name, category } = req.body;

  console.log("here we are", name, category, id);

  Fruit.findByIdAndUpdate(id, { name, category }, { new: true }).then(
    (updatedFruit) => {
      res.json(updatedFruit);
    }
  );
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  Fruit.findByIdAndDelete(id).then((deletedFruit) => {
    res.json(deletedFruit);
  });
});

module.exports = router;
