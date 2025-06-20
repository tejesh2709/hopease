"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    question: "How often do you scroll on your phone in a day?",
    description:
      "Time spent during scrolling daily (using social media). A rough estimate will do",
    type: "single",
    options: [
      "Less than 30 min",
      "1-2 hrs",
      "3-4 hrs",
      "5-6 hrs",
      "more than 7 hrs",
    ],
  },
  {
    question: "What do you want out of your life?",
    description:
      "Think about it for some time! You don't need to tell us if you don't want to.",
    type: "single",
    options: [
      "less screen time",
      "to feel less overwhelmed",
      "to wakeup excited",
      "to feel at peace in silence",
      "to enjoy each day",
      "I don't know",
      "Many of the above",
    ],
  },
  {
    question: "Pick your two favorite activities on the list?",
    description:
      "Try basing your answer on what YOU want out life, and comparing how your actions are (or aren't) aligned",
    type: "multiple",
    options: [
      "Time spent playing",
      "Chatting with friends",
      "Scrolling on social media",
      "Watching T.V",
      "Exercising",
      "Meditating",
      "Reading Books",
    ],
  },
  {
    question: "Which of the following words resonates with you the most?",
    description: "Pick the word that speaks to you the loudest",
    type: "single",
    options: [
      "Adventurous",
      "Creative",
      "Relaxed",
      "Serious",
      "Drained",
      "Lost",
      "Curious",
    ],
  },
  {
    question:
      "When was the last time you lost track of the time doing something you love?",
    description:
      "Be honest! We want to help you make this type of thing a more frequent occurrence",
    type: "single",
    options: [
      "Today",
      "In the last week",
      "In the last month",
      "A few months ago",
      "Many months ago",
      "few seconds ago",
      "I can't remember...",
    ],
  },
];

export default function Survey() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string | string[] }>(
    {}
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  // Initialize answer for the current question
  useEffect(() => {
    if (!answers.hasOwnProperty(currentIndex)) {
      setAnswers((prev) => ({
        ...prev,
        [currentIndex]: currentQuestion.type === "single" ? "" : [],
      }));
    }
  }, [currentIndex, answers, currentQuestion.type]);

  const handleOptionChange = (option: string) => {
    const updatedAnswers = { ...answers };

    if (currentQuestion.type === "single") {
      updatedAnswers[currentIndex] = option;
    } else if (currentQuestion.type === "multiple") {
      const current = (updatedAnswers[currentIndex] as string[]) || [];
      if (current.includes(option)) {
        updatedAnswers[currentIndex] = current.filter((o) => o !== option);
      } else {
        // Limit to 2 choices for "Pick your two favorite activities"
        if (
          currentIndex === 2 &&
          current.length >= 2 &&
          !current.includes(option)
        ) {
          return;
        }
        updatedAnswers[currentIndex] = [...current, option];
      }
    }

    setAnswers(updatedAnswers);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setIsTransitioning(false);
      }, 200);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setIsTransitioning(false);
      }, 200);
    } else {
      router.push("/curiosity-map");
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

  // Check if we can move to next question (validate current answer)
  const canProceed = () => {
    const answer = answers[currentIndex];
    if (currentQuestion.type === "single") {
      return answer !== "";
    } else if (currentQuestion.type === "multiple") {
      return Array.isArray(answer) && answer.length > 0;
    }
    return false;
  };

  return (
    <div className="flex h-screen justify-center items-center bg-[#f5f5f7] dark:bg-[#111111]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl p-6 md:p-10 font-['SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif]"
      >
        {/* Navigation and Progress */}
        <div className="flex items-center gap-5 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="p-2 rounded-full disabled:opacity-30 text-gray-700 dark:text-gray-300 transition-opacity"
            aria-label="Previous question"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <div className="flex-1">
            <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{
                  width: `${(currentIndex / questions.length) * 100}%`,
                }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"
              />
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-500">
              <span>
                Question {currentIndex + 1} of {questions.length}
              </span>
              <span>{Math.round(progress)}% complete</span>
            </div>
          </div>
        </div>

        {/* Question Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: isTransitioning ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isTransitioning ? 20 : -20 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-medium mb-3 text-gray-800 dark:text-gray-100">
              {currentQuestion.question}
            </h2>
            <p className="mb-6 text-gray-500 dark:text-gray-400 leading-relaxed">
              {currentQuestion.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <AnimatePresence mode="wait">
            {currentQuestion.options.map((option, i) => (
              <motion.div
                key={`${currentIndex}-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="relative"
              >
                <motion.label
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="block cursor-pointer"
                >
                  <input
                    type={
                      currentQuestion.type === "single" ? "radio" : "checkbox"
                    }
                    name={`question-${currentIndex}`}
                    value={option}
                    className="hidden"
                    checked={isSelected(option)}
                    onChange={() => {
                      handleOptionChange(option);
                      if (currentQuestion.type === "single") {
                        setTimeout(handleNext, 300);
                      }
                    }}
                  />
                  <div
                    className={`p-4 md:p-5 rounded-xl flex items-center transition-all duration-200 border shadow-sm ${
                      isSelected(option)
                        ? "bg-white dark:bg-[#1c1c1e] border-purple-300 dark:border-purple-600 shadow-md"
                        : "bg-white dark:bg-[#1c1c1e] border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                    }`}
                  >
                    <div className="mr-4">
                      <div
                        className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${
                          isSelected(option)
                            ? "border-purple-500 bg-white dark:bg-transparent"
                            : "border-gray-300 dark:border-gray-600"
                        }`}
                      >
                        {isSelected(option) && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2.5 h-2.5 rounded-full bg-purple-500"
                          />
                        )}
                      </div>
                    </div>
                    <span
                      className={`flex-1 text-base ${
                        isSelected(option)
                          ? "text-gray-800 dark:text-gray-100 font-medium"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {option}
                    </span>
                  </div>
                </motion.label>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <motion.div
          className="mt-8 flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={!canProceed()}
            onClick={handleNext}
            className={`px-6 py-3 rounded-full text-white shadow-sm transition-all duration-200 ${
              canProceed()
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-md"
                : "bg-gray-400 dark:bg-gray-700 opacity-70 cursor-not-allowed"
            }`}
          >
            {currentIndex === questions.length - 1 ? "Submit" : "Continue"}
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
