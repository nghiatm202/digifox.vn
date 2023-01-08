import { unwrapResult } from '@reduxjs/toolkit';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Loading } from '../../../../components';
import { loginSchema } from '../../../../schemas';
import { login } from '../../../../store/modules/userSlice';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const loggedInUser = useSelector(state => state.user.current);
  const isLoggedIn = !!loggedInUser.id;

  useEffect(() => {
    if (isLoggedIn) {
      return navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const onSubmit = async (values, actions) => {
    console.log(values);
    try {
      setLoading(true);
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      actions.resetForm();
    } catch (error) {
      console.log('Failed to login:', error);
    }

    setLoading(false);
  };

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <div className="col-login lg:border-r lg:border-[#dedede] lg:pr-10 flex-1">
      <h2 className="title uppercase">Đăng nhập</h2>

      <form onSubmit={handleSubmit} autoComplete="off">
        <p className="mb-7">
          <label htmlFor="email" className="text-title-color pb-1 block">
            Địa chỉ email <span className="text-[#E01020]">*</span>
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

        <p className="mb-7">
          <label htmlFor="password" className="text-title-color pb-1 block">
            Password <span className="text-[#E01020]">*</span>
          </label>
          <input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${
              errors.password && touched.password ? 'border-red-600' : 'border-border-color'
            } w-full border rounded bg-white py-2 px-4 outline-none`}
            type="password"
            autoComplete="on"
            id="password"
            placeholder="Nhập mật khẩu"
          />
          {errors.password && touched.password && <span className="block text-red-600 mt-1">{errors.password}</span>}
        </p>

        <button
          disabled={isSubmitting}
          type="submit"
          className="uppercase w-full flex items-center justify-center cursor-pointer rounded font-semibold hover:bg-[#e95c2c] bg-[#ff5e2b] text-white py-3 px-5 mb-5 transition-[background-color] duration-200 ease-linear"
        >
          {loading ? <Loading noCenter={true} /> : null}
          Đăng nhập
        </button>

        <div className="form-footer">
          <div className="form-group flex items-center">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Link to="/forgot-password">Lost your password?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
