import React, { useEffect, useState } from 'react';
import Questions from '../components/questions/Questions';

const Index = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const getQuestions = async () => {
      const response = await fetch('http://localhost:8081/api');
      const data = await response.json();
      setQuestions(data);
    };
    getQuestions();
  }, []);
  return <Questions questions={questions} />;
};

export default Index;
