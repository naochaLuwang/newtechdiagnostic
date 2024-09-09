const Spinner = () => (
  <div className="flex items-center justify-center">
    <svg
      className="w-6 h-6 text-indigo-600 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"
      />
    </svg>
  </div>
);

export default Spinner;
