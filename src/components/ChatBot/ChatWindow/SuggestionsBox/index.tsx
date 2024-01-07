import React from "react";

const SuggestionsBox = () => {
  const suggestions = [
    "What’s my account balance?",
    "What’s my refund status?",
    "Give me my account statement for last three months.",
  ];
  return (
    <div className="mx-2 p-2">
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-md p-1.5 text-xs font-semibold cursor-pointer"
          >
            {suggestion}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionsBox;
