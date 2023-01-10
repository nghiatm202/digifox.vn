import { useFormik } from 'formik';
import { useState } from 'react';
import userApi from '../../apis/userApi';
import { Loading } from '../../components';
import { forgotPasswordSchema } from '../../schemas';

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values, actions) => {
    try {
      setLoading(true);

      const data = await userApi.forgotPassword(values);
      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log('Failed to forgot password: ', error);
    }

    setLoading(false);
  };

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPasswordSchema,
    onSubmit,
  });

  return (
    <div className="max-w-[480px] mx-auto mt-20">
      <form onSubmit={handleSubmit} autoComplete="off" className="text-base">
        <p className="mb-5">
          Quên mật khẩu? Vui lòng nhập tên đăng nhập hoặc địa chỉ email. Bạn sẽ nhận được một liên kết tạo mật khẩu mới
          qua email.
        </p>

        <p className="mb-7">
          <label htmlFor="email" className="text-title-color pb-1 block">
            Địa chỉ email
          </label>
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${
              errors.email && touched.email ? 'border-red-600' : 'border-border-color'
            } w-full border rounded bg-white py-2 px-4 outline-none`}
            type="email"
            id="email"
            placeholder="Nhập địa chỉ email"
          />
          {errors.email && touched.email && <span className="block text-red-600 mt-1">{errors.email}</span>}
        </p>

        <button
          disabled={isSubmitting}
          type="submit"
          className="uppercase w-full flex items-center justify-center rounded font-semibold hover:bg-[#e95c2c] bg-[#ff5e2b] text-white py-3 px-5 mb-5 transition-[background-color] duration-200 ease-linear"
        >
          {loading ? <Loading noCenter={true} /> : null}
          Đặt lại mật khẩu
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
