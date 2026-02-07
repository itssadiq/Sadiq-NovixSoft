export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* Testing H1 */}
      <h1 className="text-display-lg mb-6">
        Building Digital{" "}
        <span style={{ color: "var(--text-secondary)" }}>Experiences</span>
      </h1>

      {/* Testing Body Text */}
      <p className="text-body-reg max-w-2xl text-center mb-10">
        I help satisfied clients achieve their goals through modern web design.
      </p>

      {/* Testing Buttons */}
      <div className="flex gap-4">
        <button className="btn-primary">Start a Project</button>

        <button className="btn-secondary">View Work</button>
      </div>
    </main>
  );
}
