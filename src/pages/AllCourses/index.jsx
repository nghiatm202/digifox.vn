import { Pagination, Star } from '../../components';
import { TbUsers } from 'react-icons/tb';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useMemo, useState } from 'react';

const image2 = require('../../assets/images/image-2.jpg');

const courseList = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
  { id: 16 },
  { id: 17 },
  { id: 18 },
];

let PageSize = 12;

const AllCourses = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentCourseData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    return courseList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className="all-courses-page py-12 md:py-16">
      <div className="course-list flex flex-wrap">
        {currentCourseData.map((course) => {
          return (
            <div
              key={course.id}
              className="course-item border cursor-pointer border-border-color flex flex-col overflow-hidden rounded"
            >
              <img src={image2} alt="course" className="h-[226px] w-full object-cover" />

              <div className="flex flex-col flex-1 gap-y-5 p-5">
                <Star stars={5} />

                <p className="line-clamp-2 text-title-color text-lg font-bold hover:text-primary-color transition-[color] duration-200 ease-linear">
                  Khóa học kiếm tiền với POD trên Etsy cho người mới bắt đầu – Bán hàng online không cần vốn
                </p>

                <div className="flex flex-col gap-y-5 mt-auto">
                  <div className="flex items-center gap-x-2">
                    <TbUsers size={20} />
                    <span className="text-base">5</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 overflow-hidden rounded-full">
                      <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
                        alt="avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[#757c83] text-sm">
                      By <span className="text-title-color font-medium">Nguyễn Thị Linh Nhi</span> In{' '}
                      <span className="text-title-color font-medium">Khóa lẻ</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex-col gap-y-2 lg:flex-row px-5 py-3 flex items-center justify-between border-t border-border-color">
                <div className="flex gap-x-2 items-center text-base">
                  <p className="text-gray-300 line-through">
                    2.599.999
                    <span>đ</span>
                  </p>
                  <p className="text-primary-color font-semibold">
                    599.999
                    <span>đ</span>
                  </p>
                </div>

                <button className="flex items-center gap-1 text-base border transition-[background-color] duration-200 ease-linear hover:text-white hover:bg-primary-color text-primary-color border-primary-color bg-white rounded py-1.5 px-3">
                  <AiOutlineShoppingCart />
                  <span>Thêm vào giỏ hàng</span>
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
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default AllCourses;
