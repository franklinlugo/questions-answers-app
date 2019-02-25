import Question from "../models/Question";

const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).send(questions);
  } catch (err) {
    res.status(500).send(err);
  }
};

const insertQuestion = async (req, res) => {
  const { title, description } = req.body;
  const question = new Question({
    title,
    description
  });
  try {
    const newQuestion = await question.save();
    res.status(200).send({
      question: newQuestion,
      message: "question created successfully"
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

const getQuestionById = async (req, res) => {
  const { id } = req.params;
  try {
    const question = await Question.findById(id);
    res.status(200).send(question);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteQuestion = async (req, res) => {
  const { id } = req.params;
  try {
    const deteledQuestion = await Question.findByIdAndDelete(id);
    res
      .status(200)
      .send({ deteledQuestion, message: "Question was deleted successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
};

const insertAnswerToQuestion = async (req, res) => {
  const { id } = req.params;
  const { answer } = req.body;
  try {
    const newAswer = await Question.findByIdAndUpdate(
      id,
      {
        $push: { answers: { answer } }
      },
      { new: true }
    );
    res
      .status(200)
      .send({ newAswer, message: "The answer was added successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
};

export {
  insertQuestion,
  getQuestions,
  getQuestionById,
  deleteQuestion,
  insertAnswerToQuestion
};
