import React from "react";

interface SuggestionsBoxProps {
  suggestions?: string[];
  onSuggestionClick: (suggestion: string) => void;
  suggestionBgColor?: string;
  suggestionTextColor?: string;
}

const SuggestionsBox: React.FC<SuggestionsBoxProps> = (props) => {
  if (!props.suggestions) return null;
  return (
    <div className="">
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {props.suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-md p-1.5 text-xs font-semibold cursor-pointer"
            style={{
              backgroundColor: props.suggestionBgColor,
              color: props.suggestionTextColor,
            }}
            onClick={() => props.onSuggestionClick(suggestion)}
          >
            {suggestion}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionsBox;
