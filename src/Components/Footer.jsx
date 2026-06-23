import { Link } from "react-router-dom";
export default function Footer() {
  return (<footer className="border-t border-[#2a2a3a] bg-[#0a0a0f]"> <div className="mx-auto max-w-7xl px-6 py-12">

    <div className="grid gap-10 md:grid-cols-4">

      <div>
        <h2 className="text-2xl font-semibold text-[#f0f0f8]">
          Prep<span className="text-[#a78bfa]">Forge</span> AI
        </h2>

        <p className="mt-3 text-sm text-[#9090b0]">
          Practice smarter. Interview better.
        </p>

        <p className="mt-3 max-w-sm text-sm text-[#6f6f90]">
          AI-powered interview preparation platform designed to
          help students and professionals prepare for technical
          interviews with confidence.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Link
          to="/"
          className="text-sm text-[#9090b0] transition hover:text-white"
        >
          Home
        </Link>

        <Link
          to="/setup"
          className="text-sm text-[#9090b0] transition hover:text-white"
        >
          Start Practice
        </Link>

        <a
          href="#features"
          className="text-sm text-[#9090b0] transition hover:text-white"
        >
          Features
        </a>
        <a
          href="#how-it-works"
          className="text-sm text-[#9090b0] transition hover:text-white"
        >
          How It Works
        </a>

      </div>

      <div>
        <h3 className="mb-4 text-lg font-medium text-white">
          Built With
        </h3>

        <div className="flex flex-col gap-3 text-sm text-[#9090b0]">
          <span>⚛ React</span>
          <span>🎨 Tailwind CSS</span>
          <span>🤖 Gemini AI</span>
          <span>🚀 Vercel</span>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-medium text-white">
          Connect
        </h3>

        <div className="flex flex-col gap-3">
          <a
            href="https://github.com/VedanshMahto07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#9090b0] transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vedansh-mahto-948658366/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#9090b0] transition hover:text-white"
          >
            LinkedIn
          </a>

          <a
            // href="mailto:vedanshmahto07@email.com"
            className="text-sm text-[#9090b0] transition hover:text-white"
          >
            Email : vedanshmahto07@gmail.com
          </a>
        </div>
      </div>

    </div>

    <div className="mt-10 border-t border-[#2a2a3a] pt-6">

      <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row">

        <p className="text-sm text-[#5a5a7a]">
          © 2026 PrepForge AI. All rights reserved.
        </p>

        <p className="text-sm text-[#5a5a7a]">
          Designed & Developed by{" "}
          <span className="font-medium text-[#a78bfa]">
            Vedansh Mahto
          </span>
        </p>

        <p className="text-sm text-[#5a5a7a]">
          Version 1.0
        </p>

      </div>

    </div>

  </div>
  </footer>


  );
}
