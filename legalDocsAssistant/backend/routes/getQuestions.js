import express from "express";
import Question from "../models/Question.js"; 

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const questions = await Question.find(); 
    res.json(questions); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
