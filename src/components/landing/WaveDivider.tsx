export default function WaveDivider() {
  return (
    <div aria-hidden="true" className="w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="h-10 w-full text-seagreen-pale"
        style={{ opacity: 0.35 }}
      >
        <path
          fill="currentColor"
          d="M0,30 C240,60 480,0 720,20 C960,40 1200,60 1440,20 L1440,60 L0,60 Z"
        />
      </svg>
    </div>
  );
}
