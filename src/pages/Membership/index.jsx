import { BsCheck2 } from 'react-icons/bs';

const description = [
  { id: 1, title: 'Mô tả 1' },
  { id: 2, title: 'Mô tả 2' },
  { id: 3, title: 'Mô tả 3' },
  { id: 4, title: 'Mô tả 4' },
  { id: 5, title: 'Mô tả 5' },
];

const Membership = () => {
  return (
    <div className="membership-page py-12 md:py-16">
      <h1 className="text-primary-color font-bold text-center mx-auto uppercase text-5xl mb-20">Membership</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="flex flex-col bg-white shadow-xl p-6 rounded">
          <p className="text-2xl font-bold mb-1 text-[#111]">Monthly</p>
          <p className="text-base text-[#111] mb-4">Mô tả gói</p>
          <p className="pb-2.5 border-b border-border-color text-2xl text-[#111] font-bold">
            500.000 <span className="font-normal text-base">đ / 30 ngày</span>
          </p>
          <ul className="flex flex-col gap-y-5 mt-7 mb-11">
            {description.map(item => {
              return (
                <li key={item.id} className="flex items-center gap-2 group">
                  <div className="w-5 h-5 rounded-full group-hover:bg-[#30a820] flex items-center justify-center bg-[#30a8201a] transition-all duration-200 ease-linear">
                    <BsCheck2
                      size={10}
                      className="group-hover:text-white text-[#30a820] transition-all duration-200 ease-linear"
                    />
                  </div>
                  <span className="group-hover:text-[#30a820] text-base transition-all duration-200 ease-linear">
                    {item.title}
                  </span>
                </li>
              );
            })}
          </ul>
          <button className="pb-1.5 pt-1 px-2 border border-[#6c757d] transition-all duration-200 ease-linear bg-white hover:bg-[#6c757d] hover:text-white text-[#6c757d] text-base w-fit rounded">
            Tham gia ngay
          </button>
        </div>

        <div className="flex flex-col bg-white shadow-xl p-6 rounded">
          <p className="text-2xl font-bold mb-1 text-[#111]">Yearly</p>
          <p className="text-base text-[#111] mb-4">Mô tả gói</p>
          <p className="pb-2.5 border-b border-border-color text-2xl text-[#111] font-bold">
            1.000.000 <span className="font-normal text-base">đ / 30 ngày</span>
          </p>
          <ul className="flex flex-col gap-y-5 mt-7 mb-11">
            {description.map(item => {
              return (
                <li key={item.id} className="flex items-center gap-2 group">
                  <div className="w-5 h-5 rounded-full group-hover:bg-[#30a820] flex items-center justify-center bg-[#30a8201a] transition-all duration-200 ease-linear">
                    <BsCheck2
                      size={10}
                      className="group-hover:text-white text-[#30a820] transition-all duration-200 ease-linear"
                    />
                  </div>
                  <span className="group-hover:text-[#30a820] text-base transition-all duration-200 ease-linear">
                    {item.title}
                  </span>
                </li>
              );
            })}
          </ul>
          <button className="pb-1.5 pt-1 px-2 border border-[#6c757d] transition-all duration-200 ease-linear bg-white hover:bg-[#6c757d] hover:text-white text-[#6c757d] text-base w-fit rounded">
            Tham gia ngay
          </button>
        </div>

        <div className="flex flex-col bg-white shadow-xl p-6 rounded">
          <p className="text-2xl font-bold mb-1 text-[#111]">Lifetime</p>
          <p className="text-base text-[#111] mb-4">Mô tả gói</p>
          <p className="pb-2.5 border-b border-border-color text-2xl text-[#111] font-bold">
            5.000.000 <span className="font-normal text-base">đ / 30 ngày</span>
          </p>
          <ul className="flex flex-col gap-y-5 mt-7 mb-11">
            {description.map(item => {
              return (
                <li key={item.id} className="flex items-center gap-2 group">
                  <div className="w-5 h-5 rounded-full group-hover:bg-[#30a820] flex items-center justify-center bg-[#30a8201a] transition-all duration-200 ease-linear">
                    <BsCheck2
                      size={10}
                      className="group-hover:text-white text-[#30a820] transition-all duration-200 ease-linear"
                    />
                  </div>
                  <span className="group-hover:text-[#30a820] text-base transition-all duration-200 ease-linear">
                    {item.title}
                  </span>
                </li>
              );
            })}
          </ul>
          <button className="pb-1.5 pt-1 px-2 border border-[#6c757d] transition-all duration-200 ease-linear bg-white hover:bg-[#6c757d] hover:text-white text-[#6c757d] text-base w-fit rounded">
            Tham gia ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
