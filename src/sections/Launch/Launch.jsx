export default function Launch() {
    return (
      <div
        className="bg-cover bg-no-repeat h-[1150px]"
        style={{ backgroundImage: "url(/last.svg)" }}
      >
        <div className="flex flex-col items-end pr-28 pt-72">
          <h3 className="text-white text-start font-bold text-6xl pr-10 pt-40">
            Launch your app today
          </h3>
          <p className="text-white text-2xl pt-5 pr-5 font-light">
            Stay on top of your competition with a great performing app. <br /> Your
            time and energy are not wasted.
          </p>
          <div className="flex justify-start items-center gap-5 pt-10 pr-[31rem]">
            <button
              href="/"
              className="font-bold items-center justify-center w-40 flex h-12 border-2 text-black border-white bg-white px-6 py-2 rounded-full hover:text-white hover:bg-transparent transition duration-300 ease-in-out"
            >
              Publish App
            </button>
          </div>
        </div>
      </div>
    );
}