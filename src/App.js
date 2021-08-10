import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const questions = [
    {
      id: 1,
      question: "Which company developed JavaScript?",
      answers: [
        { answerText: " Netscape", isCorrect: true },
        { answerText: "Bell Labs", isCorrect: false },
        { answerText: "Sun Microsystems", isCorrect: false },
        { answerText: "Sun Microsystems", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "What is the original name of JavaScript?",
      answers: [
        { answerText: "Mocha ", isCorrect: true },
        { answerText: "EScript", isCorrect: false },
        { answerText: "LiveScript", isCorrect: false },
        { answerText: "JavaScript", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "Which of the following is not a JavaScript framework?",
      answers: [
        { answerText: "HTML", isCorrect: true },
        { answerText: "Vue.js", isCorrect: false },
        { answerText: "Angular", isCorrect: false },
        { answerText: "Next.js", isCorrect: false },
      ],
    },
    {
      id: 4,
      question: "Inside which HTML element do we put the JavaScript?",
      answers: [
        { answerText: " <script>", isCorrect: true },
        { answerText: "<head>", isCorrect: false },
        { answerText: "<meta>", isCorrect: false },
        { answerText: "<style>", isCorrect: false },
      ],
    },
    {
      id: 5,
      question: "Is JavaScript a case-sensitive language?",
      answers: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Idk", isCorrect: false },
        { answerText: "None of them", isCorrect: false },
      ],
    },
    {
      id: 6,
      question:
        "Which of the following type of variable is visible only within a function where it is defined?",
      answers: [
        { answerText: "Global variable", isCorrect: false },
        { answerText: "Local variable", isCorrect: true },
        { answerText: "Both ", isCorrect: false },
        { answerText: "None of them", isCorrect: false },
      ],
    },
    {
      id: 7,
      question: "Which built-in method sorts the elements of an array?",
      answers: [
        { answerText: "sort()", isCorrect: true },
        { answerText: "changeOrder(order)", isCorrect: false },
        { answerText: " order()", isCorrect: false },
        { answerText: "None of the them", isCorrect: false },
      ],
    },
    {
      id: 8,
      question:
        "Which of the following function of Array object joins all elements of an array into a string?",
      answers: [
        { answerText: "concat()", isCorrect: false },
        { answerText: "pop()", isCorrect: false },
        { answerText: "join()", isCorrect: true },
        { answerText: "map()", isCorrect: false },
      ],
    },
    {
      id: 9,
      question:
        "Which of the following function of String object returns the calling string value converted to upper case while respecting the current locale?",
      answers: [
        { answerText: "toUpperCase()", isCorrect: false },
        { answerText: "toLocaleUpperCase()", isCorrect: true },
        { answerText: " toString()", isCorrect: false },
        { answerText: "substring()", isCorrect: false },
      ],
    },
    {
      id: 10,
      question: "Can you assign a anonymous function to a variable?",
      answers: [
        { answerText: "No", isCorrect: false },
        { answerText: "Yes", isCorrect: true },
        { answerText: "None of the them", isCorrect: false },
        { answerText: "Idk", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [correctOrElse, setCorrectOrElse] = useState(" ");

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);

      setCorrectOrElse(<h2 className="correct">Correct </h2>);
    } else {
      setCorrectOrElse(<h2 className="incorrect">Wrong</h2>);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      // setCorrectOrElse(" ");
    } else {
      setShowScore(true);
    }
  };

  const resetQuestionare = () => {
    window.location.reload();
  };

  return (
    <div className="app py-4">
      {showScore ? (
        <div className="wrapper px-4 py-4 text container  d-flex justify-content-between align-items-center ">
          <h2>
            You scored {score} out of {questions.length}
          </h2>

          <button
            onClick={resetQuestionare}
            className="fs-6 fw-bold btn1 border-primary m-1 px-4 pt-2 pb-2"
          >
            Start Again
          </button>
        </div>
      ) : (
        <>
          <div>
            <h1 className="text-center m-4 fs-3 ">Quiz-App</h1>

            {/* -----quiz-wrapper -- */}

            <div className="wrapper border  border-white text container d-flex justify-content-center align-items-center flex-column">
              <h6 className="text-start fs-4 fw-bold p-4">
                <span>Question number {currentQuestion + 1}</span>/
                {questions.length}
              </h6>
              <h4>{correctOrElse}</h4>
              <div className="fs-2 fw-bold mt-2 mb-2 p-2 ">
                <h1>Q : {questions[currentQuestion].question}</h1>
              </div>
              <div className=" mt-2 mb-2">
                {questions[currentQuestion].answers.map(
                  (answerOption, index) => (
                    <button
                      key={index}
                      style={{ color: "black" }}
                      className=" border-white fs-6 fw-bold btn1 border-primary m-1 px-4 pt-2 pb-2"
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
  //   const questions = [
  //     {
  //       id: 1,
  //       question: "Whats the capital of India?",
  //       answers: [
  //         { answerText: "New Delhi", isCorrect: true },
  //         { answerText: "Mumbai", isCorrect: false },
  //         { answerText: "Bangalore", isCorrect: false },
  //         { answerText: "New Delhi", isCorrect: false },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       question: "Whats the capital of USA?",
  //       answers: [
  //         { answerText: "New York", isCorrect: false },
  //         { answerText: "L.A.", isCorrect: false },
  //         { answerText: "Washington", isCorrect: true },
  //         { answerText: "New Delhi", isCorrect: false },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       question: "Whats the capital of Germany?",
  //       answers: [
  //         { answerText: "Berlin", isCorrect: true },
  //         { answerText: "Munich", isCorrect: false },
  //         { answerText: "New Town", isCorrect: false },
  //         { answerText: "Hamburg", isCorrect: false },
  //       ],
  //     },
  //     {
  //       id: 4,
  //       question: "Whats the capital of France?",
  //       answers: [
  //         { answerText: "Nice", isCorrect: false },
  //         { answerText: "Nantes", isCorrect: false },
  //         { answerText: "Paris", isCorrect: true },
  //         { answerText: "Toulouse", isCorrect: false },
  //       ],
  //     },
  //     {
  //       id: 5,
  //       question: "Whats the capital of United Kingdom?",
  //       answers: [
  //         { answerText: "Manchester", isCorrect: false },
  //         { answerText: "London", isCorrect: true },
  //         { answerText: "Canbridge", isCorrect: false },
  //         { answerText: "Edinburgh", isCorrect: false },
  //       ],
  //     },
  //   ];

  //   const [showQuestion, setShowQuestion] = useState(0);
  //   const [showScore, setShowScore] = useState(false);
  //   const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  //   const [score, setScore] = useState(0);

  //   const answerClickHandler = (e) => {
  // console.log(e);

  // --Score initials --
  // let score = 1;
  // const updatedScore = score + 1;
  // --------

  //     const showNextQuestion = showQuestion + 1;

  //     const updateCurrentQuestionNumber = currentQuestionNumber + 1;

  //     if (showNextQuestion < questions.length) {
  //       setShowQuestion(showNextQuestion);
  //       setCurrentQuestionNumber(updateCurrentQuestionNumber);
  //     } else {
  //       setShowScore(true);
  //     }
  //   };

  //   return (
  //     <div className="App">
  //       {showScore ? (
  //         <h6 style={{ color: "white" }}>
  //           Your score is {score} out of {questions.length}
  //         </h6>
  //       ) : (
  //         <div>
  //           <h1 className="text-white m-2">Quiz-App</h1>
  //           <div
  //             style={{ background: "#302b63" }}
  //             className="card  border-primary container Larger-shadow text-white "
  //           >
  //             <div className="score-section">
  //               <div className=" border-secondary d-flex justify-content-between m-4 p-2">
  //                 <h6>
  //                   <span>Question {currentQuestionNumber} </span>/
  //                   {questions.length}
  //                 </h6>
  //                 {/* <h6>
  //                 Your score is {showScore} out of {questions.length}
  //               </h6> */}
  //               </div>
  //               <div className="question-text ">
  //                 <h2 card-title="true"> {questions[showQuestion].question}</h2>
  //                 <hr className="border  border-1" />
  //               </div>
  //               <div className="answers m-2">
  //                 {questions[showQuestion].answers.map((answer, index) => (
  //                   <button
  //                     key={index}
  //                     onClick={answerClickHandler}
  //                     className=" border-primary text-white rounded m-4 p-3"
  //                   >
  //                     {answer.answerText}
  //                   </button>
  //                 ))}
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
}

export default App;
