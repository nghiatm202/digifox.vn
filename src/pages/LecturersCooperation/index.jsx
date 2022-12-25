const LecturersCooperation = () => {
  return (
    <div className="lecturers-cooperation-page py-12 md:py-16">
      <p className="mb-7">
        <label htmlFor="cooperation-first-name" className="text-title-color pb-1 block">
          First Name
        </label>
        <input
          type="text"
          id="cooperation-first-name"
          name="first_name"
          size="40"
          className="w-full border border-border-color rounded bg-white py-2 px-4 outline-none"
          aria-required={true}
          aria-invalid={false}
          placeholder="First Name"
        />
      </p>

      <p className="mb-7">
        <label htmlFor="cooperation-last-name" className="text-title-color pb-1 block">
          Last Name
        </label>
        <input
          type="text"
          id="cooperation-last-name"
          name="last_name"
          size="40"
          className="w-full border border-border-color rounded bg-white py-2 px-4 outline-none"
          aria-required={true}
          aria-invalid={false}
          placeholder="Last Name"
        />
      </p>

      <p className="mb-7">
        <label htmlFor="cooperation-name" className="text-title-color pb-1 block">
          User Name
        </label>
        <input
          type="text"
          id="cooperation-name"
          name="user_login"
          size="40"
          className="w-full border border-border-color rounded bg-white py-2 px-4 outline-none"
          aria-required={true}
          aria-invalid={false}
          placeholder="User Name"
        />
      </p>

      <p className="mb-7">
        <label htmlFor="cooperation-email" className="text-title-color pb-1 block">
          E-Mail
        </label>
        <input
          type="text"
          id="cooperation-email"
          name="email"
          size="40"
          className="w-full border border-border-color rounded bg-white py-2 px-4 outline-none"
          aria-required={true}
          aria-invalid={false}
          placeholder="E-Mail"
        />
      </p>

      <p className="mb-7">
        <label htmlFor="cooperation-password" className="text-title-color pb-1 block">
          Password
        </label>
        <input
          type="password"
          id="cooperation-password"
          name="password"
          size="40"
          className="w-full border border-border-color rounded bg-white py-2 px-4 outline-none"
          aria-required={true}
          aria-invalid={false}
          placeholder="Password"
        />
      </p>

      <p className="mb-7">
        <label htmlFor="cooperation-password-confirmation" className="text-title-color pb-1 block">
          Password Confirmation
        </label>
        <input
          type="password"
          id="cooperation-password-confirmation"
          name="password_confirmation"
          size="40"
          className="w-full border border-border-color rounded bg-white py-2 px-4 outline-none"
          aria-required={true}
          aria-invalid={false}
          placeholder="Password Confirmation"
        />
      </p>

      <button className="text-sm inline-flex bg-[#F3F3F3] w-fit rounded text-[#3E3E3E] py-3 px-5 uppercase hover:bg-[#dddddd] transition-[background-color] duration-200 ease-linear">
        Register as instructor
      </button>
    </div>
  );
};

export default LecturersCooperation;
