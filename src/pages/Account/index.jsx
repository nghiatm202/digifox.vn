import { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function Account() {
  const [loginView, setLoginView] = useState(true);

  return (
    <div className="account-page py-12 md:py-16">
      <div className="flex flex-col lg:flex-row gap-x-2 gap-y-8">
        {loginView ? <LoginForm /> : <RegisterForm />}

        <div className="col-register-text flex-1 lg:pl-7">
          <h2 className="title uppercase">Đăng ký</h2>
          <div className="info">
            <p>
              Đăng ký trang web này cho phép bạn truy cập trạng thái và lịch sử đơn hàng của mình. Chỉ cần điền vào các
              trường bên dưới và chúng tôi sẽ nhanh chóng thiết lập tài khoản mới cho bạn. Chúng tôi sẽ chỉ hỏi bạn
              những thông tin cần thiết để giúp quá trình mua hàng nhanh hơn và dễ dàng hơn.
            </p>
          </div>
          <button
            className="uppercase py-2 px-3 hover:bg-[#efefef] text-sm font-medium text-[#333] rounded"
            onClick={() => setLoginView(prev => !prev)}
          >
            {loginView ? 'Đăng ký' : 'Đăng nhập'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
