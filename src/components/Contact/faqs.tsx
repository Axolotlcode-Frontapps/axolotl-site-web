import { useState, useRef, useEffect } from 'react';
import type { FC } from 'react';
import { t, changeLanguage } from 'i18next';
import faqImage from '@/assets/images/faq-image.webp';
import anime from 'animejs';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: t('faqs.question1'),
    answer: t('faqs.answer1'),
  },
  {
    question: t('faqs.question2'),
    answer: t('faqs.answer2'),
  },
  {
    question: t('faqs.question3'),
    answer: t('faqs.answer3'),
  },
  {
    question: t('faqs.question4'),
    answer: t('faqs.answer4'),
  },
];

export const FAQs: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anime({
            targets: titleRef.current,
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 2500,
            easing: 'easeOutExpo',
          });
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  changeLanguage('es');

  const text = {
    subtitle: t('faqs.subtitle'),
    title: t('faqs.title'),
    question1: t('faqs.question1'),
    answer1: t('faqs.answer1'),
  };

  return (
    <div className="max-w-[1400px] min-h-[70vh] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 lg:py-16 ">
      <div
        className="absolute inset-x-0 top-[calc(100%-30rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-10rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(70%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-500 to-primary-800 opacity-30 sm:left-[calc(75%+25rem)] sm:w-[52.1875rem]"
          style={{
            clipPath: 'circle(50% at 50% 50%)',
          }}
        ></div>
      </div>
      <div
        ref={titleRef}
        className="flex flex-col items-center text-center mb-2 sm:mb-4 lg:mb-8 opacity-0"
      >
        <span className="text-lg sm:text-xl md:text-2xl text-primary-500 mb-2 sm:mb-4">
          {text.subtitle}
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          {text.title}
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-center">
        <div className="w-full lg:w-1/2 ">
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className={`w-full flex justify-between items-center p-4 text-left ${
                    openIndex === index
                      ? 'bg-gradient-to-r from-primary-500/10 to-primary-500/10'
                      : ''
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span
                    className={`font-medium ${openIndex === index ? 'text-primary-500' : ''}`}
                  >
                    {text.question1}
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
                {openIndex === index && (
                  <div className="p-4 pt-0">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden">
            <img
              src={faqImage.src}
              alt="FAQ illustration"
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
