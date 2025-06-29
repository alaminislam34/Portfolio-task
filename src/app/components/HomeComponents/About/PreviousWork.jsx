"use client";

export default function PreviousWork() {
  return (
    <section className="bg-white py-12 w-11/12 mx-auto">
      <div className=" flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Text */}
        <div className="flex-shrink-0 text-black font-bold text-lg md:text-xl leading-tight uppercase">
          <p>
            PREVIOUSLY <br /> WORKED ON
          </p>
        </div>

        {/* Right Logos */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {/* 1st Row */}
          <div className="py-2 px-4 text-center rotate-6 rounded-full border">
            awwwards.
          </div>
          <div className="py-2 px-4 text-center rounded-full border">
            CSS WINNER
          </div>
          <div className="py-2 px-4 text-center rounded-full border -rotate-6 ">
            /thoughtworks
          </div>

          <div className="py-2 px-4 text-center rounded-full border">
            facebook
          </div>
          <div className="py-2 px-4 text-center rounded-full border rotate-6">
            <span className="text-lg">🧩</span> CSSDesignAwards
          </div>
          <div className="py-2 px-4 text-center rounded-full border -rotate-4">
            <span className="text-lg">🧱</span> AUTODESK
          </div>
        </div>
      </div>
    </section>
  );
}
