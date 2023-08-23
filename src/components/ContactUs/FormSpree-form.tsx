import React from "react";
import { useForm as useFormSpree } from "@formspree/react";
import { FormValues } from "./interface";
import { useForm } from "react-hook-form";
import FormTextareaInput from "./component/formStringInput/FormTextareaInput";
import FormStringInput from "./component/formStringInput/FormStringInput";
import FormDateInput from "./component/formDateInput/FormDateInput";
import { ExternalPrimaryButton } from "../AppLayout/components/button/ExternalPrimaryButton";
import BackgroundGradientBlur from "../backgroundGradientBlur/BackgroundGradientBlur";
import FormSelectedInput from "./component/formSelectedInput/FormSelectedInput";
import FormEmailInput from "./component/formEmailInput/FormEmailInput";
import withFormSpreeForm from "./withFormSpree-form";
const ContactForm = () => {
    const [state, sendDataToFromSpree] = useFormSpree("xwkdoowe");
    const form = useForm<FormValues>();
    const { register, handleSubmit, formState } = form;
    const { errors, isValid } = formState;
 
  return (
    <>
      <div className="bg-white rounded-xl relative max-w-[1440px] mx-auto py-[30px] md:py-[50px] lg:px-[150px]">
        <BackgroundGradientBlur className="top-0 left-0" />
        <BackgroundGradientBlur className="top-0 right-0" />
        <h1 className="text-center mb-20">
          <div className="text-2xl font-light">Wanna talk with us?</div>
          <div className="font-normal inline bg-line ml-3 text-3xl md:text-5xl">
            CONTACT US
          </div>
        </h1>
        <form
          className="max-w-[1440px] px-2 md:px-5"
          onSubmit={handleSubmit(sendDataToFromSpree)}
          noValidate
        >
          {/* row 1 */}
          <div>
            <FormTextareaInput
              labelName="Tell us your idea"
              inputName="idea"
              register={register}
              isRequired={true}
              errors={errors?.idea?.message}
            />
          </div>

          {/* row2 */}
          <div className="flex flex-col sm:flex-row gap-x-6">
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
                errors={errors?.name?.message}
              ></FormStringInput>

              <FormEmailInput
                labelName="Email"
                inputName="email"
                register={register}
                isRequired={true}
                errors={errors?.email?.message}
              />
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
                  <FormSelectedInput
                    labelName="timePeriod"
                    inputName="timePeriod"
                    register={register}
                    isRequired={false}
                  />
                </div>
              </div>

              <FormStringInput
                labelName=" Phone number"
                inputName="phoneNumber"
                register={register}
                isRequired={true}
                errors={errors?.phoneNumber?.message}
              ></FormStringInput>

              <FormStringInput
                labelName="Company Name"
                inputName="companyName"
                register={register}
                isRequired={false}
              ></FormStringInput>
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="how did you hear about us">
              How did you hear about us?
            </label>
            <div className="flex flex-wrap gap-x-5">
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

          <div className="mb-5  text-sm">
            *We will be in touch with you shortly through the number +66 83 987
            4997.
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
            {`Sorry, we couldn't send your message. Please try again`}
          </div>
        )}
      </div>
    </>
  );
};


const WrappedComponent = withFormSpreeForm(ContactForm);
export default WrappedComponent;