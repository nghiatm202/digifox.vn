import { unwrapResult } from '@reduxjs/toolkit';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import countryListApi from '../../../../apis/countryListApi';
import { Loading } from '../../../../components';
import { registerSchema } from '../../../../schemas';
import { register } from '../../../../store/modules/userSlice';

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [countryList, setCountryList] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCountryList() {
      const response = await countryListApi.getAll();
      setCountryList(response.data);
    }

    fetchCountryList();
  }, []);

  const onSubmit = async (values, actions) => {
    console.log(values);

    try {
      setLoading(true);
      const action = register(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      actions.resetForm();
      toast.success('Đăng ký tài khoản thành công!');
    } catch (error) {
      toast.error('Đăng ký tài khoản thất bại!');
      console.log('Failed to register:', error);
    }

    setLoading(false);
  };

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      country: '',
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <div className="col-register lg:border-r lg:border-[#dedede] lg:pr-10 flex-1">
      <h2 className="title uppercase">Đăng ký</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <p className="mb-7">
          <label htmlFor="name" className="text-title-color pb-1 block">
            Họ tên
          </label>
          <input
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${
              errors.name && touched.name ? 'border-red-600' : 'border-border-color'
            } w-full border rounded bg-white py-2 px-4 outline-none`}
            type="text"
            id="name"
            placeholder="Nhập tên"
          />
          {errors.name && touched.name && <span className="block text-red-600 mt-1">{errors.name}</span>}
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

        <p className="mb-7">
          <label htmlFor="phone" className="text-title-color pb-1 block">
            Số điện thoại
          </label>
          <input
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${
              errors.phone && touched.phone ? 'border-red-600' : 'border-border-color'
            } w-full border rounded bg-white py-2 px-4 outline-none`}
            type="tel"
            id="phone"
            placeholder="Nhập số điện thoại"
          />
          {errors.phone && touched.phone && <span className="block text-red-600 mt-1">{errors.phone}</span>}
        </p>

        <p className="mb-7 relative">
          <label htmlFor="password" className="text-title-color pb-1 block">
            Mật khẩu
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
            placeholder="Nhập mật khẩu"
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

        <p className="mb-7">
          <label className="text-title-color pb-1 block">Quốc gia</label>
          <select
            value={values.country}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${
              errors.country && touched.country ? 'border-red-600' : 'border-border-color'
            } w-full border rounded bg-white py-2 px-4 outline-none`}
            name="country"
            placeholder="Quốc gia"
          >
            <option value="">Quốc gia</option>
            {countryList &&
              countryList.map(country => {
                return (
                  <option key={country} value={country}>
                    {country}
                  </option>
                );
              })}
          </select>

          {errors.country && touched.country && <span className="block text-red-600 mt-1">{errors.country}</span>}
        </p>

        <p>A link to set a new password will be sent to your email address.</p>

        <button
          disabled={isSubmitting}
          type="submit"
          className="uppercase w-full gap-x-2 flex items-center justify-center rounded font-semibold hover:bg-[#e95c2c] bg-[#ff5e2b] text-white py-3 px-5 transition-[background-color] duration-200 ease-linear"
        >
          {loading ? <Loading noCenter={true} /> : null}
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
