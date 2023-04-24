import React, { useCallback } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Logos() {
  const myRef = React.createRef();

  const unmount = useCallback(() => {
    // Remove the page from the DOM
    if (myRef.current && myRef.current.parentNode) {
      myRef.current.parentNode.removeChild(myRef.current);
    }

    // Cancel any ongoing network requests
    if (Logos.request) {
      Logos.request.abort();
    }
  }, [myRef]);

  useEffect(() => {
    unmount();
  }, [unmount]);

  return (
    <section className=" text-gray-600 body-font bg-white md:pl-20 md:pr-20">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Hi, {localStorage.getItem("user")}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
            Advertising is the symphony of modern marketing,<br></br> a
            harmonious blend of messaging and media.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <Link
              className="flex relative"
              onClick={unmount}
              ref={Logos.myRef}
              to="/creation"
            >
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-600 mb-1">
                  ADVERTISE ON
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  YOUTUBE
                </h1>
                <p className="leading-relaxed">
                  Connect with millions of users through video advertising on
                  the world's largest video platform.
                </p>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <Link
              className="flex relative"
              onClick={unmount}
              ref={Logos.myRef}
              to="/creation"
            >
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-pink-400 mb-1">
                  ADVERTISE ON
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  INSTAGRAM
                </h1>
                <p className="leading-relaxed">
                  Reach visually-engaging audience through eye-catching photo
                  and video ads on the world's most popular photo sharing app.
                </p>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <Link
              className="flex relative"
              onClick={unmount}
              ref={Logos.myRef}
              to="/creation"
            >
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
                  ADVERTISE ON
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  TWITTER
                </h1>
                <p className="leading-relaxed">
                  Advertise in real-time to engaged and highly-targeted users on
                  the world's most open social network.
                </p>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <Link
              className="flex relative"
              onClick={unmount}
              ref={Logos.myRef}
              to="/creation"
            >
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
                  ADVERTISE ON
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  FACEBOOK
                </h1>
                <p className="leading-relaxed">
                  Reach massive audience with targeted advertising on the
                  world's largest social network.
                </p>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <Link
              className="flex relative"
              onClick={unmount}
              ref={Logos.myRef}
              to="/creation"
            >
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-gray-600 mb-1">
                  ADVERTISE ON
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  TIKTOK
                </h1>
                <p className="leading-relaxed">
                  Engage and entertain your audience with short-form video ads
                  on the world's most popular lip-sync app.
                </p>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <Link
              className="flex relative"
              onClick={unmount}
              ref={Logos.myRef}
              to="/creation"
            >
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://images.unsplash.com/photo-1611162617263-4ec3060a058e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-yellow-300 mb-1">
                  ADVERTISE ON
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  SNAPCHAT
                </h1>
                <p className="leading-relaxed">
                  Connect with younger audience through creative and interactive
                  advertising on the world's fastest-growing social network.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Logos;
