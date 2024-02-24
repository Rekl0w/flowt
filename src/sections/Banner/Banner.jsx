import Topbar from "../Topbar/Topbar";

export default function Banner() {
  return (
    <div
      className="bg-cover bg-no-repeat w-full h-[1100px]"
      style={{ backgroundImage: "url(/home.svg)" }}
    >
      <Topbar />

      <div className="w-1/2 flex-col justify-center flex pl-40 mt-64">
        <h1 className="text-9xl font-bold text-white text-start pt-20">
          App Builder
        </h1>
        <h3 className="text-white text-5xl font-bold pt-10">
          For iOS & Android
        </h3>
        <p className="text-white text-start text-lg pt-5 font-light">
          Our powerful app builder will help you build your desired app in
          minutes <br /> without coding knowledge and once your app is ready,
          you can publish <br /> it on Google Play and App Store.
        </p>
        <div className="flex justify-start gap-10 pt-10 items-center">
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
