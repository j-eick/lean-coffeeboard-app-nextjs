import mongoose from "mongoose";

const { Schema } = mongoose;

const cardSchema = new Schema({
  topic: { type: String, required: true },
  author: { type: String, required: true },
});

const Card = mongoose.models.Card || mongoose.models("Card", cardSchema);

export default Card;
