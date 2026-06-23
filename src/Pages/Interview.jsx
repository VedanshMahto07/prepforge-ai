import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import { useEffect } from "react";
import { generateQuestions } from "../services/gemini";
import { fallbackQuestions } from "../data/FallBackQuestions.js";
import { getQuestions } from "../data/FallBackQuestions";

export default function Interview() {
    const navigate = useNavigate();
    const location = useLocation();

    if (!location.state) {
        navigate("/setup");
        return null;
    }

    const {
        role,
        difficulty,
        count,
    } = location.state;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answer, setAnswer] = useState("");
    const [answers, setAnswers] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [apiError, setApiError] = useState(false);

    const handleSubmit = () => {
        if (!answer.trim()) {
            alert("Please enter an answer.");
            return;
        }
        const updatedAnswers = [...answers, answer];
        setAnswers(updatedAnswers);

        if (currentQuestion === questions.length - 1) {
            navigate("/result", {
                state: {
                    role,
                    difficulty,
                    questions,
                    answers: updatedAnswers,
                    isFallback: apiError
                },
            });
            return
        }

        setCurrentQuestion(currentQuestion + 1);
        setAnswer("");
    };

    const progress =
        questions.length > 0
            ? ((currentQuestion + 1) /
                questions.length) *
            100
            : 0;

    useEffect(() => {
        async function loadQuestions() {
            try {
                const generatedQuestions =
                    await generateQuestions(
                        role,
                        difficulty,
                        count
                    );

                setQuestions(generatedQuestions);
            }
            catch (error) {
                console.error(error);

                setApiError(true);

                const fallback = getQuestions(
                    role,
                    difficulty,
                    count
                );

                setQuestions(fallback);
            }
            finally {
                setLoading(false);
            }
        }

        loadQuestions();
    }, [role, difficulty, count]);
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] text-white">
                <h1 className="text-2xl">
                    Generating AI Questions...
                </h1>
            </div>
        );
    }

    if (!questions.length) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] text-white">
                No questions available.
            </div>
        );
    }
    return (
        <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
            <Navbar />

            <main className="flex-1 px-6 py-12">
                <div className="mx-auto max-w-4xl">

                    <div className="mb-8">
                        <div className="mb-3 flex justify-between text-sm text-[#9090b0]">
                            <span>
                                Question {currentQuestion + 1} of {questions.length}
                            </span>

                            <span>
                                {Math.round(progress)}%
                            </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-[#1a1a24]">
                            <div
                                className="h-full bg-[#a78bfa] transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                    {apiError && (
                        <div className="mb-6 rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-yellow-300">
                            ⚠ Gemini API quota exceeded.

                            Using curated interview questions.
                        </div>
                    )}
                    <div className="rounded-2xl border border-[#2a2a3a] bg-[#111118] p-8">

                        <h2 className="mb-6 text-2xl font-semibold">
                            {questions[currentQuestion]}
                        </h2>

                        <textarea
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            placeholder="Type your answer here..."
                            className="min-h-[180px] w-full rounded-xl border border-[#2a2a3a] bg-[#0a0a0f] p-4 text-white outline-none focus:border-[#a78bfa]"
                        />

                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={handleSubmit}
                                className="rounded-xl bg-[#a78bfa] px-6 py-3 font-medium text-black transition hover:opacity-90"
                            >
                                {currentQuestion === questions.length - 1
                                    ? "Finish Interview"
                                    : "Next Question →"}
                            </button>
                        </div>

                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}