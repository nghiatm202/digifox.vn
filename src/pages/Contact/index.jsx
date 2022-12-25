import { useState } from 'react';
import { AccordionItem } from '../../components';

const faqs = [
  {
    question: 'Khóa học có thời hạn sử dụng không?',
    answer:
      'Thời gian học phụ thuộc vào hình thức bạn đã mua khóa học là mua trực tiếp hay mua thông qua chương trình Membership. Nếu bạn mua trực tiếp khóa học thì thời gian sẽ là trọn đời. Nếu bạn mua theo Membership thì thời gian được tính theo gói Membership tương ứng. Gói Membership sẽ có những lợi thế riêng với việc truy cập không giới hạn nhiều tài nguyên trên Digifox.',
  },
  {
    question: 'Tôi có thể nhận ưu đãi không?',
    answer:
      'Chương trình ưu đãi được áp dụng theo chương trình của Digifox. Tùy thuộc vào từng chương trình và đối tượng khách hàng sẽ có ưu đãi khác nhau.',
  },
  {
    question: 'Tôi có thể nhận ưu đãi không?',
    answer:
      'Chương trình ưu đãi được áp dụng theo chương trình của Digifox. Tùy thuộc vào từng chương trình và đối tượng khách hàng sẽ có ưu đãi khác nhau.',
  },
  {
    question: 'Tôi có thể nhận ưu đãi không?',
    answer:
      'Chương trình ưu đãi được áp dụng theo chương trình của Digifox. Tùy thuộc vào từng chương trình và đối tượng khách hàng sẽ có ưu đãi khác nhau.',
  },
];

const Contact = () => {
  const [openAccordion, setOpenAccordion] = useState('0');

  const toggleAccordionHandler = (index) => {
    if (openAccordion === index) {
      return setOpenAccordion('0');
    }

    setOpenAccordion(index);
  };

  return (
    <div className="contact-page py-12 md:py-16">
      <div className="flex flex-col gap-y-10 md:gap-y-0 md:flex-row">
        <div className="flex flex-1 flex-col md:pr-8 md:border-r md:border-border-color">
          <h4 className="text-xl font-bold uppercase pb-6 border-b-2 border-border-color">Những câu hỏi thường gặp</h4>

          <ul className="accordion">
            {faqs.map((faq, index) => (
              <AccordionItem
                onToggle={() => toggleAccordionHandler(index)}
                active={openAccordion === index}
                key={index}
                faq={faq}
              />
            ))}
          </ul>
        </div>

        <div className="flex flex-1 flex-col md:pl-8">
          <p className="text-sm text-gray-400 mb-3">Vui lòng để lại thông tin để nhận tư vấn!</p>
          <h3 className="uppercase text-title-color text-xl pb-6 font-bold">
            Hãy liên hệ digifox nếu có bất cứ câu hỏi nào
          </h3>

          <p className="mb-7">
            <label htmlFor="contact-name" className="text-title-color pb-1 block">
              Họ và tên
            </label>
            <input
              type="text"
              id="contact-name"
              name="your-name"
              size="40"
              className="w-full border border-border-color rounded bg-white py-2 px-4 outline-none"
              aria-required={true}
              aria-invalid={false}
            />
          </p>

          <p className="mb-7">
            <label htmlFor="contact-email" className="text-title-color pb-1 block">
              Email
            </label>
            <input
              type="email"
              id="contact-email"
              name="your-email"
              size="40"
              className="w-full border border-border-color rounded bg-white py-2 px-4 outline-none"
              aria-required={true}
              aria-invalid={false}
            />
          </p>

          <p className="mb-7">
            <label htmlFor="contact-subject" className="text-title-color pb-1 block">
              Chủ đề
            </label>
            <input
              type="text"
              id="contact-subject"
              name="your-subject"
              size="40"
              className="w-full border border-border-color rounded bg-white py-2 px-4 outline-none"
              aria-required={true}
              aria-invalid={false}
            />
          </p>

          <p className="mb-7">
            <label htmlFor="contact-message" className="text-title-color pb-1 block">
              Nội dung (không bắt buộc)
            </label>
            <textarea
              id="contact-message"
              name="your-message"
              className="w-full border border-border-color rounded bg-white py-2 px-4 outline-none"
              aria-invalid={false}
            />
          </p>

          <button className="text-sm inline-flex bg-[#F3F3F3] w-fit rounded text-[#3E3E3E] py-3 px-5 uppercase hover:bg-[#dddddd] transition-[background-color] duration-200 ease-linear">
            Gửi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
