import React from "react";
import { SELECTED_OPTION_LIST } from "@/constants/contactPage/constants";
import withFormPage from "./withFormPage";

import TextAreaField from "@/components/form/TextAreaField/TextAreaField";
import InputField from "@/components/form/InputField/InputField";
import FileUploadField from "@/components/form/FileUploadField/FileUploadField";
import SelectedField from "@/components/form/SelectedField/SelectedField";
import { ExternalPrimaryButton } from "@/components/buttons/ExternalPrimaryButton";

import CheckBoxSimpleField from "@/components/form/CheckBoxSimpleField/CheckBoxSimpleField";
import BackgroundGradientBlur from "@/components/BackgroundGradientBlur/BackgroundGradientBlur";
import { WithFormPageProps } from "./interface";
import StatusMessage from "./component/StatusMessage/StatusMessage";
import SocialsSection from "./component/SocialsSection/SocialsSection";

const FormPage = ({
  handleSubmit,
  errors,
  isValid,
  state,
  control,
  sendDataToFromSpree,
  isShowOtherChannel,
  register,
  onSubmit,
}: WithFormPageProps) => {
  return (
    <>
      <div className="bg-white rounded-xl relative w-full max-w-[1140px] mx-auto py-[30px] md:py-[50px] lg:px-[50px] my-5 sm:my-0">
        <BackgroundGradientBlur className="top-0 left-0" />
        <BackgroundGradientBlur className="top-0 right-0" />
        <h1 className="text-center mb-20">
          <div className="text-2xl font-light mr-20">Wanna talk with us?</div>
          <div className="font-normal inline bg-line text-3xl md:text-5xl ml-20">
            CONTACT US
          </div>
        </h1>
        <form
          className=" max-w-[1440px] px-2 md:px-5"
          encType="multipart/form-data"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* row 1 */}
          <div>
            <TextAreaField
              name="idea"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Tell us your idea required.",
                },
              }}
              placeholder="Write something..."
              label="Tell us your idea"
              className="mb-[12px]"
              rows={5}
            />
          </div>
          {/* row 2 */}
          <div className="flex flex-col sm:flex-row gap-x-6">
            {/* left */}
            <div className="w-full">
              <InputField
                name="budget"
                control={control}
                rules={{
                  required: { value: false, message: "" },
                }}
                suffixIcon="฿"
                placeholder="Write something..."
                type="text"
                label="Your budget? (optional)"
                className="mb-[12px]"
              />

              <InputField
                name="name"
                control={control}
                rules={{
                  required: { value: true, message: "Name is Required." },
                }}
                placeholder="Write something..."
                type="text"
                label="Name"
                className="mb-[12px]"
              />
              <InputField
                name="email"
                control={control}
                rules={{
                  required: { value: true, message: "Email is Required." },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid pattern email address",
                  },
                }}
                placeholder="Write something..."
                type="text"
                label="Email"
                className="mb-[12px]"
              />

              <FileUploadField
                control={control}
                disabled={false}
                rules={{
                  required: {
                    value: false,
                    message: "",
                  },
                }}
                name="attachment"
                label="File Attachment"
                className="w-full  mb-5"
              />
            </div>
            {/* right */}
            <div className="w-full">
              <div className="flex gap-x-3 sm:gap-x-6">
                <div className="w-full">
                  <InputField
                    name="timeSlot"
                    control={control}
                    rules={{
                      required: {
                        value: false,
                        message: "",
                      },
                    }}
                    type="date"
                    label="Preferred time slots"
                    className="mb-[12px] "
                    inputClassName="h-[38px]"
                  />
                </div>
                <div className="w-full">
                  <SelectedField
                    name="timePeriod"
                    control={control}
                    rules={{
                      required: {
                        value: false,
                        message: "",
                      },
                    }}
                    label="Time Period"
                    className="mb-[12px]"
                    optionList={SELECTED_OPTION_LIST}
                  />
                </div>
              </div>

              <InputField
                name="phoneNumber"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Phone number is Required.",
                  },
                }}
                placeholder="Write something..."
                type="number"
                label="Phone number"
                className="mb-[12px]"
              />

              <InputField
                name="companyName"
                control={control}
                rules={{
                  required: { value: false, message: "" },
                }}
                placeholder="Write something..."
                type="text"
                label="Company name"
                className="mb-[12px]"
              />
            </div>
          </div>

          <div className="mb-5 ">
            <label className="flex">How did you hear about us?</label>
            <div className="flex gap-x-4 items-start flex-wrap">
              <CheckBoxSimpleField
                control={control}
                name="channels.searchEngine"
                label="Search engine (Google, Yahoo, etc.)"
                labelClassName=""
                rules={{
                  required: { value: false, message: "" },
                }}
                inputClassName="ml-0"
              />
              <CheckBoxSimpleField
                control={control}
                name="channels.social"
                label="Social media"
                rules={{
                  required: { value: false, message: "" },
                }}
                inputClassName="ml-0"
              />
              <CheckBoxSimpleField
                control={control}
                name="channels.friend"
                label="Friend/Colleague"
                inputClassName="ml-0"
              />
              <div className="flex flex-col">
                <CheckBoxSimpleField
                  control={control}
                  name="channels.other"
                  rules={{
                    required: { value: false, message: "" },
                  }}
                  label="Other (please specify)"
                  inputClassName="ml-0"
                />

                {isShowOtherChannel && (
                  <InputField
                    name="Others"
                    control={control}
                    rules={{
                      required: { value: false, message: "" },
                    }}
                    placeholder="Write something..."
                    type="text"
                    label=""
                    className="mb-[12px] ml-2"
                  />
                )}
              </div>
            </div>
          </div>

          <p className="mb-5  text-sm">
            *We will be in touch with you shortly through the number +66 83 987
            4997.
          </p>

          <div className=" flex justify-end">
            <ExternalPrimaryButton pathName="#" disabled={!isValid}>
            Submit my idea
            </ExternalPrimaryButton>
          </div>
        </form>

        <StatusMessage
          submitting={state.submitting}
          succeeded={state.succeeded}
          errors={state.errors}
        />
        <SocialsSection />
      </div>
    </>
  );
};
const WrappedComponent = withFormPage(FormPage);
export default WrappedComponent;
