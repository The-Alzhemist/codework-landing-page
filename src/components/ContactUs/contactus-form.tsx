import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  tellAboutIdeaInput: string;
  budgetInput: string;
  name: string;
  email: string;
  timeSlot: string;
  timePeriod: string;
  phoneNumber: number;
  CompanyName: string;
};

const ContactUsForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      tellAboutIdeaInput: "",
      budgetInput: "",
      name: "",
      email: "",
      timeSlot: "",
      timePeriod: "",
      CompanyName: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmitHandler = (data: FormValues) => {
    console.log("data >>", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
        {/* row 1 */}
        <div>
          <label className="flex" htmlFor="tellAboutIdeaInput">
            tellAboutIdeaInput
          </label>
          <input
            className="border-2 rounded-md"
            type="text"
            id="tellAboutIdeaInput"
            {...register("tellAboutIdeaInput", {
              required: {
                value: true,
                message: "tellAboutIdeaInput is required",
              },
            })}
          />
          <p className="text-red-500">{errors.tellAboutIdeaInput?.message}</p>
        </div>

        {/* row2 */}
        <div className="flex">
          {/* left */}
          <div>
            {/*  */}
            <label className="flex" htmlFor="budgetInput">
              budgetInput
            </label>
            <input
              className="border-2 rounded-md"
              type="text"
              id="budgetInput"
              {...register("budgetInput", {
                required: {
                  value: true,
                  message: "budgetInput is required",
                },
              })}
            />
            <p className="text-red-500">{errors.budgetInput?.message}</p>

            {/*  */}
            <label className="flex" htmlFor="name">
              name
            </label>
            <input
              className="border-2 rounded-md"
              type="text"
              id="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "name is required",
                },
              })}
            />
            <p className="text-red-500">{errors.name?.message}</p>

            {/*  */}
            <label className="flex" htmlFor="email">
              email
            </label>
            <input
              className="border-2 rounded-md"
              type="text"
              id="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "email is required",
                },
              })}
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>

          {/* right */}
          <div>
            <div className="flex">
              {/* timeSlot */}
              <div>
                <label className="flex" htmlFor="timeSlot">
                  timeSlot
                </label>
                <input
                  className="border-2 rounded-md"
                  type="date"
                  id="timeSlot"
                  {...register("timeSlot", {
                    required: {
                      value: true,
                      message: "timeSlot is required",
                    },
                  })}
                />
                <p className="text-red-500">{errors.timeSlot?.message}</p>
              </div>

              {/* timePeriod */}
              <div>
                <label className="flex" htmlFor="timePeriod">
                  time period
                </label>
                {/* <input
                className="border-2 rounded-md"
                type="text"
                id="timePeriod"
                {...register("timePeriod", {
                  required: {
                    value: true,
                    message: "timePeriod is required",
                  },
                })}
              /> */}
                <select
                className="border-2"
                  id="timePeriod" 
                  {...register("timePeriod",{
                    required: "select one option",
                  })}
                >
                  <option value="13.00-14.00">Function 1</option>
                  <option value="14.00-16.00">Function 2</option>
                  <option value="17.00-18.00">Function 3</option>
                </select>
                <p className="text-red-500">{errors.timePeriod?.message}</p>
              </div>
            </div>

            {/*  */}
            <label className="flex" htmlFor="phoneNumber">
              phoneNumber
            </label>
            <input
              className="border-2 rounded-md"
              type="text"
              id="phoneNumber"
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "phoneNumber is required",
                },
              })}
            />
            <p className="text-red-500">{errors.phoneNumber?.message}</p>
            {/*  */}
            <label className="flex" htmlFor="CompanyName">
              CompanyName
            </label>
            <input
              className="border-2 rounded-md"
              type="text"
              id="CompanyName"
              {...register("CompanyName", {
                required: {
                  value: true,
                  message: "CompanyName is required",
                },
              })}
            />
            <p className="text-red-500">{errors.CompanyName?.message}</p>
          </div>
        </div>

        <button className="bg-teal-800 p-2 text-white">Submit</button>
      </form>
    </div>
  );
};

export default ContactUsForm;
