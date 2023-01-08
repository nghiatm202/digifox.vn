import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import countryListApi from '../../../../apis/countryListApi';
import { userProfileSchema } from '../../../../schemas';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UserProfile = () => {
  const loggedInUser = useSelector(state => state.user.current);
  const [countryList, setCountryList] = useState(null);

  useEffect(() => {
    async function fetchCountryList() {
      const response = await countryListApi.getAll();
      setCountryList(response.data);
    }

    fetchCountryList();
  }, []);

  const onSubmit = (values, actions) => {
    console.log(values);
  };

  const { values, errors, touched, isSubmitting, setFieldValue, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: loggedInUser.name,
      email: loggedInUser.email,
      phone: loggedInUser.phone,
      birthday: loggedInUser.birthday || '',
      gender: loggedInUser.gender || '',
      country: loggedInUser.country,
    },
    validationSchema: userProfileSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <p className="mb-7">
        <label htmlFor="name" className="text-title-color pb-1 block">
          Tên <span className="text-[#E01020]">*</span>
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
          Địa chỉ email <span className="text-[#E01020]">*</span>
        </label>
        <input
          value={values.email}
          readOnly
          className="border-border-color w-full border rounded bg-white py-2 px-4 outline-none"
          type="email"
          id="email"
          placeholder="Nhập địa chỉ email"
        />
      </p>

      <p className="mb-7">
        <label htmlFor="phone" className="text-title-color pb-1 block">
          Số điện thoại <span className="text-[#E01020]">*</span>
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

      <p className="mb-7">
        <label htmlFor="birthday" className="text-title-color pb-1 block">
          Ngày sinh <span className="text-[#E01020]">*</span>
        </label>
        <DatePicker
          className={`${
            errors.birthday && touched.birthday ? 'border-red-600' : 'border-border-color'
          } w-full border rounded bg-white py-2 px-4 outline-none`}
          selected={values.birthday}
          onChange={date => setFieldValue('birthday', date)}
          placeholderText="Nhập ngày sinh"
          id="birthday"
        />
        {errors.birthday && touched.birthday && <span className="block text-red-600 mt-1">{errors.birthday}</span>}
      </p>

      <p className="mb-7">
        <label className="text-title-color pb-1 block">Giới tính</label>
        <select
          value={values.gender}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${
            errors.gender && touched.gender ? 'border-red-600' : 'border-border-color'
          } w-full border rounded bg-white py-2 px-4 outline-none`}
          name="gender"
          placeholder="Giới tính"
        >
          <option value="no">Không</option>
          <option value="male">Nam</option>
          <option value="female">Nữ</option>
        </select>
        {errors.gender && touched.gender && <span className="block text-red-600 mt-1">{errors.gender}</span>}
      </p>

      <p className="mb-8">
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

      <button
        disabled={isSubmitting}
        type="submit"
        className="uppercase cursor-pointer w-full rounded font-semibold hover:bg-[#e95c2c] bg-[#ff5e2b] text-white py-3 px-5 transition-[background-color] duration-200 ease-linear"
      >
        Lưu lại
      </button>
    </form>
  );
};

export default UserProfile;
