export default function Features() {
    const features = [
        {
            title: "AI Question Generation",
            description:
                "Generate role-specific interview questions tailored to your experience level.",
        },
        {
            title: "Instant Feedback",
            description:
                "Get detailed strengths, weaknesses, and improvement suggestions.",
        },
        {
            title: "Performance Analytics",
            description:
                "Track your interview performance and identify weak areas.",
        },
        {
            title: "Role-Based Interviews",
            description:
                "Practice interviews for Frontend, Backend, Full Stack, Data, AI, Cloud, Cybersecurity, and more.",
        },
    ];

    return (
        <section id="features" className="px-6 py-24">
            <div className="mx-auto max-w-7xl">

                <h2 className="mb-4 text-center text-4xl font-semibold text-white">
                    Why Choose PrepForge AI?
                </h2>

                <p className="mx-auto mb-16 max-w-2xl text-center text-[#9090b0]">
                    Everything you need to prepare for your next interview.
                </p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-2xl border border-[#2a2a3a] bg-[#111118] p-6 transition hover:border-[#a78bfa]"
                        >
                            <h3 className="mb-3 text-lg font-medium text-white">
                                {feature.title}
                            </h3>

                            <p className="text-sm leading-relaxed text-[#9090b0]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}