export const TrainsAndBuses = () => {
  return (
    <div>
      <div className="p-4 md:p-8 md:pt-16 max-w-6xl mx-auto relative">
        <h1 className="text-white font-black text-xl md:text-4xl lg:text-5xl leading-none">
          Trains & Buses?
        </h1>
        <div>
          <p className="mt-4 font-light text-white text-left text-lg md:text-xl  w-full mx-auto">
            If you are unable to drive to a hackathon, we can reimburse the
            equivalent amount of miles for a bus/train ticket at a flat rate of{" "}
            <span className="underline">10 cents a mile! </span>
            <br/><br/>
            Or, if you're outside the US or Canada, it's a flat rate of 70% - excluding railcards, or discounts.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="/busntrain.png"
          className="px-6 md:px-0 w-full max-w-6xl md:w-[70vw]"
        />
      </div>
    </div>
  );
};
