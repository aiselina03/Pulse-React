import express from "express";
import cors from "cors";
import mongoose, { Schema } from "mongoose";
const app = express();
app.use(express.json());
app.use(cors());
const port = 5000;

const PulseSchema = new Schema({
  name: String,
  desc: String,
  price: Number,
});
const PulseModel = mongoose.model("PulseModel", PulseSchema);

app.get("/", async (req, res) => {
  try {
    const products = await PulseModel.find({});
    res.json(products);
  } catch (error) {
    res.send(error.message);
  }
});
app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await PulseModel.findById(id);
    res.json(products);
  } catch (error) {
    res.send(error.message);
  }
});

app.post("/", async (req, res) => {
  try {
    const { name, desc, price } = req.body;
    const newProducts = new PulseModel({ name, desc, price });
    await newProducts.save();
    res.json(newProducts);
  } catch (error) {
    res.send(error.message);
  }
});

app.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, desc, price } = req.body;
    const products = await PulseModel.findByIdAndUpdate(id, {
      name,
      desc,
      price,
    });
    res.json(products);
  } catch (error) {
    res.send(error.message);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await PulseModel.findByIdAndDelete(id);
    res.json(products);
  } catch (error) {
    res.send(error.message);
  }
});
mongoose
  .connect("mongodb+srv://Aysel:tahirova2003@mycluster.dg6gk9i.mongodb.net/")
  .then(() => console.log("Connected!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
