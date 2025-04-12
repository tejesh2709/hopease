"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const questions = [
  {
    question: "What are your favorite programming languages?",
    description: "where you started breaking your head",
    type: "multiple",
    options: ["JavaScript", "Python", "C++", "Go", "Rust"]
  },
  {
    question: "How many years of experience do you have in coding?",
    description: "when did you slept last night",
    type: "single",
    options: ["< 1 year", "1-2 years", "3-5 years", "5+ years"]
  },
  {
    question: "Which domains are you interested in?",
    description: "how many types of disorders you faced",
    type: "multiple",
    options: ["Web Development", "AI/ML", "Cybersecurity", "Cloud", "Blockchain"]
  },
  {
    question: "Are you currently working on a project?",
    description: "Are you currently suffering",
    type: "single",
    options: ["Yes", "No"]
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string | string[] }>({});

  const currentQuestion = questions[currentIndex];

  // 🔧 Initialize answer for the current question to prevent uncontrolled input warning
  useEffect(() => {
    if (!answers.hasOwnProperty(currentIndex)) {
      setAnswers((prev) => ({
        ...prev,
        [currentIndex]: currentQuestion.type === "single" ? "" : [],
      }));
    }
  }, [currentIndex]);

  const handleOptionChange = (option: string) => {
    const updatedAnswers = { ...answers };

    if (currentQuestion.type === "single") {
      updatedAnswers[currentIndex] = option;
    } else if (currentQuestion.type === "multiple") {
      const current = (updatedAnswers[currentIndex] as string[]) || [];
      if (current.includes(option)) {
        updatedAnswers[currentIndex] = current.filter((o) => o !== option);
      } else {
        updatedAnswers[currentIndex] = [...current, option];
      }
    }

    setAnswers(updatedAnswers);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      console.log("Submit Answers:", answers);
      alert("All answers submitted!");
    }
  };

  const isSelected = (option: string) => {
    const answer = answers[currentIndex];
    if (currentQuestion.type === "single") {
      return answer === option;
    } else {
      return Array.isArray(answer) && answer.includes(option);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-1/2 p-10 font-sans">
        {/* Navigation and Progress */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="px-3 py-1 rounded disabled:opacity-50 text-gray-200 text-2xl"
          >
            ←
          </button>
          <div className="flex-1 h-4 bg-gray-600 rounded-full overflow-hidden border-2 border-gray-600">
            <div
              className="h-full bg-blue-500 transition-all duration-300 rounded-3xl"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Box */}
        <div className="border-2 border-gray-600 mb-10 rounded-2xl p-2">
          <p className="text-xl mb-1">{currentQuestion.question}</p>
          <p className="mb-2 text-lg text-gray-600">{currentQuestion.description}</p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 w-full gap-4">
          {currentQuestion.options.map((option, i) => (
            <div key={i} className="mb-3">
              <label className="block cursor-pointer">
                <input
                  type={currentQuestion.type === "single" ? "radio" : "checkbox"}
                  name={`question-${currentIndex}`}
                  value={option}
                  className="hidden"
                  checked={isSelected(option)}
                  onChange={() => {
                    handleOptionChange(option);
                    if (currentQuestion.type === "single") {
                      handleNext();
                    }
                  }}
                />
                <div
                  className={`p-3 rounded-xl flex flex-grow bg-transparent transition-all border-b-2 duration-200 border ${isSelected(option)
                      ? " text-blue-300"
                      : "bg-blue-500 text-white border-gray-600"
                    }`}
                >
                  {option}
                </div>
              </label>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="mt-6 flex justify-end p-1">
          <button
            onClick={handleNext}
            className="px-2 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            {currentIndex === questions.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
