import { useEffect, useState } from 'react';
import { HiOutlineBookmark } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import courseApi from '../../apis/courseApi';
import { useNavigate } from 'react-router';
import { Loading, Star } from '../../components';
import { formatPrice } from '../../utilities';

const aboutBoxList = [
  {
    title: 'Cộng đồng uy tín',
    description: 'Hơn 5000+ thành viên',
  },
  {
    title: 'Học tập 100% online',
    description: 'Học mọi lúc, học mọi nơi',
  },
  {
    title: 'Làm chủ sự nghiệp',
    description: 'Tự tin với chứng chỉ uy tín',
  },
  {
    title: 'Đa dạng tài nguyên',
    description: 'Kho tài nguyên chất lượng',
  },
];

const feedbackList = [
  {
    id: 1,
    name: 'Minh Nghĩa',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
    position: 'Marketing Leader',
    stars: 5,
    comment:
      'DCUni thực sự đã giúp tôi rất nhiều, từ kiến thức cơ bản đến chuyên sâu, hiện nay tôi đang quản lý phòng rất hiệu quả cũng nhờ những kiến thức từ các giảng viên ở đây. Cảm ơn DCUni rất nhiều!',
  },
  {
    id: 2,
    name: 'Minh Nghĩa',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
    position: 'Marketing Leader',
    stars: 5,
    comment:
      'Các tài nguyên trên DCUni đúng thực sự quá chất lượng, mình áp dụng và có hiệu quả ngay, sếp mình cũng khen mình đợt này làm việc rất chuyên nghiệp. Cảm ơn DCUni đã giúp mình!',
  },
  {
    id: 3,
    name: 'Minh Nghĩa',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
    position: 'Marketing Leader',
    stars: 5,
    comment:
      'Các kiến thức mà DCUni mang lại cho tôi rất hữu ích, áp dụng trực tiếp vào việc quản lý hiệu quả công việc team Marketing. Công việc hiệu quả rõ rệt. Cảm ơn các anh chị giảng viên tại DCUni nhé!',
  },
  {
    id: 4,
    name: 'Minh Nghĩa',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
    position: 'Marketing Leader',
    stars: 5,
    comment:
      'Vừa học vừa có tài liệu mẫu, còn được support rất tốt giúp mình tiết kiệm nhiều thời gian mày mò. DCUni đúng là lựa chọn tuyệt với cho các Marketer. Nên trải nghiệm thực tế các bạn nhé!',
  },
  {
    id: 5,
    name: 'Minh Nghĩa',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
    position: 'Marketing Leader',
    stars: 5,
    comment:
      'Kiến thức và kinh nghiệm của giảng viên thực sự làm tôi bất ngờ. Vừa được áp dụng vào thực tế, vừa nâng cao được kỹ năng mà còn phát triển tư duy đúng đắn. Cảm ơn DCUni rất nhiều!',
  },
];

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [courseList, setCourseList] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    console.log('courseList', courseList);
  }, [courseList]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await courseApi.getAll({ perPage: 8 });
        setCourseList(data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }

      setLoading(false);
    })();
  }, []);

  const redirectToDetailPageHandler = id => {
    navigate(`/khoa-hoc/${id}`);
  };

  return (
    <div className="home-page py-12 md:py-16">
      <div className="about-box-list flex flex-wrap">
        {aboutBoxList.map(aboutBox => {
          return (
            <div
              key={aboutBox.title}
              className="about-box-item py-8 rounded hover:bg-primary-color hover:text-white transition-all duration-200 ease-linear bg-white text-title-color flex flex-col gap-y-3 items-center"
            >
              <p className="text-lg font-medium">{aboutBox.title}</p>
              <p className="text-base">{aboutBox.description}</p>
            </div>
          );
        })}
      </div>
      <h2 className="text-2xl text-[#161616] font-bold mt-12 mb-2">
        Khám phá <span className="text-primary-color">Khóa học</span>
      </h2>

      <div className="flex flex-col gap-y-2 sm:flex-row justify-between sm:items-center mb-6">
        <p className="text-[#161616] text-base">Khóa học Digital Marketing áp dụng thực tế vào công việc</p>
        <Link
          to="/tat-ca-khoa-hoc"
          className="text-sm w-fit uppercase text-[#ff5b2e] border-b-2 font-medium border-[#ff5b2e]"
        >
          Xem tất cả
        </Link>
      </div>

      <div className="course-list flex flex-wrap">
        {loading ? (
          <Loading />
        ) : (
          courseList.map(({ id, name, price, banner }) => {
            return (
              <div
                key={id}
                onClick={() => redirectToDetailPageHandler(id)}
                className="course-item relative cursor-pointer shadow-course-item flex flex-col overflow-hidden rounded bg-white"
              >
                <img
                  src={banner}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src =
                      'https://digifox.vn/wp-content/uploads/2019/05/Khoa-hoc-Tracking-Do-luong-Bao-cao-Marketing-768x432.jpg';
                  }}
                  alt={name}
                  className="h-[156px] w-full object-cover"
                />

                <div className="flex flex-col flex-1">
                  <div className="pt-5 px-5">
                    <div className="flex items-center gap-3 mb-3">
                      <Star stars={5} />
                      <span className="text-base text-title-color font-medium">4.25</span>
                      <span className="text-base text-[#757c83]">(4)</span>
                    </div>
                    <p className="text-title-color transition-[color] duration-200 ease-linear text-base font-semibold mb-4 line-clamp-2 hover:text-primary-color">
                      {name}
                    </p>
                  </div>

                  <div className="mt-auto text-base px-5 flex gap-x-2 py-2 border-t border-border-color">
                    <p className="text-primary-color font-semibold">{formatPrice(price ? price : 650000)}</p>
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 rounded-full bg-[#ff5e2b1a] hover:text-white hover:bg-primary-hover-color transition-all duration-200 ease-linear text-primary-color flex items-center justify-center">
                    <HiOutlineBookmark size={16} />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="mt-16">
        <h3 className="text-2xl text-[#161616] font-bold mt-12 mb-2">
          <span className="text-primary-color">Cảm nhận</span> về DCUni
        </h3>

        <p className="text-[#161616] text-base mb-6">Những chia sẻ thật lòng từ các bạn đã trải nghiệm DCUni</p>
      </div>

      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={20}
        slidesPerView={1}
        grabCursor={true}
        style={{ width: '100%', height: '100%' }}
      >
        {feedbackList.map(feedback => {
          return (
            <SwiperSlide key={feedback.id}>
              <div className="flex flex-col h-full overflow-hidden rounded">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 overflow-hidden rounded-full">
                    <img src={feedback.avatar} alt={feedback.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-xl text-gray-900 font-medium">{feedback.name}</p>
                    <span className="text-sm text-black">{feedback.position}</span>
                    <div className="mt-2.5">
                      <Star stars={feedback.stars} />
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#ededed] mt-6 flex-1 feedback-content">
                  <p className="text-sm text-gray-700 line-clamp-5">{feedback.comment}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Home;
