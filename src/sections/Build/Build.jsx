export default function Build() {
  return (
    <div
      className="bg-cover bg-no-repeat w-full h-[1000px]"
      style={{ backgroundImage: "url(/home3.svg)" }}
    >
      <div className="flex flex-col items-end pr-28 pt-72">
        <h3 className="text-white text-start font-bold text-6xl pr-36">
          Build it on desktop, <br /> launch it mobile
        </h3>
        <p className="text-white text-2xl pt-5 pr-5 font-light">
          Our powerful app builder will help you build your desired
          <br /> app in minutes without coding knowledge and once your
          <br /> app is ready, you can publish it on Google Play and App Store.
        </p>
        <div className="flex justify-start items-center gap-5 pt-10 pr-[23rem]">
          <button
            href="/"
            className="font-bold items-center justify-center w-40 flex h-12 border-2 text-black border-white bg-white px-6 py-2 rounded-full hover:text-white hover:bg-transparent transition duration-300 ease-in-out"
          >
            Publish App
          </button>

          <button className="flex text-white gap-3">
            <img src="/play.svg" className="w-6 h-6" alt="play" />
            View Demo
          </button>
        </div>
      </div>
    </div>
  );
}
