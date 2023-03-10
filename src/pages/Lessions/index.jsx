import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import courseApi from '../../apis/courseApi';
import { AiOutlineEye, AiOutlineLock } from 'react-icons/ai';
import { ImYoutube } from 'react-icons/im';
import { IoIosArrowForward, IoIosArrowUp } from 'react-icons/io';
import ReactPlayer from 'react-player';
import { Loading } from '../../components';
import { SlArrowLeft } from 'react-icons/sl';
import { MdOutlineClose } from 'react-icons/md';
import { BiCheck } from 'react-icons/bi';

const Lessions = () => {
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);
  const [openCourseAccordion, setOpenCourseAccordion] = useState('0');
  const [currentLession, setCurrentLession] = useState();

  const { courseId } = useParams();
  let navigate = useNavigate();

  const contentCourseEl = useRef();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await courseApi.get(courseId);
        setCourse(data);

        if (data.course_topics.length > 0) {
          setCurrentLession(data.course_topics[0].course_lessions[0]);
        }
      } catch (error) {
        console.log('Failed to fetch course details', error);
      }

      setLoading(false);
    })();
  }, [courseId]);

  useEffect(() => {
    console.log(course);
  }, [course]);

  const { course_topics, name } = course;

  const toggleCourseAccordionHandler = index => {
    if (openCourseAccordion === index) {
      return setOpenCourseAccordion('0');
    }

    setOpenCourseAccordion(index);
  };

  return (
    <div className="lessions-page">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap lessions-container">
          <div className="flex flex-col lessions-left">
            <p className="py-4 border-b border-r border-[#E0E2EA] px-4 bg-white text-[#41454F] font-medium text-base">
              Nội dung khóa học
            </p>

            {/* trái */}
            <ul className="w-full flex flex-col mb-8">
              {course_topics?.map((item, index) => {
                return (
                  <li key={index} className="w-full">
                    <button
                      onClick={() => toggleCourseAccordionHandler(index)}
                      className="flex w-full items-center justify-between gap-x-2 py-4 pl-5 pr-3 bg-[#fcfcfd] border-b border-r border-[#E0E2EA]"
                    >
                      <span className="text-base text-[#404145] font-medium text-left">{item.title}</span>
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
                      {item.course_lessions.map(lession => {
                        return lession.video ? (
                          <div
                            onClick={() => setCurrentLession(lession.video)}
                            key={lession.course_topic_id}
                            className="flex items-center justify-between last:border-b border-x border-[#E0E2EA] text-base text-[#161616] py-3 pl-5 pr-4 bg-white hover:bg-[#eff1f6] transition-[background-color] duration-200 ease-linear cursor-pointer"
                          >
                            <div className="flex items-center gap-2">
                              <span>
                                <ImYoutube color="#939aa3" size={18} />
                              </span>
                              <p>{lession.title}</p>
                            </div>

                            <div className="flex items-center gap-5">
                              <span>
                                <AiOutlineEye size={18} color="#939aa3" />
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div
                            key={lession.course_topic_id}
                            className="flex items-center justify-between last:border-b border-x border-[#E0E2EA] text-base text-[#161616] py-3 pl-5 pr-4 bg-white hover:bg-[#eff1f6] transition-[background-color] duration-200 ease-linear"
                          >
                            <div className="flex items-center gap-2">
                              <span>
                                <ImYoutube color="#939aa3" size={18} />
                              </span>
                              <p>{lession.title}</p>
                            </div>

                            <div className="flex items-center gap-5">
                              <span>
                                <AiOutlineLock size={18} color="#939aa3" />
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lessions-right flex flex-col">
            <div className="flex items-center justify-between p-3 bg-primary-color">
              <div className="flex items-center gap-x-4">
                <div
                  onClick={() => navigate(`/khoa-hoc/${courseId}`)}
                  className="w-8 h-8 rounded-full bg-[#00000033] cursor-pointer transition-all duration-200 ease-linear hover:bg-white hover:text-primary-color text-white flex items-center justify-center"
                >
                  <SlArrowLeft size={12} />
                </div>
                <span className="text-base text-white">{`Khóa học ${name}`}</span>
              </div>
              <div
                onClick={() => navigate(`/khoa-hoc/${courseId}`)}
                className="w-8 h-8 rounded-full cursor-pointer transition-all hover:text-primary-color text-white duration-200 ease-linear hover:bg-white flex items-center justify-center"
              >
                <MdOutlineClose size={16} />
              </div>
            </div>

            {/* phải */}
            {currentLession?.video ? (
              <div className="player-wrapper relative pt-[56.25%]">
                <ReactPlayer
                  className="react-player absolute top-0 left-0"
                  url={currentLession}
                  width="100%"
                  height="100%"
                  controls={true}
                />
              </div>
            ) : (
              <p className="bg-[#ff5e2b] w-full flex items-center text-white gap-x-4 py-4 px-2">
                <BiCheck size={32} />
                <span className="text-base">Bạn chưa đăng ký khóa học nên chưa xem được. Đăng ký và học ngay nhé!</span>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Lessions;
