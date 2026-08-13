import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQAccordion({ items, currentLang = 'am' }) {
  const [openIndex, setOpenIndex] = useState(0);
  const isAmharic = currentLang === 'am';

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const question = isAmharic ? item.questionAm : item.questionEn;
        const answer = isAmharic ? item.answerAm : item.answerEn;

        return (
          <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button
              className="faq-question-btn"
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
            >
              <span>{question}</span>
              <ChevronDown size={20} className="faq-toggle-icon" />
            </button>
            {isOpen && (
              <div className="faq-answer">
                <p>{answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
