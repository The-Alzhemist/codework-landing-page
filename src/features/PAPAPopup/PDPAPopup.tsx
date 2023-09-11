import { SimpleButton } from '@/components/buttons/SimpleButton'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

export const PopupPDPA = ({ onAccept }: any) => {
    
    const [isOpen, setIsOpen] = useState(true);
    const handleClose = () => {
        setIsOpen(false);
        if (onAccept) {
            Cookies.set('consent', 'true', { expires: 365 }); // Expires in 365 days
            onAccept();
        }
    };

    return (
        <>
            {isOpen && <section className="flex justify-center shadow-2xl">
                <div className='bg-white  border-t-2 sm:border-2 border-gray-900 fixed z-50 bottom-0 md:bottom-10 p-5 sm:rounded-lg  w-full max-w-[800px] flex justify-between gap-x-5 flex-col sm:flex-row'>
                    <div className="flex flex-col justify-center mb-5 sm:mb-0">
                        <div className="text-xl font-semibold mb-2">The website uses cookies</div>
                        <div className="text-sm font-light">This website uses cookies. We use cookies to enhance performance and improve your experience while using the website.</div>
                    </div>

                    <div className="flex flex-row-reverse gap-x-3 justify-center  sm:flex-col">
                        <SimpleButton className="mb-2 w-[150px] h-[45px]" onClickHandler={() => handleClose()}>Accept</SimpleButton>
                        {/* <SimpleButton className="w-[150px] border-slate-100 bg-slate-100 opacity-100 h-[45px]" onClickHandler={() => setAllowInformation(false)}>Cancel</SimpleButton> */}
                    </div>
                </div>
            </section>}
        </>

    )
}
