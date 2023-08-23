import React from 'react'
import { FormSpreeStatus } from './interface'


const StatusMessage = (state:FormSpreeStatus) => {
    if(state.submitting) {
        return (<div className="text-secondary-900 mt-3 px-2 md:px-5">
        {`Sending your message, please wait...`} 
      </div>)
    } else if (state.succeeded ) {
        return (<div className="text-primary-800 mt-3 px-2 md:px-5">
        {`Your message has been sent successfully. Thank you for reaching out
        to us!`}
      </div>)
    } else if (state.errors) {
       return(<div className="text-red-500 mt-3 px-2 md:px-5">
       {`Sorry, we couldn't send your message. Please try again`}
     </div>) 
    }
}

export default StatusMessage
