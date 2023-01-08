import { useState } from 'react';
import { FaBook, FaLock, FaUser } from 'react-icons/fa';
import { GiUpgrade } from 'react-icons/gi';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/modules/userSlice';
import UserProfile from './components/UserProfile';
import UserSecurity from './components/UserSecurity';

const Dashboard = () => {
  const [toggleUserTab, setToggleUserTab] = useState('profile');

  const dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <div className="dashboard-page py-12 md:py-16">
      <div className="flex dashboard-container flex-wrap flex-col md:flex-row">
        <div className="dashboard-left md:border-r md:border-border-color">
          <div className="flex gap-2 flex-row flex-wrap md:flex-col">
            <div
              onClick={() => setToggleUserTab('profile')}
              className="flex items-center gap-x-2 py-2 px-5 rounded-l transition-[background-color] duration-200 ease-linear cursor-pointer hover:bg-[#f9e9e3] transi"
            >
              <span>
                <FaUser size={22} color="#ff5e2b" />
              </span>
              <span className="text-base text-[#404145]">Trang cá nhân</span>
            </div>

            <div
              onClick={() => setToggleUserTab('security')}
              className="flex items-center gap-x-2 py-2 px-5 rounded-l transition-[background-color] duration-200 ease-linear cursor-pointer hover:bg-[#f9e9e3] transi"
            >
              <span>
                <FaLock size={22} color="#ff5e2b" />
              </span>
              <span className="text-base text-[#404145]">Bảo mật</span>
            </div>

            <div
              onClick={() => navigate('/membership')}
              className="flex items-center gap-x-2 py-2 px-5 rounded-l transition-[background-color] duration-200 ease-linear cursor-pointer hover:bg-[#f9e9e3] transi"
            >
              <span>
                <GiUpgrade size={22} color="#ff5e2b" />
              </span>
              <span className="text-base text-[#404145]">Nâng cấp</span>
            </div>

            <div
              onClick={() => navigate('/tat-ca-khoa-hoc')}
              className="flex items-center gap-x-2 py-2 px-5 rounded-l transition-[background-color] duration-200 ease-linear cursor-pointer hover:bg-[#f9e9e3] transi"
            >
              <span>
                <FaBook size={22} color="#ff5e2b" />
              </span>
              <span className="text-base text-[#404145]">Khóa học</span>
            </div>

            <div
              onClick={() => {
                dispatch(logout());

                navigate('/');
              }}
              className="flex items-center gap-x-2 py-2 px-5 rounded-l transition-[background-color] duration-200 ease-linear cursor-pointer hover:bg-[#f9e9e3] transi"
            >
              <span>
                <RiLogoutBoxRFill size={22} color="#ff5e2b" />
              </span>
              <span className="text-base text-[#404145]">Đăng xuất</span>
            </div>
          </div>
        </div>

        <div className="dashboard-right">{toggleUserTab === 'profile' ? <UserProfile /> : <UserSecurity />}</div>
      </div>
    </div>
  );
};

export default Dashboard;
