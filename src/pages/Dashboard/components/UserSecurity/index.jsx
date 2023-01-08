import { useFormik } from 'formik';
import { useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import userApi from '../../../../apis/userApi';
import { Loading } from '../../../../components';
import { userSecuritySchema } from '../../../../schemas';
import { logout } from '../../../../store/modules/userSlice';

const UserSecurity = () => {
  const [loading, setLoading] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    try {
      setLoading(true);
      const data = await userApi.changePassword(values);
      if (data) {
        const { success, message } = data;
        if (success) {
          toast.success(message);

          const action = logout();
          dispatch(action);

          navigate('/tai-khoan');
        } else {
          toast.error(message);
        }
      }
    } catch (error) {
      console.log('Failed to change password: ', error);
    }

    setLoading(false);
  };

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      current_password: '',
      password: '',
      password_confirmation: '',
    },
    validationSchema: userSecuritySchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <p className="mb-7 relative">
        <label htmlFor="current_password" className="text-title-color pb-1 block">
          Mật khẩu cũ <span className="text-[#E01020]">*</span>
        </label>
        <input
          value={values.current_password}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="on"
          className={`${
            errors.current_password && touched.current_password ? 'border-red-600' : 'border-border-color'
          } w-full border rounded bg-white py-2 px-4 outline-none`}
          type={showOldPassword ? 'text' : 'password'}
          id="current_password"
          placeholder="Nhập mật khẩu cũ"
        />

        <span className="absolute z-10 right-2 top-[40px]" onClick={() => setShowOldPassword(!showOldPassword)}>
          {showOldPassword ? (
            <BsFillEyeSlashFill cursor="pointer" color="#8e8c94" />
          ) : (
            <BsFillEyeFill cursor="pointer" color="#8e8c94" />
          )}
        </span>

        {errors.current_password && touched.current_password && (
          <span className="block text-red-600 mt-1">{errors.current_password}</span>
        )}
      </p>

      <p className="mb-7 relative">
        <label htmlFor="password" className="text-title-color pb-1 block">
          Mật khẩu mới <span className="text-[#E01020]">*</span>
        </label>
        <input
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="on"
          className={`${
            errors.password && touched.password ? 'border-red-600' : 'border-border-color'
          } w-full border rounded bg-white py-2 px-4 outline-none`}
          type={showPassword ? 'text' : 'password'}
          id="password"
          placeholder="Nhập mật khẩu mới"
        />

        <span className="absolute z-10 right-2 top-[40px]" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <BsFillEyeSlashFill cursor="pointer" color="#8e8c94" />
          ) : (
            <BsFillEyeFill cursor="pointer" color="#8e8c94" />
          )}
        </span>

        {errors.password && touched.password && <span className="block text-red-600 mt-1">{errors.password}</span>}
      </p>

      <p className="mb-8 relative">
        <label htmlFor="password_confirmation" className="text-title-color pb-1 block">
          Xác nhận mật khẩu <span className="text-[#E01020]">*</span>
        </label>
        <input
          value={values.password_confirmation}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="on"
          className={`${
            errors.password_confirmation && touched.password_confirmation ? 'border-red-600' : 'border-border-color'
          } w-full border rounded bg-white py-2 px-4 outline-none`}
          type={showPasswordConfirmation ? 'text' : 'password'}
          id="password_confirmation"
          placeholder="Nhập lại mật khẩu"
        />

        <span
          className="absolute z-10 right-2 top-[40px]"
          onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
        >
          {showPasswordConfirmation ? (
            <BsFillEyeSlashFill cursor="pointer" color="#8e8c94" />
          ) : (
            <BsFillEyeFill cursor="pointer" color="#8e8c94" />
          )}
        </span>

        {errors.password_confirmation && touched.password_confirmation && (
          <span className="block text-red-600 mt-1">{errors.password_confirmation}</span>
        )}
      </p>

      <button
        disabled={isSubmitting}
        type="submit"
        className="uppercase flex items-center justify-center cursor-pointer w-full rounded font-semibold hover:bg-[#e95c2c] bg-[#ff5e2b] text-white py-3 px-5 transition-[background-color] duration-200 ease-linear"
      >
        {loading ? <Loading noCenter={true} /> : null}
        Lưu lại
      </button>
    </form>
  );
};

export default UserSecurity;
