import React, { useState, useEffect } from 'react';

export default function App() {
  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

  /*
  console.log(questions[0].answerOptions[0].answerText);
  console.log(questions[0].questionText); 
  */

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
			setScore(prevScore => score + 1);
		}

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
      setShowScore(prevShowScore => !prevShowScore);
		}
  }

  function playAgain(){
    setShowScore(prevShowScore => !prevShowScore);
    setCurrentQuestion(0);
    setScore(0);
  }

    return (
        <>
    <main>
        <section>
        {showScore ? ( <>
            <aside>You scored {score} out of {questions.length}</aside>
            <button onClick={playAgain}>Click to play again</button></>
        ) : (
            <article>
                <header>
                    <h1>Question {currentQuestion + 1}/{questions.length}</h1>
                    <h2>{questions[currentQuestion].questionText}</h2>
                </header>
                <menu>
                  {
                  questions[currentQuestion].answerOptions.map((ans, key) => (
                    <li key={key} onClick={() => handleOptionClick (ans.isCorrect)}>{ans.answerText}</li>
                  ))
                  }
                </menu>
            </article>)}
        </section>
        <footer><a href="https://github.com/traez/quiz-app-react" target="_blank">https://github.com/traez</a></footer>
    </main>
        </>
    )
}

/*
  setSearchTerm(event.target.value)

<section 
          style={{
        backgroundColor: color
      }}
      >{number}° C</section>
*/