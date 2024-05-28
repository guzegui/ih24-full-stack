const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the Fruit model to whatever makes sense in this case
const fruitSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true
    },
    category: {
      type: String,
      enum: ["citrus", "berries", "drupes", "pomes", "tropical", "melons", "exotic"]
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Fruit = model("Fruit", fruitSchema);

module.exports = Fruit;
