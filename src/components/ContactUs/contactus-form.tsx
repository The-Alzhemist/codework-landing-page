import React from "react";
import { useForm } from "react-hook-form";
import { ExternalPrimaryButton } from "../AppLayout/components/button/ExternalPrimaryButton";
import emailjs from "@emailjs/browser";
import axios from "axios";

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
  const { errors, isValid } = formState;

  const sendEmail = (formEmail: any) => {
    // const SERVICE_ID = "service_n3oz9jw";
    // const TEMPLATE_ID = "template_1eta5yc";
    // const PUBLIC_KEY = "vGBtBUXGtYU9DWtFv";

    // emailjs.send(SERVICE_ID, TEMPLATE_ID, formEmail, PUBLIC_KEY).then(
    //   (result) => {
    //     console.log(result.text);
    //     alert("Successful with result: " + result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //     alert("Error with result: " + error.text);
    //   }
    // );
    alert('Send msg called! 3')
    forwardToSlack()
  };

  const forwardToSlack = async () => {
    const slackWebhookURL = 'https://hooks.slack.com/services/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';
    
    // const payload = {
    //   text: `New Email: \n Subject: Hello nueng \n Message: Wow Good job`,
    // };
    
    // fetch(slackWebhookURL, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(payload),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       console.log('Email forwarded to Slack successfully.');
    //     } else {
    //       console.error('Failed to forward email to Slack:', response.statusText);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error sending email to Slack:', error);
    //   });


    const data = {
      "text": `{ Hello Name:}`,
    }

    let res = await axios.post(slackWebhookURL, JSON.stringify(data), {
      withCredentials: false,
      transformRequest: [(data) => {return data}]})

    if (res.status === 200) {
      alert("Form Submitted Successfully!")

    
    } else {
      alert("Error Occurred!")
    }
  }

  

  const endMessageToSlack = async () => {
    const webhookUrl = 'https://hooks.slack.com/services/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';
    const message = {
      text: 'Hello from my React app!',
    };

    try {
      const response = await axios.post(webhookUrl, message);
      console.log('Message sent to Slack:', response.data);
    } catch (error) {
      console.error('Error sending message to Slack:', error);
    }
  };

  return (
    <div className="relative max-w-[1440px] mx-auto py-[30px] md:py-[50px] lg:px-[150px] ">
      <form onSubmit={handleSubmit(sendEmail)} noValidate>
        {/* row 1 */}
        <div>
          <label className="flex" htmlFor="tellAboutIdeaInput">
            Tell us your idea <span className="text-red-500">*</span>
          </label>
          <textarea
            className="appearance-none border rounded py-2 px-3 w-full text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="tellAboutIdeaInput"
            placeholder="Write something ..."
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
        <div className="flex gap-x-6">
          {/* left */}
          <div className="w-full">
            {/*  */}
            <label className="flex" htmlFor="budgetInput">
              Your budget? (optional)
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
              Name <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
              Email <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
          <div className="w-full">
            <div className="flex gap-x-6">
              {/* timeSlot */}
              <div className="w-full">
                <label className="flex" htmlFor="timeSlot">
                  Preferred time slots
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 h-[38px] leading-tight focus:outline-none focus:shadow-outline"
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
              <div className="w-full">
                <label className="flex" htmlFor="timePeriod">
                  <span className="text-white">time period</span>
                </label>

                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full px-2 h-[38px]"
                  id="timePeriod"
                  {...register("timePeriod", {
                    required: "select one option",
                  })}
                >
                  <option value="13.00-14.00" selected>
                    13.00-14.00
                  </option>
                  <option value="14.00-16.00">14.00-16.00</option>
                  <option value="17.00-18.00">17.00-18.00</option>
                </select>
                <p className="text-red-500">{errors.timePeriod?.message}</p>
              </div>
            </div>

            {/*  */}
            <label className="flex" htmlFor="phoneNumber">
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
              Company name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="CompanyName"
              {...register("CompanyName")}
            />
            <p className="text-red-500">{errors.CompanyName?.message}</p>
          </div>
        </div>

        <ExternalPrimaryButton
          className={`${isValid ? "bg-teal-800" : "bg-teal-50"}`}
          pathName="#"
          disabled={!isValid}
        >
          SEND MESSAGE
        </ExternalPrimaryButton>
      </form>
    </div>
  );
};

export default ContactUsForm;
