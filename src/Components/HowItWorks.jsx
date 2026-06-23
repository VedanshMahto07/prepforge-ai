export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Role",
      description:
        "Select your target career path and interview difficulty level.",
    },
    {
      number: "02",
      title: "Generate Questions",
      description:
        "Get AI-powered interview questions tailored to your selected role.",
    },
    {
      number: "03",
      title: "Answer & Practice",
      description:
        "Respond to interview questions and simulate a real interview experience.",
    },
    {
      number: "04",
      title: "Get Feedback",
      description:
        "Receive scores, strengths, weaknesses, and improvement suggestions.",
    },
  ];

  return (
    <section id="how-it-works" className="px-6 py-24 bg-[#0a0a0f]">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-semibold text-white">
            How It Works
          </h2>

          <p className="mx-auto max-w-2xl text-[#9090b0]">
            Prepare for interviews in four simple steps and improve with every session.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-[#2a2a3a] bg-[#111118] p-6 transition hover:border-[#a78bfa]"
            >
              <span className="mb-4 inline-block text-2xl font-bold text-[#a78bfa]">
                {step.number}
              </span>

              <h3 className="mb-3 text-xl font-medium text-white">
                {step.title}
              </h3>

              <p className="text-sm leading-relaxed text-[#9090b0]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}