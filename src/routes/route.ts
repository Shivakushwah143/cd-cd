import type { Request, Response } from "express";
import Data from "../models/model.js";
import Express from "express";
const router = Express.Router();

// GET all data
router.get("/", async (req: Request, res: Response) => {
  try {
    const data = await Data.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});

// POST new data
router.post("/", async (req: Request, res: Response) => {
  try {
    const { title, description, value } = req.body;
    console.log(req.body);
    const newData = new Data({
      title,
      description,
      value,
    });

    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(500).json({ message: "Error creating data", error });
  }
});

router.delete("/:dataId", async (req: Request, res: Response) => {
  const dataId = req.params.dataId;
  console.log(dataId);
  if (!dataId) {
    {
      res.status(404).json({ message: "dataId not found" });
    }
    return;
  }
  try {
    const deleteProduct = await Data.findByIdAndDelete(dataId);
    console.log(deleteProduct);
    res.status(200).json({ message: "deleted successfully", deleteProduct });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

router.put("/:dataId", async (req: Request, res: Response) => {
  const dataId = req.params.dataId;
  console.log(dataId);
  try {
    const Update = await Data.findByIdAndUpdate(dataId, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, Update });
  } catch (error) {
    res.status(500).json({ success: "internal server error" });
  }
});
export default router;
