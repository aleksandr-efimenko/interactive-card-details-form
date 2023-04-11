import React from "react";

const SpinnerIcon = () => {
  return (
    <svg className="animate-spin h-5 w-5 " viewBox="0 0 24 24">
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
        d="M4 12a8 8 0 019.95-7.55L12 2.4l-.95.05A8 8 0 004 12v.01z"
      />
    </svg>
  );
};

export default SpinnerIcon;
