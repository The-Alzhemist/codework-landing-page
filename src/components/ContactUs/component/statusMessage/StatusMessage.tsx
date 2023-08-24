import React from 'react'
import { FormSpreeStatus } from './interface'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StatusMessage = (state:FormSpreeStatus) => {
    if(state.submitting) {
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

     
    } else if (state.succeeded ) {
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
    } else if (state.errors) {
       return(<div className="text-red-500 mt-3 px-2 md:px-5">
       {`Sorry, we couldn't send your message. Please try again`}
     </div>) 
    }
}

export default StatusMessage
