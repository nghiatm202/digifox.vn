import { useMemo, useState } from 'react';
import { BsDot } from 'react-icons/bs';
import Pagination from '../../components/Pagination';

const blogList = [
  {
    id: 1,
    image: 'https://digifox.vn/wp-content/uploads/2022/06/dofollow-nofollow-1024x534-1-e1656271062739.jpg',
    title: 'Link Dofollow và Nofollow | Tất tần tật những điều bạn nên biết',
    description: 'Link Dofollow và Nofollow là hai thuật ngữ quan trọng trong SEO rất dễ hiểu sai và gây nhầm lẫn.',
    authorName: 'Nguyệt Phạm',
    createdAt: '27/06/2022',
  },
  {
    id: 2,
    image: 'https://digifox.vn/wp-content/uploads/2022/06/dofollow-nofollow-1024x534-1-e1656271062739.jpg',
    title: 'Link Dofollow và Nofollow | Tất tần tật những điều bạn nên biết',
    description: 'Link Dofollow và Nofollow là hai thuật ngữ quan trọng trong SEO rất dễ hiểu sai và gây nhầm lẫn.',
    authorName: 'Nguyệt Phạm',
    createdAt: '27/06/2022',
  },
  {
    id: 3,
    image: 'https://digifox.vn/wp-content/uploads/2022/06/dofollow-nofollow-1024x534-1-e1656271062739.jpg',
    title: 'Link Dofollow và Nofollow | Tất tần tật những điều bạn nên biết',
    description: 'Link Dofollow và Nofollow là hai thuật ngữ quan trọng trong SEO rất dễ hiểu sai và gây nhầm lẫn.',
    authorName: 'Nguyệt Phạm',
    createdAt: '27/06/2022',
  },
  {
    id: 4,
    image: 'https://digifox.vn/wp-content/uploads/2022/06/dofollow-nofollow-1024x534-1-e1656271062739.jpg',
    title: 'Link Dofollow và Nofollow | Tất tần tật những điều bạn nên biết',
    description: 'Link Dofollow và Nofollow là hai thuật ngữ quan trọng trong SEO rất dễ hiểu sai và gây nhầm lẫn.',
    authorName: 'Nguyệt Phạm',
    createdAt: '27/06/2022',
  },
  {
    id: 5,
    image: 'https://digifox.vn/wp-content/uploads/2022/06/dofollow-nofollow-1024x534-1-e1656271062739.jpg',
    title: 'Link Dofollow và Nofollow | Tất tần tật những điều bạn nên biết',
    description: 'Link Dofollow và Nofollow là hai thuật ngữ quan trọng trong SEO rất dễ hiểu sai và gây nhầm lẫn.',
    authorName: 'Nguyệt Phạm',
    createdAt: '27/06/2022',
  },
  {
    id: 6,
    image: 'https://digifox.vn/wp-content/uploads/2022/06/dofollow-nofollow-1024x534-1-e1656271062739.jpg',
    title: 'Link Dofollow và Nofollow | Tất tần tật những điều bạn nên biết',
    description: 'Link Dofollow và Nofollow là hai thuật ngữ quan trọng trong SEO rất dễ hiểu sai và gây nhầm lẫn.',
    authorName: 'Nguyệt Phạm',
    createdAt: '27/06/2022',
  },
  {
    id: 7,
    image: 'https://digifox.vn/wp-content/uploads/2022/06/dofollow-nofollow-1024x534-1-e1656271062739.jpg',
    title: 'Link Dofollow và Nofollow | Tất tần tật những điều bạn nên biết',
    description: 'Link Dofollow và Nofollow là hai thuật ngữ quan trọng trong SEO rất dễ hiểu sai và gây nhầm lẫn.',
    authorName: 'Nguyệt Phạm',
    createdAt: '27/06/2022',
  },
  {
    id: 8,
    image: 'https://digifox.vn/wp-content/uploads/2022/06/dofollow-nofollow-1024x534-1-e1656271062739.jpg',
    title: 'Link Dofollow và Nofollow | Tất tần tật những điều bạn nên biết',
    description: 'Link Dofollow và Nofollow là hai thuật ngữ quan trọng trong SEO rất dễ hiểu sai và gây nhầm lẫn.',
    authorName: 'Nguyệt Phạm',
    createdAt: '27/06/2022',
  },
  {
    id: 9,
    image: 'https://digifox.vn/wp-content/uploads/2022/06/dofollow-nofollow-1024x534-1-e1656271062739.jpg',
    title: 'Link Dofollow và Nofollow | Tất tần tật những điều bạn nên biết',
    description: 'Link Dofollow và Nofollow là hai thuật ngữ quan trọng trong SEO rất dễ hiểu sai và gây nhầm lẫn.',
    authorName: 'Nguyệt Phạm',
    createdAt: '27/06/2022',
  },
  {
    id: 10,
    image: 'https://digifox.vn/wp-content/uploads/2022/06/dofollow-nofollow-1024x534-1-e1656271062739.jpg',
    title: 'Link Dofollow và Nofollow | Tất tần tật những điều bạn nên biết',
    description: 'Link Dofollow và Nofollow là hai thuật ngữ quan trọng trong SEO rất dễ hiểu sai và gây nhầm lẫn.',
    authorName: 'Nguyệt Phạm',
    createdAt: '27/06/2022',
  },
  {
    id: 11,
    image: 'https://digifox.vn/wp-content/uploads/2022/06/dofollow-nofollow-1024x534-1-e1656271062739.jpg',
    title: 'Link Dofollow và Nofollow | Tất tần tật những điều bạn nên biết',
    description: 'Link Dofollow và Nofollow là hai thuật ngữ quan trọng trong SEO rất dễ hiểu sai và gây nhầm lẫn.',
    authorName: 'Nguyệt Phạm',
    createdAt: '27/06/2022',
  },
  {
    id: 12,
    image: 'https://digifox.vn/wp-content/uploads/2022/06/dofollow-nofollow-1024x534-1-e1656271062739.jpg',
    title: 'Link Dofollow và Nofollow | Tất tần tật những điều bạn nên biết',
    description: 'Link Dofollow và Nofollow là hai thuật ngữ quan trọng trong SEO rất dễ hiểu sai và gây nhầm lẫn.',
    authorName: 'Nguyệt Phạm',
    createdAt: '27/06/2022',
  },
];

let PageSize = 3;

const BLog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentBlogData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    return blogList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className="blog-page py-12 md:py-16">
      <div className="bg-primary-color rounded relative w-full mb-28">
        <div className="blog-shape absolute overflow-hidden left-0 w-full bottom-[-1px] rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
 c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
 c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            ></path>
          </svg>
        </div>

        <div className="min-h-[380px] md:min-h-[500px] relative mx-auto flex items-center">
          <div className="w-full flex items-center justify-center flex-col gap-y-5">
            <h1 className="text-white text-3xl font-bold">Digifox 's Blog</h1>
            <p className="text-white text-xl">Chia sẻ kiến thức hữu ích về Marketing</p>
          </div>
        </div>
      </div>

      <div className="blog-list flex flex-wrap">
        {currentBlogData.map((blog) => {
          return (
            <article
              key={blog.id}
              className="blog-item flex flex-col overflow-hidden rounded-xl bg-white shadow-blog-item"
            >
              <img src={blog.image} alt={blog.title} className="h-[238px] w-full object-cover" />

              <div className="flex flex-col flex-1">
                <div className="px-5 pt-7 flex flex-col flex-1">
                  <p className="text-xl text-primary-color mb-4 line-clamp-2">{blog.title}</p>
                  <p className="mt-auto shrink-0 text-base text-paragraph-color mb-7 line-clamp-2">
                    {blog.description}
                  </p>
                </div>

                <div className="mt-auto shrink-0 flex items-center gap-1 py-3 px-5 text-sm text-paragraph-color opacity-90 border-t border-border-color">
                  <span>{blog.authorName}</span>
                  <BsDot />
                  <time>{blog.createdAt}</time>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <Pagination
        className="pagination-bar mt-8 flex items-center justify-center"
        currentPage={currentPage}
        totalCount={blogList.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default BLog;
