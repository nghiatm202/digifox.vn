import { useEffect, useMemo, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlinePlayLesson } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import courseApi from '../../apis/courseApi';
import { Loading, Pagination, Star } from '../../components';
import { addToCart } from '../../store/modules/cartSlice';
import { formatPrice } from '../../utilities';

const image2 = require('../../assets/images/image-2.jpg');

let PageSize = 12;

const AllCourses = () => {
  const [loading, setLoading] = useState(true);
  const [courseList, setCourseList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const currentCourseData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    return courseList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, courseList]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await courseApi.getAll();
        setCourseList(data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }

      setLoading(false);
    })();
  }, []);

  return (
    <div className="all-courses-page py-12 md:py-16 h-full">
      {loading ? (
        <div className="flex items-center justify-center m-auto h-full">
          <Loading />
        </div>
      ) : (
        <>
          <div className="course-list flex flex-wrap">
            {currentCourseData.map(course => {
              return (
                <div
                  key={course.id}
                  className="course-item border cursor-pointer border-border-color flex flex-col overflow-hidden rounded"
                >
                  <img
                    src={course.banner}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = image2;
                    }}
                    alt="course"
                    className="h-[226px] w-full object-cover"
                    onClick={() => navigate(`/khoa-hoc/${course.id}`)}
                  />

                  <div className="flex flex-col flex-1 gap-y-5 p-5">
                    <Star stars={5} />

                    <p
                      onClick={() => navigate(`/khoa-hoc/${course.id}`)}
                      className="line-clamp-2 text-title-color text-lg font-bold hover:text-primary-color transition-[color] duration-200 ease-linear"
                    >
                      {course.name}
                    </p>

                    <div className="flex flex-col gap-y-5 mt-auto">
                      <div className="flex items-center gap-x-2">
                        <MdOutlinePlayLesson size={20} className="text-primary-color" />
                        <span className="text-base">{course.lessons}</span>
                        <span className="text-base">bài học</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto flex-col gap-y-2 lg:flex-row px-5 py-3 flex items-center justify-between border-t border-border-color">
                    <div className="flex gap-x-2 items-center text-base">
                      <p className="text-primary-color font-semibold">
                        {formatPrice(course.price ? course.price : 650000)}
                      </p>
                    </div>

                    <button className="flex items-center gap-1 text-base border transition-[background-color] duration-200 ease-linear hover:text-white hover:bg-primary-color text-primary-color border-primary-color bg-white rounded py-1.5 px-3">
                      <AiOutlineShoppingCart />
                      <span
                        onClick={() => {
                          const action = addToCart({
                            id: course.id,
                            title: course.name,
                            price: course.price ? course.price : 650000,
                            image: course.banner,
                            quantity: 1,
                          });

                          dispatch(action);
                          toast.success(`Khóa học ${course.name} đã được thêm vào giỏ hàng.`);
                        }}
                      >
                        Thêm vào giỏ hàng
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <Pagination
            className="pagination-bar mt-8 flex items-center justify-center"
            currentPage={currentPage}
            totalCount={courseList.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        </>
      )}
    </div>
  );
};

export default AllCourses;
