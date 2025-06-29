"use client";
const Footer = () => {
  return (
    <div className="w-11/12 mx-auto py-16 max-w-7xl">
      <div className="flex flex-row justify-between">
        <div className="w-2/5">
          <h1 className="text-lg md:text-xl text-[#C5FF41] font-bold">
            DEVLOP.ME
          </h1>
        </div>
        <div className="w-3/5">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            As you can
          </h1>
          <br />
          <br />
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="text-left">
              <div>
                <p className="text-gray-500 text-sm mb-4">Say hello</p>
                <p className="text-white/80 text-sm">HELLO@DEVLOP.ME.COM</p>
                <p className="text-white/80 text-sm">MAHBUBUL@ME.COM</p>
              </div>
              <br />
              <br />
              <div>
                <p className="text-gray-500 text-sm mb-4">Say hello</p>
                <p className="text-white/80 text-sm">+784549 4981 00</p>
                <p className="text-white/80 text-sm">+8845 0100 211</p>
              </div>
            </div>
            <div className="text-left">
              <p className="text-gray-500 text-sm mb-4">Menu</p>
              <ul className="uppercase space-y-2 text-white/70 *:hover:cursor-pointer *:hover:underline">
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="text-left">
              <p className="text-gray-500 text-sm mb-4">Menu</p>
              <ul className="uppercase space-y-2 text-white/70 *:hover:cursor-pointer *:hover:underline">
                <li>TWITTER</li>
                <li>INSTAGRAM</li>
                <li>FACEBOOK</li>
                <li>BEHANCE</li>
                <li>DRIBBBLE</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-wrap gap-4 justify-between mt-20">
        <p>BESNIK</p>
        <p className="text-white/50">© devlop.me 2022</p>
        <p className="text-white/50">PRIVACY - TERMS</p>
      </div>
    </div>
  );
};

export default Footer;
