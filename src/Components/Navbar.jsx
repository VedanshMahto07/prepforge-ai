import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (location.pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[#2a2a3a] bg-[#0a0a0f]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link to="/">
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-[#f0f0f8]">
              Prep<span className="text-[#a78bfa]">Forge</span> AI
            </h1>

            <p className="text-[11px] text-[#6b6b8a]">
              Forge Your Future
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm text-[#9090b0] transition hover:text-white"
          >
            Features
          </button>

          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-sm text-[#9090b0] transition hover:text-white"
          >
            How It Works
          </button>
        </div>

        <Link
          to="/setup"
          className="rounded-lg bg-[#534ab7] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-[#6a61d4]"
        >
          Start Practicing
        </Link>
      </div>
    </nav>
  );
}