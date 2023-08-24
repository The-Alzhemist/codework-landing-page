import React from "react";
import { useForm as useFormSpree } from "@formspree/react";
import FormTextareaInput from "./component/formStringInput/FormTextareaInput";
import FormStringInput from "./component/formStringInput/FormStringInput";
import FormDateInput from "./component/formDateInput/FormDateInput";
import { ExternalPrimaryButton } from "../AppLayout/components/button/ExternalPrimaryButton";
import BackgroundGradientBlur from "../backgroundGradientBlur/BackgroundGradientBlur";
import FormSelectedInput from "./component/formSelectedInput/FormSelectedInput";
import FormEmailInput from "./component/formEmailInput/FormEmailInput";
import withFormSpreeForm from "./withFormSpree-form";
import StatusMessage from "./component/statusMessage/StatusMessage";
import FormCheckboxInput from "./component/formCheckboxInput/FormCheckboxInput";
import { FORMSPREE_LANDING_TEST_KEY } from "@/config/environment";
import { checkboxList } from "./component/formCheckboxInput/constants";
import { WithFormSpreeFormProps } from "./interface";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactForm = ({
  isShowOtherChannel,
  setIsShowOtherChannel,
  register,
  handleSubmit,
  errors,
  isValid,
}: WithFormSpreeFormProps) => {
  const [state, sendDataToFromSpree] = useFormSpree(FORMSPREE_LANDING_TEST_KEY);

  return (
    <>
      <div className="bg-white rounded-xl relative max-w-[1440px] mx-auto py-[30px] md:py-[50px] lg:px-[50px] my-5 sm:my-0">
        <BackgroundGradientBlur className="top-0 left-0" />
        <BackgroundGradientBlur className="top-0 right-0" />
        <h1 className="text-center mb-20">
          <div className="text-2xl font-light mr-20">Wanna talk with us?</div>
          <div className="font-normal inline bg-line text-3xl md:text-5xl ml-20">
            CONTACT US
          </div>
        </h1>
        <form
          className="w-full max-w-[1440px] px-2 md:px-5"
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
          {/* row 2 */}
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
              <div className="flex gap-x-3 sm:gap-x-6">
                <div className="w-full">
                  <FormDateInput
                    labelName=" Preferred time slots"
                    inputName="timeSlot"
                    register={register}
                    isRequired={false}
                  />
                </div>
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
            <FormCheckboxInput
              labelName="How did you hear about us?"
              inputName="channel"
              checkboxList={checkboxList}
              register={register}
              isShowOtherChannel={isShowOtherChannel}
              setIsShowOtherChannel={setIsShowOtherChannel}
            />
          </div>

          <div className="mb-5  text-sm">
            *We will be in touch with you shortly through the number +66 83 987
            4997.
          </div>

          {/* {errors && (
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
          )} */}

          <ExternalPrimaryButton pathName="#" disabled={!isValid}>
            SEND MESSAGE
          </ExternalPrimaryButton>
        </form>
        <StatusMessage
          submitting={state.submitting}
          succeeded={state.succeeded}
          errors={state.errors}
        />

      

        <button className="border mx-2"
          onClick={() =>
            toast.info("Sending your message, please wait...", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          }
        >
          Toast sending...
        </button>

        <button className="border mx-2"
          onClick={() =>
            toast.success("Your message has been sent successfully. Thank you for reaching out to us!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          }
        >
          Toast successfully
        </button>
      </div>
    </>
  );
};
const WrappedComponent = withFormSpreeForm(ContactForm);
export default WrappedComponent;
