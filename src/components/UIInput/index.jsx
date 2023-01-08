import { useField } from 'formik';

const UIInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <p className="mb-7">
      <label className="text-title-color pb-1 block">{label}</label>
      <select
        {...field}
        {...props}
        className={`${
          meta.touched && meta.error ? 'border-red-600' : 'border-border-color'
        } w-full border rounded bg-white py-2 px-4 outline-none`}
      />
      {meta.touched && meta.error && <span className="block text-red-600 mt-1">{meta.error}</span>}
    </p>
  );
};
export default UIInput;
