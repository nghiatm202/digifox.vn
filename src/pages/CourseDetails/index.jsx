import { useEffect, useRef, useState } from 'react';
import { AiOutlineLock } from 'react-icons/ai';
import { ImYoutube } from 'react-icons/im';
import { IoIosArrowForward, IoIosArrowUp } from 'react-icons/io';
import Moment from 'react-moment';
import ReactPlayer from 'react-player';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import courseApi from '../../apis/courseApi';
import { AccordionItem, Loading } from '../../components';
import { addToCart } from '../../store/modules/cartSlice';
import { chooseThisCourse, faqs, formatPrice, suitableForYou } from '../../utilities';

const CourseDetails = () => {
  const [openAccordion, setOpenAccordion] = useState('0');
  const [openCourseAccordion, setOpenCourseAccordion] = useState('0');
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);

  const contentCourseEl = useRef();

  const dispatch = useDispatch();

  const { courseId } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    console.log(course);
  }, [course]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await courseApi.get(courseId);
        setCourse(data);
      } catch (error) {
        console.log('Failed to fetch course details', error);
      }

      setLoading(false);
    })();
  }, [courseId]);

  const { name, course_topics, banner, course_instructors, description, price, course_receives, updated_at } = course;

  const toggleAccordionHandler = index => {
    if (openAccordion === index) {
      return setOpenAccordion('0');
    }

    setOpenAccordion(index);
  };

  const toggleCourseAccordionHandler = index => {
    if (openCourseAccordion === index) {
      return setOpenCourseAccordion('0');
    }

    setOpenCourseAccordion(index);
  };

  const addToCartHandler = () => {
    const action = addToCart({
      id: courseId,
      title: name,
      price: price ? price : 650000,
      image: banner,
      quantity: 1,
    });

    dispatch(action);
    navigate('/gio-hang');
  };

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <Loading />
        </div>
      ) : (
        <div className="course-details-page pb-12 md:pb-16">
          <div className="hero-image">
            <div className="max-w-7xl mx-auto px-3">
              <div className="flex flex-wrap flex-col-reverse lg:flex-row hero-wrapper py-20">
                <div className="flex flex-col hero-item text-white">
                  <h1 className="text-3xl font-semibold tracking-wide">{name}</h1>
                  <p className="mt-10 text-sm mb-14" dangerouslySetInnerHTML={{ __html: description }}></p>
                  <button
                    onClick={addToCartHandler}
                    className="transition-[background-color] duration-200 ease-linear p-5 rounded bg-[#FF5E2B] hover:bg-[#ee582b] text-white uppercase font-semibold text-sm max-w-[300px]"
                  >
                    Đăng ký ngay
                  </button>
                  <p className="mt-2 text-sm">
                    Last Updated:{' '}
                    <time className="ml-1 text-primary-color">
                      <Moment format="YYYY/MM/DD" date={updated_at} />
                    </time>
                  </p>
                </div>
                <div className="hero-item">
                  <div className="player-wrapper relative pt-[56.25%]">
                    <ReactPlayer
                      className="react-player absolute top-0 left-0"
                      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                      width="100%"
                      height="100%"
                      controls={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-3 mt-14">
            <div className="flex course-details-container flex-col-reverse lg:flex-row items-baseline">
              <div className="course-details-left flex flex-col mb-20">
                <p className="text-primary-color text-2xl font-medium mb-3">Tổng quan khoá học</p>
                <p className="text-[#161616] text-base mb-8" dangerouslySetInnerHTML={{ __html: description }}></p>

                <p className="text-primary-color text-2xl font-medium mb-3">Kỹ năng bạn sẽ học được</p>
                <div className="flex items-center flex-wrap gap-6 mb-8">
                  {course_receives.map(item => {
                    return (
                      <span key={item.id} className="py-2 px-6 border border-[#e1ebf0] rounded text-sm text-[#333]">
                        {item.content}
                      </span>
                    );
                  })}
                </div>

                <p className="text-primary-color text-2xl font-medium mb-3">Chương trình</p>
                <ul className="w-full flex flex-col gap-y-3 mb-8">
                  {course_topics.map((item, index) => {
                    return (
                      <li key={index} className="w-full">
                        <button
                          onClick={() => toggleCourseAccordionHandler(index)}
                          className="flex w-full items-center justify-between py-4 pl-5 pr-3 bg-[#fcfcfd] border border-[#E0E2EA] rounded-t"
                        >
                          <span className="text-xl text-[#41454f] font-medium text-left">{item.title}</span>
                          <span>
                            {openCourseAccordion === index ? (
                              <IoIosArrowUp color="#ff5f2b" size={20} />
                            ) : (
                              <IoIosArrowForward color="#ff5f2b" size={20} />
                            )}
                          </span>
                        </button>
                        <div
                          ref={contentCourseEl}
                          className="overflow-hidden h-0 transition-[height] duration-200 ease-linear"
                          style={
                            openCourseAccordion === index
                              ? { height: contentCourseEl?.current?.scrollHeight }
                              : { height: '0px' }
                          }
                        >
                          <div className="flex items-center justify-between last:border-b border-x border-[#E0E2EA] text-base text-[#161616] py-3 pl-5 pr-4 bg-white hover:bg-[#eff1f6] transition-[background-color] duration-200 ease-linear">
                            <div className="flex items-center gap-2">
                              <span>
                                <ImYoutube color="#939aa3" size={18} />
                              </span>
                              <p>Bài 1: Giới thiệu về khóa học</p>
                            </div>

                            <div className="flex items-center gap-5">
                              <time className="text-[#757c8e] font-medium">01:11</time>
                              <span>
                                <AiOutlineLock size={18} color="#939aa3" />
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between last:border-b border-x border-[#E0E2EA] text-base text-[#161616] py-3 pl-5 pr-4 bg-white hover:bg-[#eff1f6] transition-[background-color] duration-200 ease-linear">
                            <div className="flex items-center gap-2">
                              <span>
                                <ImYoutube color="#939aa3" size={18} />
                              </span>
                              <p>Bài 1: Giới thiệu về khóa học</p>
                            </div>

                            <div className="flex items-center gap-5">
                              <time className="text-[#757c8e] font-medium">01:11</time>
                              <span>
                                <AiOutlineLock size={18} color="#939aa3" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <p className="text-2xl text-[#222222] font-semibold mb-3">Thông tin khoá học</p>
                <p className="text-[#161616] text-base mb-7" dangerouslySetInnerHTML={{ __html: description }}></p>

                <p className="text-lg font-bold text-[#161616] mb-3">Ai sẽ là người phù hợp với Khoá học này?</p>
                <ul className="text-base text-[#161616] flex flex-col gap-y-2.5 mb-7">
                  {suitableForYou.map(item => {
                    return (
                      <li key={item.id} className="flex items-center gap-x-3">
                        <span className="w-1.5 h-1.5 block rounded-full bg-black"></span>
                        <p>{item.content}</p>
                      </li>
                    );
                  })}
                </ul>

                <p className="text-lg font-bold text-[#161616] mb-3">Tại sao bạn nên học khóa học này?</p>
                <ul className="text-base text-[#161616] flex flex-col gap-y-2.5 mb-7">
                  {chooseThisCourse.map(item => {
                    return (
                      <li key={item.id} className="flex items-center gap-x-3">
                        <span className="w-1.5 h-1.5 block rounded-full shrink-0 bg-black"></span>
                        <p>{item.content}</p>
                      </li>
                    );
                  })}
                </ul>

                <p className="text-lg font-bold text-[#161616] mb-3">Bạn sẽ nhận được gì sau Khoá học này?</p>
                <ul className="text-base text-[#161616] flex flex-col gap-y-2.5 mb-8">
                  {course_receives.map(item => {
                    return (
                      <li key={item.id} className="flex items-center gap-x-3">
                        <span className="w-1.5 h-1.5 block rounded-full bg-black"></span>
                        <p>{item.content}</p>
                      </li>
                    );
                  })}
                </ul>

                <p className="text-primary-color text-2xl font-medium mb-[-10px]">Những câu hỏi thường gặp</p>
                <ul className="mb-8">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      onToggle={() => toggleAccordionHandler(index)}
                      active={openAccordion === index}
                      key={index}
                      faq={faq}
                    />
                  ))}
                </ul>

                <p className="text-primary-color text-2xl font-medium mb-3">Thông tin giảng viên</p>
                {course_instructors.map(instructor => {
                  return (
                    <div key={instructor.id} className="flex items-center gap-2">
                      <div className="w-10 h-10 overflow-hidden rounded-full">
                        <img
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
                          alt={instructor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base text-[#404145] font-bold">{instructor.name}</span>
                        <span className="text-base text-[#161616]">{instructor.job}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="course-details-right flex flex-col shadow-course-details-right p-5 bg-white">
                <p className="text-2xl text-primary-color font-semibold">{name}</p>
                <p className="text-[#212327] text-2xl font-semibold mt-1">{formatPrice(price ? price : 650000)}</p>
                <button
                  onClick={addToCartHandler}
                  className="mt-10 transition-[background-color] duration-200 ease-linear p-3 rounded bg-[#FF5E2B] hover:bg-[#ee582b] text-white uppercase font-semibold text-sm"
                >
                  Đăng ký ngay
                </button>

                <p className="text-lg text-[#404145] font-semibold pt-2 border-t mt-5 border-border-color mb-3">
                  Đăng ký Membership
                </p>
                <p className="text-base">
                  Đăng ký trở thành thành viên để sở hữu nhiều tiện ích và ưu đãi cho các khóa học.
                </p>
                <button
                  onClick={() => navigate('/membership')}
                  className="mt-4 transition-[background-color] duration-200 ease-linear p-3 rounded border border-border-color bg-white text-[#161616] uppercase font-semibold text-sm"
                >
                  Tìm hiểu ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseDetails;
