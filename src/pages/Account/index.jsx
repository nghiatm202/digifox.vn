import { useState } from 'react';
import { Link } from 'react-router-dom';
function Account() {
  const [isLogin, setIsLogin] = useState(true);
  const handleNextPage = () => {
    setIsLogin(prev => !prev);
  };

  return (
    <div className="account">
      <div className="grid grid-cols-2 gap-2">
        <div className="col-login" style={{ display: isLogin ? 'block' : 'none' }}>
          <h2 className="title">Đăng nhập</h2>
          <form>
            <div className="form-group">
              <label>
                Tên tài khoản hoặc địa chỉ email
                <span>*</span>
              </label>
              <input type="text"></input>
            </div>
            <div className="form-group">
              <label>
                Password
                <span>*</span>
              </label>
              <input type="text"></input>
            </div>
            <button>LOG IN</button>
            <div className="form-footer">
              <div className="form-group">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <Link to="/lost-password">Lost your password?</Link>
            </div>
          </form>
        </div>
        <div className="col-register" style={{ display: isLogin ? 'none' : 'block' }}>
          <h2 className="title">Đăng ký</h2>
          <form>
            <div className="form-group">
              <label>
                Địa chỉ email
                <span>*</span>
              </label>
              <input type="text"></input>
            </div>
            <p>A link to set a new password will be sent to your email address.</p>
            <button>ĐĂNG KÝ</button>
          </form>
        </div>
        <div className="col-register-text">
          <h2 className="title">Đăng ký</h2>
          <div className="info">
            <p>
              Đăng ký trang web này cho phép bạn truy cập trạng thái và lịch sử đơn hàng của mình. Chỉ cần điền vào các
              trường bên dưới và chúng tôi sẽ nhanh chóng thiết lập tài khoản mới cho bạn. Chúng tôi sẽ chỉ hỏi bạn
              những thông tin cần thiết để giúp quá trình mua hàng nhanh hơn và dễ dàng hơn.
            </p>
          </div>
          <button onClick={handleNextPage}>{isLogin ? 'Đăng ký' : 'Đăng nhập'}</button>
        </div>
      </div>
    </div>
  );
}

export default Account;
