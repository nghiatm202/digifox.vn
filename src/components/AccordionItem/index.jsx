import { useRef } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const AccordionItem = ({ faq, active, onToggle }) => {
  const { question, answer } = faq;

  const contentEl = useRef();

  return (
    <li className={`accordion_item ${active ? 'active' : ''} cursor-pointer group py-5 border-b border-border-color`}>
      <button className="w-full flex items-center justify-between" onClick={onToggle}>
        <span className="text-base text-title-color font-semibold transition-[color] duration-200 ease-linear group-hover:text-primary-color">
          {question}
        </span>
        <span>{active ? <IoIosArrowUp color="#bbb" /> : <IoIosArrowDown color="#bbb" />}</span>
      </button>
      <div
        ref={contentEl}
        className="overflow-hidden h-0 transition-[height] duration-200 ease-linear"
        style={active ? { height: contentEl.current.scrollHeight } : { height: '0px' }}
      >
        <p className="pt-3">{answer}</p>
      </div>
    </li>
  );
};

export default AccordionItem;
