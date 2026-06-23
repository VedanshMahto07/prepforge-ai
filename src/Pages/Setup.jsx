import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { roles } from "../Data/Roles.js";
import { difficulties } from "../Data/Difficulties.js";
import { questionCounts } from "../Data/QuestionCount.js"

export default function Setup() {
    const navigate = useNavigate();

    const [selectedRole, setSelectedRole] = useState("");
    const [selectedDifficulty, setSelectedDifficulty] = useState("");
    const [selectedCount, setSelectedCount] = useState(5);

    const handleStartInterview = () => {
        if (!selectedRole || !selectedDifficulty) {
            alert("Please select role and difficulty");
            return;
        }

        navigate("/interview", {
            state: {
                role: selectedRole,
                difficulty: selectedDifficulty,
                count: selectedCount,
            },
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
            <Navbar />

            <main className="flex-1 px-6 py-16">
                <div className="mx-auto max-w-5xl">

                    <div className="mb-12 text-center">
                        <h1 className="mb-4 text-4xl font-semibold">
                            Configure Interview
                        </h1>

                        <p className="text-[#9090b0]">
                            Select your role, difficulty level, and number of questions.
                        </p>
                    </div>

                    <section className="mb-10">
                        <h2 className="mb-4 text-xl font-medium">
                            Select Role
                        </h2>

                        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-4">
                            {roles.map((role) => (
                                <button
                                    key={role}
                                    onClick={() => setSelectedRole(role)}
                                    className={`rounded-xl border p-3 text-sm transition
                    ${selectedRole === role
                                            ? "border-[#a78bfa] bg-[#1a1a24]"
                                            : "border-[#2a2a3a] bg-[#111118] hover:border-[#a78bfa]"
                                        }`}
                                >
                                    {role}
                                </button>
                            ))}
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="mb-4 text-xl font-medium">
                            Select Difficulty
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            {difficulties.map((difficulty) => (
                                <button
                                    key={difficulty}
                                    onClick={() => setSelectedDifficulty(difficulty)}
                                    className={`rounded-xl border px-6 py-3 transition
                    ${selectedDifficulty === difficulty
                                            ? "border-[#a78bfa] bg-[#1a1a24]"
                                            : "border-[#2a2a3a] bg-[#111118] hover:border-[#a78bfa]"
                                        }`}
                                >
                                    {difficulty}
                                </button>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="mb-4 text-xl font-medium">
                            Number of Questions
                        </h2>

                        <div className="flex gap-3">
                            {questionCounts.map((count) => (
                                <button
                                    key={count}
                                    onClick={() => setSelectedCount(count)}
                                    className={`rounded-xl border px-6 py-3 transition
                    ${selectedCount === count
                                            ? "border-[#a78bfa] bg-[#1a1a24]"
                                            : "border-[#2a2a3a] bg-[#111118] hover:border-[#a78bfa]"
                                        }`}
                                >
                                    {count}
                                </button>
                            ))}
                        </div>
                    </section>

                    <div className="text-center">
                        <button
                            onClick={handleStartInterview}
                            className="rounded-xl bg-[#a78bfa] px-8 py-4 font-medium text-black transition hover:opacity-90"
                        >
                            Start Interview →
                        </button>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}