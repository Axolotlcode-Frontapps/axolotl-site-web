import { useState } from 'react';

export const Accordion: React.FC<{
  question: string;
  answer: string;
  index: number;
}> = ({ index, question, answer }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <article className="border border-gray-200 rounded-lg">
      <button
        className={`w-full flex justify-between items-center p-4 text-left ${
          openIndex === index
            ? 'bg-gradient-to-r from-primary-500/10 to-primary-500/10'
            : ''
        }`}
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
      >
        <span
          className={`font-medium ${openIndex === index ? 'text-primary-500' : ''}`}
        >
          {question}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 transition-transform duration-200 ${
            openIndex === index ? 'transform rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {openIndex === index && <p className="text-gray-600 p-4">{answer}</p>}
    </article>
  );
};
