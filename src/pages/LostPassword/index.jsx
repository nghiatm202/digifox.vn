function LostPassword() {
    return (
        <div className="lost-password">
            <form>
                <p>Quên mật khẩu? Vui lòng nhập tên đăng nhập hoặc địa chỉ email. Bạn sẽ nhận được một liên kết tạo mật khẩu mới qua email.</p>
                <div className="form-group">
                    <label>Tên đăng nhập hoặc email </label>
                    <input type='text' />
                </div>
                <button>ĐẶT LẠI MẬT KHẨU</button>
            </form>
        </div>
    );
}

export default LostPassword;