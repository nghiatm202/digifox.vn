import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const registerSchema = yup.object().shape({
  name: yup.string().required('Trường này là bắt buộc.'),
  email: yup.string().email('Trường này phải là một địa chỉ email hợp lệ.').required('Trường này là bắt buộc.'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Trường này phải là một số điện thoại hợp lệ.')
    .required('Trường này là bắt buộc.'),
  password: yup.string().min(6, 'Trường này phải có tối thiểu 6 kí tự.').required('Trường này là bắt buộc.'),
  country: yup.string().required('Trường này là bắt buộc.'),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email('Trường này phải là một địa chỉ email hợp lệ.').required('Trường này là bắt buộc.'),
  password: yup.string().min(6, 'Trường này phải có tối thiểu 6 kí tự.').required('Trường này là bắt buộc.'),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email('Trường này phải là một địa chỉ email hợp lệ.').required('Trường này là bắt buộc.'),
});

export const userProfileSchema = yup.object().shape({
  name: yup.string().required('Trường này là bắt buộc.'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Trường này phải là một số điện thoại hợp lệ.')
    .required('Trường này là bắt buộc.'),
  birthday: yup.string().required('Trường này là bắt buộc.'),
  country: yup.string().required('Trường này là bắt buộc.'),
  gender: yup.string().required('Trường này là bắt buộc.'),
});

export const userSecuritySchema = yup.object().shape({
  current_password: yup.string().min(6, 'Trường này phải có tối thiểu 6 kí tự.').required('Trường này là bắt buộc.'),
  password: yup.string().min(6, 'Trường này phải có tối thiểu 6 kí tự.').required('Trường này là bắt buộc.'),
  password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Trường này không khớp.'),
});
