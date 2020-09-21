import React, { useEffect } from "react";

export const Profile = () => {
  return (
    <section className="text-gray-700">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className=" mx-auto">
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center ">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium  mt-4 text-lg">青山 有久都</h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base text-gray-600">
                  SNSリンクか自己紹介 SNSリンクか自己紹介 SNSリンクか自己紹介
                  SNSリンクか自己紹介
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                自己紹介 自己紹介 自己紹介 自己紹介 自己紹介 自己紹介 自己紹介
                自己紹介 自己紹介 自己紹介 自己紹介 自己紹介 自己紹介
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
