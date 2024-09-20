export default function SpinnerButton({
    sumbitAction,
    clickAction,
    btnAction,
    btnText = "Submit",
  }) {
    return (
      <button
        onClick={clickAction}
        disabled={btnAction}
        type="submit"
        className="hover-300 relative inline-flex items-center justify-center rounded bg-cyan-800 px-5 py-2 text-sm text-white font-semibold hover:bg-cyan-900 focus:outline-none lg:text-base"
      >
        {sumbitAction === true && (
          <svg
            className="absolute left-0 ml-2 h-4 w-4 animate-spin text-white"
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
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        <span
          className={`${sumbitAction === true ? "ml-4 opacity-50" : "opacity-100"} text-white`}
        >
          {sumbitAction === true ? "Loading..." : btnText}
        </span>
      </button>
    );
  }