'use client';

import { useState, useEffect } from 'react';

// Self-contained cookie utilities to avoid external dependencies
const setCookie = (name: string, value: string, days: number): void => {
  if (typeof document === 'undefined') {
    return;
  }
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') {
    return null;
  }
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
};

const CookieNoticeModal = (): JSX.Element | null => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!getCookie('fxgt_cookie_consent')) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 500); // Delay for animation
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAgree = (): void => {
        setCookie('fxgt_cookie_consent', 'true', 365);
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <>
            <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm animate-in fade-in duration-300" aria-hidden="true" />
            <div
                className="fixed top-1/2 left-1/2 z-[9999] w-[90%] max-w-[500px] -translate-x-1/2 -translate-y-1/2"
                role="dialog"
                aria-modal="true"
                aria-labelledby="cookie-notice-title"
                aria-describedby="cookie-notice-description"
            >
                <div className="relative bg-white rounded-2xl p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-in fade-in zoom-in-95 duration-300 ease-out">
                    <h4 id="cookie-notice-title" className="font-display text-[#1a1a1a] text-[1.75rem] font-extrabold mb-4">
                        Important Note!
                    </h4>
                    <div id="cookie-notice-description">
                        <p className="font-body text-[#333333] text-base leading-[1.5] font-normal mb-4">
                            We use cookies to ensure you get the best experience on our website.
                        </p>
                        <p className="font-body text-[#666666] text-[15px] font-normal">
                            By clicking 'Agree', you accept our use of cookies as outlined in our{' '}
                            <a href="#"className="underline text-[#0f766e] hover:text-primary transition-colors">
                                cookies policy
                            </a>
                        </p>
                    </div>
                    <button
                        onClick={handleAgree}
                        className="mt-6 bg-white border-2 border-[#0f766e] text-[#0f766e] py-3 px-12 rounded-lg font-body text-base font-semibold transition-colors duration-300 ease-out hover:bg-[#0f766e] hover:text-white"
                    >
                        Agree
                    </button>
                </div>
            </div>
        </>
    );
};

export default CookieNoticeModal;