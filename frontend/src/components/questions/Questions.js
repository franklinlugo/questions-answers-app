import React from 'react';
import Proptypes from 'prop-types';
import StyledQuestions from './QuestionStyles';
import { Link } from 'react-router-dom';

const Questions = ({ questions }) => {
  console.log(questions);
  const renderQuestions = () => {
    return questions.map(question => (
      <Link className="question" key={question._id} to={`/question/${question._id}`}>
        <header className="header">Answers: {question.answers.length}</header>
        <div className="body">
          <h3 className="title">{question.title}</h3>
          <p className="description">{question.description}</p>
        </div>
      </Link>
    ));
  };
  return <StyledQuestions>{renderQuestions()}</StyledQuestions>;
};

Questions.propTypes = {
  questions: Proptypes.arrayOf(
    Proptypes.shape({
      _id: Proptypes.string,
      answers: Proptypes.array,
      title: Proptypes.string,
      description: Proptypes.string,
    })
  ).isRequired,
};

export default Questions;
