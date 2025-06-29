"use client";

export default function PreviousWork() {
  return (
    <section className="py-12 w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left Text */}
        <div className="flex-shrink-0 font-bold text-lg md:text-xl leading-tight uppercase text-black dark:text-white">
          <p>
            PREVIOUSLY <br /> WORKED ON
          </p>
        </div>

        {/* Right Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 w-full">
          {/* 1 */}
          <div className="py-2 px-4 text-center rotate-6 rounded-full border border-black  text-black dark:text-white dark:border-white ">
            awwwards.
          </div>
          {/* 2 */}
          <div className="py-2 px-4 text-center rounded-full border border-black  text-black dark:text-white dark:border-white ">
            CSS WINNER
          </div>
          {/* 3 */}
          <div className="py-2 px-4 text-center rounded-full border border-black  text-black dark:text-white dark:border-white  -rotate-6">
            /thoughtworks
          </div>
          {/* 4 */}
          <div className="py-2 px-4 text-center rounded-full border border-black  text-black dark:text-white dark:border-white ">
            facebook
          </div>
          {/* 5 */}
          <div className="py-2 px-4 text-center rounded-full border border-black  text-black dark:text-white dark:border-white  rotate-6 flex items-center justify-center gap-1">
            <span className="text-lg">🧩</span> CSSDesignAwards
          </div>
          {/* 6 */}
          <div className="py-2 px-4 text-center rounded-full border border-black  text-black dark:text-white dark:border-white  -rotate-4 flex items-center justify-center gap-1">
            <span className="text-lg">🧱</span> AUTODESK
          </div>
        </div>
      </div>
    </section>
  );
}
