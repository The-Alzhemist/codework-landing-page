import React from "react";
import { useForm as useFormSpree } from "@formspree/react";
import { FormValues } from "./interface";
import { useForm } from "react-hook-form";
import FormTextareaInput from "./component/formStringInput/FormTextareaInput";
import FormStringInput from "./component/formStringInput/FormStringInput";
import FormDateInput from "./component/formDateInput/FormDateInput";
import { ExternalPrimaryButton } from "../AppLayout/components/button/ExternalPrimaryButton";
const ContactForm = () => {
  const [state, sendDataToFromSpree] = useFormSpree("xwkdoowe");

  const form = useForm<FormValues>();
  const { register, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  return (
    <>
      <div className="relative max-w-[1440px] mx-auto py-[30px] md:py-[50px] lg:px-[150px] ">
        <form onSubmit={handleSubmit(sendDataToFromSpree)} noValidate>
          {/* row 1 */}
          <div>
            <FormTextareaInput
              labelName="Tell us your idea"
              inputName="idea"
              register={register}
              isRequired={true}
              errors={errors.idea?.message}
            />
          </div>

          {/* row2 */}
          <div className="flex gap-x-6">
            {/* left */}
            <div className="w-full">
              <FormStringInput
                labelName="Your budget? (optional)"
                inputName="budget"
                register={register}
                isRequired={false}
              ></FormStringInput>
              <FormStringInput
                labelName="Name"
                inputName="name"
                register={register}
                isRequired={true}
                errors={errors.name?.message}
              ></FormStringInput>

              <label className="flex" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email?.message && "border-red-500"
                }`}
                type="text"
                id="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid pattern email address",
                  },
                })}
              />
              {/* <p className="text-red-500">{errors.email?.message}</p> */}
            </div>

            {/* right */}
            <div className="w-full">
              <div className="flex gap-x-6">
                <div className="w-full">
                  <FormDateInput
                    labelName=" Preferred time slots"
                    inputName="timeSlot"
                    register={register}
                    isRequired={false}
                  />
                </div>

                {/* timePeriod */}
                <div className="w-full">
                  <label className="flex" htmlFor="timePeriod">
                    <span className="text-white">time period</span>
                  </label>

                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full px-2 h-[38px]"
                    id="timePeriod"
                    {...register("timePeriod")}
                  >
                    <option value="-">Select time period</option>
                    <option value="13.00-14.00">13.00-14.00</option>
                    <option value="14.00-16.00">14.00-16.00</option>
                    <option value="17.00-18.00">17.00-18.00</option>
                  </select>
                  {/* <p className="text-red-500">{errors.timePeriod?.message}</p> */}
                  <p></p>
                </div>
              </div>

              <FormStringInput
                labelName=" Phone number"
                inputName="phoneNumber"
                register={register}
                isRequired={true}
                errors={errors.phoneNumber?.message}
              ></FormStringInput>

              <FormStringInput
                labelName="Company Name"
                inputName="companyName"
                register={register}
                isRequired={false}
              ></FormStringInput>
            </div>
          </div>

          <div>
            <label htmlFor="how did you hear about us">
              How did you hear about us?
            </label>
            <div className="flex gap-x-5">
              <div className="">
                <input
                  type="checkbox"
                  value="Search engine (Google, Yahoo, etc.)"
                  {...register("channels")}
                  className="mr-2"
                />
                <label htmlFor="">Search engine (Google, Yahoo, etc.)</label>
              </div>
              <div className="">
                <input
                  type="checkbox"
                  value="Social Media"
                  {...register("channels")}
                  className="mr-2"
                />
                <label htmlFor="">Social media</label>
              </div>

              <div className="">
                <input
                  type="checkbox"
                  value="Friend/Colleague"
                  {...register("channels")}
                  className="mr-2"
                />
                <label htmlFor="">Friend/Colleague</label>
              </div>

              <div className="">
                <div>
                  <input
                    type="checkbox"
                    value="OtherChannel"
                    {...register("channels")}
                    className="mr-2"
                  />
                  <label htmlFor="">Other (please specify)</label>
                </div>

                <div>
                  <FormStringInput
                    labelName=""
                    inputName="otherChannel"
                    register={register}
                    isRequired={false}
                  ></FormStringInput>
                </div>
              </div>
            </div>
          </div>

          {errors && (
            <div className="mb-5">
              {errors.idea && (
                <p className="text-red-500">** {errors.idea?.message}</p>
              )}
              {errors.name && (
                <p className="text-red-500">** {errors.name?.message}</p>
              )}
              {errors.email && (
                <p className="text-red-500">** {errors.email?.message}</p>
              )}
              {errors.phoneNumber && (
                <p className="text-red-500">** {errors.phoneNumber?.message}</p>
              )}
            </div>
          )}

          <ExternalPrimaryButton pathName="#" disabled={!isValid}>
            SEND MESSAGE
          </ExternalPrimaryButton>
        </form>
        {state.submitting && (
          <div className="text-secondary-900 mt-3">
            Sending your message, please wait...
          </div>
        )}
        {state.succeeded && (
          <div className="text-primary-800 mt-3">
            Your message has been sent successfully. Thank you for reaching out
            to us!
          </div>
        )}
          {state.errors && (
          <div className="text-red-500 mt-3">
            Sorry, we couldn't send your message. Please try again
          </div>
        )}
      </div>
    </>
  );
};

export default ContactForm;
