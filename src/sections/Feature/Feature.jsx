export default function Feature() {
    return (
      <div className="flex justify-between px-40 pt-20 items-center bg-[#F1F5F9]">
        <div className="gap-10 flex flex-col">
          <h1 className="text-[#0F172A] text-7xl font-bold">
            Turpis risus facilisi
          </h1>
          <p className="text-[#0F172A] text-xl leading-loose">
            Augue feugiat mi, massa amet. Id purus aliquam bibendum <br /> purus
            dictum elementum nullam odio tellus. Imperdiet feugiat <br /> est
            odio fames magna orci. Augue purus aliquam, placerat <br />{" "}
            vestibulum dictum pellentesque molestie. Facilisis pretium <br />{" "}
            porta congue proin.
          </p>
        </div>
        <div>
          <img src="/laptop.svg" alt="laptop" className="w-[800px]" />
        </div>
      </div>
    );
    }