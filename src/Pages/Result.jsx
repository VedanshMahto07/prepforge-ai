import { Navigate, useLocation, Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { evaluateInterview } from "../Services/Gemini.js";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { fallbackAnswers } from "../Data/FallBackAnswers.js";

export default function Results() {
    const location = useLocation();
    console.log(location.state);
    if (!location.state) {
        return <Navigate to="/setup" />;
    }

    const {
        role,
        difficulty,
        questions,
        answers,
        isFallback,
    } = location.state;

    const completionRate = Math.round(
        (answers.length / questions.length) * 100
    );

    const [analysis, setAnalysis] = useState(null);

    const [loadingAnalysis, setLoadingAnalysis] = useState(true);
    useEffect(() => {

        if (isFallback) {
            setLoadingAnalysis(false);
            return;
        }

        async function analyzeInterview() {
            try {
                const result = await evaluateInterview(
                    role,
                    difficulty,
                    questions,
                    answers
                );

                setAnalysis(result);

            } catch (error) {
                console.error(error);
                // alert(error.message);
            } finally {
                setLoadingAnalysis(false);
            }
        }

        analyzeInterview();

    }, [
        role,
        difficulty,
        questions,
        answers,
        isFallback
    ]);
    return (
        <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
            <Navbar />

            <main className="flex-1 px-6 py-12">
                <div className="mx-auto max-w-6xl">

                    {/* Header */}
                    <div className="mb-10 text-center">
                        <h1 className="mb-4 text-5xl font-bold">
                            Interview Completed 🎉
                        </h1>

                        {!isFallback && (
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#a78bfa]/30 bg-[#a78bfa]/10 px-4 py-2">
                                <span>🤖</span>

                                <span className="text-sm font-medium text-[#c4b5fd]">
                                    AI Evaluation Completed • Powered by Gemini
                                </span>
                            </div>
                        )}
                        <p className="text-[#9090b0]">
                            Review your interview session below.
                        </p>
                    </div>

                    <div className="mb-12 grid gap-6 md:grid-cols-4">

                        <div className="rounded-2xl border border-[#2a2a3a] bg-[#111118] p-6">
                            <h3 className="mb-2 text-sm text-[#9090b0]">
                                Role
                            </h3>

                            <p className="font-semibold">
                                {role}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-[#2a2a3a] bg-[#111118] p-6">
                            <h3 className="mb-2 text-sm text-[#9090b0]">
                                Difficulty
                            </h3>

                            <p className="font-semibold">
                                {difficulty}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-[#2a2a3a] bg-[#111118] p-6">
                            <h3 className="mb-2 text-sm text-[#9090b0]">
                                Questions Answered
                            </h3>

                            <p className="font-semibold">
                                {answers.length}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-[#2a2a3a] bg-[#111118] p-6">
                            <h3 className="mb-2 text-sm text-[#9090b0]">
                                Completion Rate
                            </h3>

                            <p className="font-semibold text-[#a78bfa]">
                                {completionRate}%
                            </p>
                        </div>

                    </div>
                    {loadingAnalysis ? (
                        <div className="mb-10 rounded-2xl border border-[#2a2a3a] bg-[#111118] p-8 text-center">
                            <h2 className="text-2xl font-semibold">
                                Analyzing Performance...
                            </h2>
                        </div>
                    ) : !isFallback && analysis && (
                        <>
                            <div className="mb-10 rounded-3xl border border-[#2a2a3a] bg-[#111118] p-10 text-center">

                                <p className="mb-2 text-sm uppercase tracking-wider text-[#9090b0]">
                                    Overall Score
                                </p>

                                <h2 className="text-7xl font-bold text-[#a78bfa]">
                                    {analysis.overallScore}
                                </h2>

                                <p className="mt-2 text-[#9090b0]">
                                    out of 100
                                </p>

                            </div>

                            <div className="mb-10 grid gap-6 md:grid-cols-3">

                                <div className="rounded-2xl border border-[#2a2a3a] bg-[#111118] p-6">
                                    <h3 className="text-sm text-[#9090b0]">
                                        Technical Knowledge
                                    </h3>

                                    <p className="mt-3 text-4xl font-bold">
                                        {analysis.technicalKnowledge}/10
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-[#2a2a3a] bg-[#111118] p-6">
                                    <h3 className="text-sm text-[#9090b0]">
                                        Communication
                                    </h3>

                                    <p className="mt-3 text-4xl font-bold">
                                        {analysis.communication}/10
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-[#2a2a3a] bg-[#111118] p-6">
                                    <h3 className="text-sm text-[#9090b0]">
                                        Problem Solving
                                    </h3>

                                    <p className="mt-3 text-4xl font-bold">
                                        {analysis.problemSolving}/10
                                    </p>
                                </div>

                            </div>

                            <div className="mb-10 grid gap-6 md:grid-cols-2">

                                <div className="rounded-2xl border border-green-500/20 bg-[#111118] p-6">
                                    <h2 className="mb-4 text-xl font-semibold text-green-400">
                                        Strengths
                                    </h2>

                                    {analysis.strengths.map((item, index) => (
                                        <p key={index} className="mb-2">
                                            ✅ {item}
                                        </p>
                                    ))}
                                </div>

                                <div className="rounded-2xl border border-red-500/20 bg-[#111118] p-6">
                                    <h2 className="mb-4 text-xl font-semibold text-red-400">
                                        Weaknesses
                                    </h2>

                                    {analysis.weaknesses.map((item, index) => (
                                        <p key={index} className="mb-2">
                                            ❌ {item}
                                        </p>
                                    ))}
                                </div>

                            </div>

                            <div className="mb-10 rounded-2xl border border-[#2a2a3a] bg-[#111118] p-6">
                                <h2 className="mb-4 text-xl font-semibold">
                                    Suggestions
                                </h2>

                                {analysis.suggestions.map((item, index) => (
                                    <p key={index} className="mb-2">
                                        🚀 {item}
                                    </p>
                                ))}
                            </div>

                            <div className="mb-10">
                                <h2 className="mb-4 text-2xl font-semibold">
                                    Question Analytics
                                </h2>

                                <div className="space-y-3">
                                    {analysis.questionScores.map((item) => (
                                        <div
                                            key={item.questionNumber}
                                            className="flex justify-between rounded-xl border border-[#2a2a3a] bg-[#111118] p-4"
                                        >
                                            <span>
                                                Question {item.questionNumber}
                                            </span>

                                            <span className="font-bold text-[#a78bfa]">
                                                {item.score}/10
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                    {isFallback && (

                        <div className="mb-10 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-6">

                            <h2 className="mb-2 text-2xl font-bold text-yellow-300">
                                ⚠ AI Evaluation Unavailable
                            </h2>

                            <p className="text-yellow-200">
                                Gemini API quota was exceeded.

                                Your interview was completed using our curated
                                fallback question bank.

                                You can still review all your answers below.
                            </p>

                        </div>

                    )}
                    {isFallback && (

                        <div className="mb-10 grid gap-6 md:grid-cols-3">

                            <div className="rounded-2xl border border-[#2a2a3a] bg-[#111118] p-6">
                                <h3 className="text-sm text-[#9090b0]">
                                    Questions Answered
                                </h3>

                                <p className="mt-3 text-4xl font-bold">
                                    {answers.length}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#2a2a3a] bg-[#111118] p-6">
                                <h3 className="text-sm text-[#9090b0]">
                                    Completion Rate
                                </h3>

                                <p className="mt-3 text-4xl font-bold text-[#a78bfa]">
                                    {completionRate}%
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#2a2a3a] bg-[#111118] p-6">
                                <h3 className="text-sm text-[#9090b0]">
                                    Question Source
                                </h3>

                                <p className="mt-3 text-xl font-bold">
                                    Curated Bank
                                </p>
                            </div>

                        </div>
                    )}
  
                    <div className="mb-10">
                        <h2 className="mb-6 text-3xl font-semibold">
                            Interview Review
                        </h2>
                        <div className="space-y-6">

                            {questions.map((question, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl border border-[#2a2a3a] bg-[#111118] p-6"
                                >
                                    <div className="mb-4 flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-[#a78bfa]">
                                            Question {index + 1}
                                        </h3>

                                        {!isFallback &&
                                            analysis?.questionScores?.[index] && (
                                                <span className="rounded-lg bg-[#a78bfa]/10 px-3 py-1 text-sm font-bold text-[#a78bfa]">
                                                    Score: {analysis.questionScores[index].score}/10
                                                </span>
                                            )}
                                    </div>

                                    <p className="mb-6 text-white">
                                        {question}
                                    </p>

                                    <div>
                                        <h4 className="mb-2 text-sm font-medium text-[#9090b0]">
                                            Your Answer
                                        </h4>

                                        <div className="rounded-xl bg-[#0a0a0f] p-4 text-[#d4d4e8]">
                                            {answers[index] || "No answer provided"}
                                        </div>

                                        {/* AI Suggested Answer */}
                                        {!isFallback &&
                                            analysis?.questionScores?.[index]?.suggestedAnswer && (
                                                <div className="mt-4">
                                                    <h4 className="mb-2 text-sm font-medium text-green-400">
                                                        AI Suggested Answer
                                                    </h4>

                                                    <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-green-100">
                                                        {
                                                            analysis.questionScores[index]
                                                                .suggestedAnswer
                                                        }
                                                    </div>
                                                </div>
                                            )}

                                        {/* Fallback Suggested Answer */}
                                        {isFallback && (
                                            <div className="mt-4">
                                                <h4 className="mb-2 text-sm font-medium text-green-400">
                                                    Suggested Answer
                                                </h4>

                                                <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-green-100">
                                                    {fallbackAnswers[question] ||
                                                        "Answer not available."}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {isFallback && (
                                        <div className="mt-4">
                                            <h4 className="mb-2 text-sm font-medium text-green-400">
                                                Suggested Answer
                                            </h4>

                                            <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-green-100">
                                                {
                                                    fallbackAnswers[question] ||
                                                    "Answer not available."
                                                }
                                            </div>
                                        </div>
                                    )}
                                </div>

                            ))}

                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">

                        <Link
                            to="/setup"
                            className="rounded-xl bg-[#a78bfa] px-6 py-3 font-medium text-black transition hover:opacity-90"
                        >
                            Practice Again
                        </Link>

                        <Link
                            to="/"
                            className="rounded-xl border border-[#2a2a3a] px-6 py-3 font-medium transition hover:border-[#a78bfa]"
                        >
                            Back to Home
                        </Link>

                    </div>

                </div>
            </main >

            <Footer />
        </div >
    );
}