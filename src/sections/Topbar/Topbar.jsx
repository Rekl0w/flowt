export default function Topbar() {
  return (
    <div className="w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-around gap-20 items-center text-center">
            <button href="/">
              <h1 className="text-4xl font-bold text-white">flowt</h1>
            </button>
            <div>
              <ul className="flex space-x-8 text-lg gap-8 text-white">
                <li className="flex flex-col">
                  <button href="/">
                    Home
                  </button>
                  <div className="bg-white h-1"></div>
                </li>
                <li className="flex ">
                  <button href="/">
                    Solutions
                  </button>
                </li>
                <li className="flex ">
                  <button href="/">
                    Pricing
                  </button>
                </li>
                <li className="flex ">
                  <button href="/">
                    Developers
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="">
            <ul className="flex gap-5 items-center">
              <li>
                <button
                  href="/"
                  className="text-white border-2 border-white rounded-full w-24 h-12 font-bold flex items-center text-center justify-center gap-2 hover:bg-white hover:text-black transition duration-300 ease-in-out"
                >
                  Log In
                </button>
              </li>
              <li>
                <button
                  href="/"
                  className="font-bold items-center justify-center flex h-12 border-2 text-black border-white bg-white px-6 py-2 rounded-full hover:text-white hover:bg-transparent transition duration-300 ease-in-out"
                >
                  Publish App
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
