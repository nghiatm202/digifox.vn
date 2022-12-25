import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { HiOutlineBookmark, HiOutlineShare } from 'react-icons/hi';
import { GoCommentDiscussion } from 'react-icons/go';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Star } from '../../components';
import { Link } from 'react-router-dom';

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

const productList = [
  {
    id: 1,
    image: 'https://digifox.vn/wp-content/uploads/2022/06/dofollow-nofollow-1024x534-1-e1656271062739.jpg',
    title: '99 mẫu Powerpoint bản quyền chuyên về Marketing',
    tag: 'Report',
    rating: 5,
    oldPrice: '2.599.999',
    newPrice: '999.999',
  },
  {
    id: 2,
    image: 'https://digifox.vn/wp-content/uploads/2022/06/dofollow-nofollow-1024x534-1-e1656271062739.jpg',
    title: '99 mẫu Powerpoint bản quyền chuyên về Marketing',
    tag: 'Report',
    rating: 5,
    oldPrice: '2.599.999',
    newPrice: '999.999',
  },
  {
    id: 3,
    image: 'https://digifox.vn/wp-content/uploads/2022/06/dofollow-nofollow-1024x534-1-e1656271062739.jpg',
    title: '99 mẫu Powerpoint bản quyền chuyên về Marketing',
    tag: 'Report',
    rating: 5,
    oldPrice: '2.599.999',
    newPrice: '999.999',
  },
  {
    id: 4,
    image: 'https://digifox.vn/wp-content/uploads/2022/06/dofollow-nofollow-1024x534-1-e1656271062739.jpg',
    title: '99 mẫu Powerpoint bản quyền chuyên về Marketing',
    tag: 'Report',
    rating: 5,
    oldPrice: '2.599.999',
    newPrice: '999.999',
  },
  {
    id: 5,
    image: 'https://digifox.vn/wp-content/uploads/2022/06/dofollow-nofollow-1024x534-1-e1656271062739.jpg',
    title: '99 mẫu Powerpoint bản quyền chuyên về Marketing',
    tag: 'Report',
    rating: 5,
    oldPrice: '2.599.999',
    newPrice: '999.999',
  },
  {
    id: 6,
    image: 'https://digifox.vn/wp-content/uploads/2022/06/dofollow-nofollow-1024x534-1-e1656271062739.jpg',
    title: '99 mẫu Powerpoint bản quyền chuyên về Marketing',
    tag: 'Report',
    rating: 5,
    oldPrice: '2.599.999',
    newPrice: '999.999',
  },
  {
    id: 7,
    image: 'https://digifox.vn/wp-content/uploads/2022/06/dofollow-nofollow-1024x534-1-e1656271062739.jpg',
    title: '99 mẫu Powerpoint bản quyền chuyên về Marketing',
    tag: 'Report',
    rating: 5,
    oldPrice: '2.599.999',
    newPrice: '999.999',
  },
  {
    id: 8,
    image: 'https://digifox.vn/wp-content/uploads/2022/06/dofollow-nofollow-1024x534-1-e1656271062739.jpg',
    title: '99 mẫu Powerpoint bản quyền chuyên về Marketing',
    tag: 'Report',
    rating: 5,
    oldPrice: '2.599.999',
    newPrice: '999.999',
  },
];

const courseList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }];

const feedbackList = [
  {
    id: 1,
    name: 'Minh Nghĩa',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
    position: 'Marketing Leader',
    stars: 5,
    comment: 'Cảm ơn Digifox rất nhiều?',
  },
  {
    id: 2,
    name: 'Minh Nghĩa',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
    position: 'Marketing Leader',
    stars: 5,
    comment:
      'Kiến thức và kinh nghiệm của giảng viên thực sự Kiến thức và kinh nghiệm của giảng viên thực sự làm tôi bất ngờ. Vừa được áp dụng vào thực tế, vừa nâng cao được kỹ năng mà còn phát triển tư duy đúng đắn. Cảm ơn Digifox rất nhiều?',
  },
  {
    id: 3,
    name: 'Minh Nghĩa',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
    position: 'Marketing Leader',
    stars: 5,
    comment:
      'Kiến thức và kinh nghiệm của giảng viên thực sự làm tôi bất ngờ. Vừa được áp dụng vào thực tế, vừa nâng cao được kỹ năng mà còn phát triển tư duy đúng đắn. Cảm ơn Digifox rất nhiều?',
  },
  {
    id: 4,
    name: 'Minh Nghĩa',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
    position: 'Marketing Leader',
    stars: 5,
    comment:
      'Kiến thức và kinh nghiệm của giảng viên thực sự làm tôi bất ngờ. Vừa được áp dụng vào thực tế, vừa nâng cao được kỹ năng mà còn phát triển tư duy đúng đắn. Cảm ơn Digifox rất nhiều?',
  },
  {
    id: 5,
    name: 'Minh Nghĩa',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
    position: 'Marketing Leader',
    stars: 5,
    comment:
      'Kiến thức và kinh nghiệm của giảng viên thực sự làm tôi bất ngờ. Vừa được áp dụng vào thực tế, vừa nâng cao được kỹ năng mà còn phát triển tư duy đúng đắn. Cảm ơn Digifox rất nhiều?',
  },
];

const blogList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }];

const Home = () => {
  return (
    <div className="home-page py-12 md:py-16">
      <div className="about-box-list flex flex-wrap">
        {aboutBoxList.map((aboutBox) => {
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
        {courseList.map((course) => {
          return (
            <div
              key={course.id}
              className="course-item relative shadow-course-item flex flex-col overflow-hidden rounded bg-white"
            >
              <img
                src="https://digifox.vn/wp-content/uploads/2019/05/Khoa-hoc-Tracking-Do-luong-Bao-cao-Marketing-768x432.jpg"
                alt=""
                className="h-[156px] w-full object-cover"
              />

              <div className="flex flex-col flex-1">
                <div className="pt-5 px-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Star stars={4.5} />
                    <span className="text-base text-title-color font-medium">4.25</span>
                    <span className="text-base text-[#757c83]">(4)</span>
                  </div>
                  <p className="text-title-color text-base font-semibold mb-4 line-clamp-2">
                    Khoá học Tracking, đo lường và báo cáo trong Digital Marketing
                  </p>
                </div>

                <div className="mt-auto text-base px-5 flex gap-x-2 py-2 border-t border-border-color">
                  <p className="text-gray-300 line-through">
                    2.599.999
                    <span>đ</span>
                  </p>
                  <p className="text-primary-color font-semibold">
                    999.999
                    <span>đ</span>
                  </p>
                </div>
              </div>

              <div className="absolute top-4 right-4">
                <div className="w-8 h-8 rounded-full bg-[#ff5e2b1a] hover:text-white hover:bg-primary-hover-color transition-all duration-200 ease-linear text-primary-color flex items-center justify-center">
                  <HiOutlineBookmark size={16} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16">
        <h3 className="text-2xl text-[#161616] font-bold mt-12 mb-2">
          Thư viện <span className="text-primary-color">Template</span>
        </h3>
        <div className="flex flex-col gap-y-2 sm:flex-row justify-between sm:items-center mb-6">
          <p className="text-[#161616] text-base">Mẫu template quan trọng áp dụng thực tế trong các doanh nghiệp</p>
          <Link
            to="/tat-ca-san-pham"
            className="text-sm uppercase w-fit text-[#ff5b2e] border-b-2 font-medium border-[#ff5b2e]"
          >
            Xem tất cả
          </Link>
        </div>
      </div>

      <div className="product-list flex flex-wrap">
        {productList.map((product) => {
          return (
            <div
              key={product.id}
              className="product-item group relative flex flex-col overflow-hidden rounded bg-white shadow-product-item"
            >
              <img src={product.image} alt={product.title} className="h-[156px] w-full object-cover" />

              <div className="flex flex-col flex-1 gap-y-2 py-4 px-5">
                <p className="text-base text-[#161616] font-bold line-clamp-2">{product.title}</p>

                <div className="flex flex-col mt-auto shrink-0 gap-y-2">
                  <span className="text-base text-gray-400 hover:text-gray-700">{product.tag}</span>
                  <Star stars={4.5} />
                  <div className="flex gap-x-2 items-center text-base">
                    <p className="text-gray-300 line-through">
                      {product.oldPrice}
                      <span>đ</span>
                    </p>
                    <p className="text-primary-color font-semibold">
                      {product.newPrice}
                      <span>đ</span>
                    </p>
                  </div>
                </div>
              </div>

              <p className="absolute top-4 left-0 bg-primary-color py-1 px-2 text-white text-sm">
                <span>-</span>62%
              </p>

              <div className="shadow-wd-button flex flex-col absolute top-4 right-0 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:right-2 transition-all duration-200 ease-linear">
                <div className="p-2 cursor-pointer hover:text-gray-500 transition-[color] duration-200 ease-linear">
                  <AiOutlineShoppingCart size={16} />
                </div>
                <div className="p-2 cursor-pointer hover:text-gray-500 transition-[color] duration-200 ease-linear">
                  <AiOutlineSearch size={16} />
                </div>
                <div className="p-2 cursor-pointer hover:text-gray-500 transition-[color] duration-200 ease-linear">
                  <AiOutlineHeart size={16} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16">
        <h3 className="text-2xl text-[#161616] font-bold mt-12 mb-2">
          <span className="text-primary-color">Cảm nhận</span> về Digifox
        </h3>

        <p className="text-[#161616] text-base mb-6">Những chia sẻ thật lòng từ các bạn đã trải nghiệm Digifox</p>
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
        {feedbackList.map((feedback) => {
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

      <div className="mt-16">
        <h3 className="text-2xl text-[#161616] font-bold mt-12 mb-2">
          <span className="text-primary-color">Blog</span> Digifox
        </h3>
        <div className="flex flex-col gap-y-2 sm:flex-row justify-between sm:items-center mb-6">
          <p className="text-[#161616] text-base">Những chia sẻ về kiến thức và thông tin cập nhật của Digifox</p>
          <Link to="/blog" className="w-fit text-sm uppercase text-[#ff5b2e] border-b-2 font-medium border-[#ff5b2e]">
            Xem tất cả
          </Link>
        </div>
      </div>

      <Swiper
        breakpoints={{
          550: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1281: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={20}
        slidesPerView={1}
        grabCursor={true}
        style={{ width: '100%', height: '100%' }}
      >
        {blogList.map((blog) => {
          return (
            <SwiperSlide key={blog.id}>
              <div className="flex flex-col overflow-hidden rounded bg-white h-full">
                <div className="relative">
                  <img
                    src="https://digifox.vn/wp-content/uploads/2022/06/cte-1-e1654858163860.png"
                    alt=""
                    className="w-full object-cover h-[200px]"
                  />

                  <p className="py-1 px-2 text-center absolute uppercase bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[-50%] text-xs bg-primary-color text-white">
                    Content Marketing
                  </p>

                  <div className="absolute flex flex-col top-2 left-2 bg-white items-center justify-center min-w-[53px]">
                    <span className="pb-1 pt-[6px] text-gray-800 text-2xl">11</span>
                    <span className="uppercase pb-2 pt-[2px] text-gray-800 text-xs font-semibold">th6</span>
                  </div>
                </div>

                <div className="flex flex-col gap-y-2.5 h-full p-2.5 items-center text-center mt-2">
                  <p className="text-[#161616] text-xl font-bold line-clamp-2">
                    6 cách quản lý nhóm Facebook hiệu quả mà bạn nên biết
                  </p>
                  <div className="mt-auto flex flex-col gap-y-2.5 shrink-0 items-center">
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 overflow-hidden rounded-full">
                        <img
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
                          alt="avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-gray-300 text-sm">Eric Tran</span>
                      <div className="ml-2">
                        <GoCommentDiscussion color="#bbb" size={20} />
                      </div>
                      <HiOutlineShare color="#bbb" size={20} />
                    </div>

                    <p className="text-[#161616] mt-auto shrink-0 text-base line-clamp-3">
                      Bạn là người mù công nghệ và gặp khó khăn trong việc tạo tài khoản quảng cáo facebook? Bạn tạo tài
                      khoản không thuộc Digifox
                    </p>
                  </div>
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
