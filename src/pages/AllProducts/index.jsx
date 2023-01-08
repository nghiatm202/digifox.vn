import { useMemo, useState } from 'react';
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { TfiLayoutGrid3Alt, TfiLayoutGrid4Alt } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { Pagination, Star } from '../../components';

const image1 = require('../../assets/images/image-1.jpg');

const productList = [
  {
    id: 1,
    image: `${image1}`,
    title: '99 mẫu Powerpoint bản quyền chuyên về Marketing',
    tag: 'Report',
    rating: 5,
    oldPrice: '2.599.999',
    newPrice: '999.999',
  },
  {
    id: 2,
    image: `${image1}`,
    title: '99 mẫu Powerpoint bản quyền chuyên về Marketing',
    tag: 'Report',
    rating: 5,
    oldPrice: '2.599.999',
    newPrice: '999.999',
  },
  {
    id: 3,
    image: `${image1}`,
    title: '99 mẫu Powerpoint bản quyền chuyên về Marketing',
    tag: 'Report',
    rating: 5,
    oldPrice: '2.599.999',
    newPrice: '999.999',
  },
  {
    id: 4,
    image: `${image1}`,
    title: '99 mẫu Powerpoint bản quyền chuyên về Marketing',
    tag: 'Report',
    rating: 5,
    oldPrice: '2.599.999',
    newPrice: '999.999',
  },
  {
    id: 5,
    image: `${image1}`,
    title: '99 mẫu Powerpoint bản quyền chuyên về Marketing',
    tag: 'Report',
    rating: 5,
    oldPrice: '2.599.999',
    newPrice: '999.999',
  },
  {
    id: 6,
    image: `${image1}`,
    title: '99 mẫu Powerpoint bản quyền chuyên về Marketing',
    tag: 'Report',
    rating: 5,
    oldPrice: '2.599.999',
    newPrice: '999.999',
  },
  {
    id: 7,
    image: `${image1}`,
    title: '99 mẫu Powerpoint bản quyền chuyên về Marketing',
    tag: 'Report',
    rating: 5,
    oldPrice: '2.599.999',
    newPrice: '999.999',
  },
  {
    id: 8,
    image: `${image1}`,
    title: '99 mẫu Powerpoint bản quyền chuyên về Marketing',
    tag: 'Report',
    rating: 5,
    oldPrice: '2.599.999',
    newPrice: '999.999',
  },
  {
    id: 9,
    image: `${image1}`,
    title: '99 mẫu Powerpoint bản quyền chuyên về Marketing',
    tag: 'Report',
    rating: 5,
    oldPrice: '2.599.999',
    newPrice: '999.999',
  },
  {
    id: 10,
    image: `${image1}`,
    title: '99 mẫu Powerpoint bản quyền chuyên về Marketing',
    tag: 'Report',
    rating: 5,
    oldPrice: '2.599.999',
    newPrice: '999.999',
  },
];

let PageSize = 8;

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentProductData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    return productList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className="all-products-page py-12 md:py-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between text-base mb-7">
        <div className="flex items-center gap-x-2">
          <Link to="/">Trang chủ</Link>
          <span>/</span>
          <span className="font-semibold">Sản phẩm</span>
        </div>

        <div className="flex items-center gap-x-8">
          <p className="hidden sm:flex items-center gap-x-1.5">
            <span className="font-semibold">Show:</span>
            <span className="cursor-pointer text-gray-500 hover:text-gray-900">9</span>
            <span>/</span>
            <span className="cursor-pointer text-gray-500 hover:text-gray-900">12</span>
            <span>/</span>
            <span className="cursor-pointer text-gray-500 hover:text-gray-900">18</span>
            <span>/</span>
            <span className="cursor-pointer text-gray-500 hover:text-gray-900">24</span>
          </p>

          <div className="hidden sm:flex items-center gap-x-3">
            <TfiLayoutGrid3Alt size={28} cursor="pointer" />

            <TfiLayoutGrid4Alt size={31} cursor="pointer" />
          </div>

          <select
            name="orderby"
            defaultValue={'DEFAULT'}
            className="bg-white border-b text-base text-gray-900 flex items-center w-full p-2.5 pl-0 outline-none"
          >
            <option value="DEFAULT" disabled>
              Thứ tự mặc định
            </option>
            <option value="popularity">Thứ tự theo mức độ phổ biến</option>
            <option value="rating">Thứ tự theo điểm đánh giá</option>
            <option value="date">Mới nhất</option>
            <option value="price">Thứ tự theo giá: thấp đến cao</option>
            <option value="price-desc">Thứ tự theo giá: cao xuống thấp</option>
          </select>
        </div>
      </div>

      <div className="product-list flex flex-wrap">
        {currentProductData.map(product => {
          return (
            <div
              key={product.id}
              className="product-item group relative flex flex-col overflow-hidden rounded bg-white shadow-product-item"
            >
              <img src={product.image} alt={product.title} className="h-[208px] w-full object-cover" />

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
                <div className="p-3 cursor-pointer hover:text-gray-500 transition-[color] duration-200 ease-linear">
                  <AiOutlineShoppingCart size={20} />
                </div>
                <div className="p-3 cursor-pointer hover:text-gray-500 transition-[color] duration-200 ease-linear">
                  <AiOutlineSearch size={20} />
                </div>
                <div className="p-3 cursor-pointer hover:text-gray-500 transition-[color] duration-200 ease-linear">
                  <AiOutlineHeart size={20} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Pagination
        className="pagination-bar mt-8 flex items-center justify-center"
        currentPage={currentPage}
        totalCount={productList.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
};

export default AllProducts;
