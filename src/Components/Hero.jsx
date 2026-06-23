import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">

      <div className="mb-8 rounded-full border border-[#4b4b6d] bg-[#151521] px-4 py-2">
        <p className="text-sm text-[#a78bfa]">
          ✨ AI-powered interview prep
        </p>
      </div>

      <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
        Ace your next
        <br />
        <span className="bg-gradient-to-r from-[#a78bfa] to-[#5dcaa5] bg-clip-text text-transparent">
          job interview
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#9090b0]">
        Practice with role-specific questions, get instant AI feedback,
        and improve your confidence before the real interview.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

        <Link
          to="/setup"
          className="rounded-xl bg-[#a78bfa] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
        >
          Start Interview →
        </Link>

        <button
          className="rounded-xl border border-[#34344d] px-6 py-3 text-sm font-medium text-[#c4c4d8] transition hover:border-[#a78bfa] hover:text-white"
        >
          See How It Works
        </button>
        
      </div>
    </section>
  );
}