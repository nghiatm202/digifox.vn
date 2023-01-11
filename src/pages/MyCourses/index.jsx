import { useEffect, useMemo, useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import { MdOutlinePlayLesson } from 'react-icons/md';
import { TbClick } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import userApi from '../../apis/userApi';
import { Loading, Pagination, Star } from '../../components';
import { formatPrice } from '../../utilities';

const image2 = require('../../assets/images/image-2.jpg');

let PageSize = 12;

const MyCourses = () => {
  const [loading, setLoading] = useState(true);
  const [courseList, setCourseList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  let navigate = useNavigate();

  const currentCourseData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    return courseList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, courseList]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await userApi.purchasedCourses();
        setCourseList(data);
      } catch (error) {
        console.log('Failed to fetch course list: ', error);
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
            {currentCourseData.length ? (
              currentCourseData.map(course => {
                return (
                  <div
                    onClick={() => navigate(`/bai-hoc/${course.id}`)}
                    key={course.id}
                    className="course-item border cursor-pointer border-border-color flex flex-col overflow-hidden rounded"
                  >
                    <img
                      src={`http://api.dc.edu.vn/v1/file/${course.banner}`}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = image2;
                      }}
                      alt="course"
                      className="h-[226px] w-full object-cover"
                    />

                    <div className="flex flex-col flex-1 gap-y-5 p-5">
                      <Star stars={5} />

                      <p className="line-clamp-2 text-title-color text-lg font-bold hover:text-primary-color transition-[color] duration-200 ease-linear">
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
                      <div className="flex gap-x-2 items-center">
                        <p className="text-primary-color font-semibold text-lg">
                          {formatPrice(course.price ? course.price : 650000)}
                        </p>
                      </div>

                      <button className="flex items-center gap-1 text-base border transition-[background-color] duration-200 ease-linear hover:text-white hover:bg-primary-color text-primary-color border-primary-color bg-white rounded py-1.5 px-3">
                        <TbClick />
                        <span>Học ngay</span>
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="bg-[#ff5e2b] w-full flex items-center text-white gap-x-4 py-4 px-2">
                <BiCheck size={32} />
                <span className="text-base">Bạn chưa đăng ký khóa học nào!</span>
              </p>
            )}
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

export default MyCourses;
