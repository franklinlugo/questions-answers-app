import { Router } from "express";
import * as QUESTION_CONTROLLER from "../controllers/questionController";

const router = Router();

router.get("/", QUESTION_CONTROLLER.getQuestions);

router.get("/:id", QUESTION_CONTROLLER.getQuestionById);

router.post("/", QUESTION_CONTROLLER.insertQuestion);

router.delete("/:id", QUESTION_CONTROLLER.deleteQuestion);

router.post("/answer/:id", QUESTION_CONTROLLER.insertAnswerToQuestion);

export default router;
