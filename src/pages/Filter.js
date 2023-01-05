import FilterScreen from "../assets/filter-screen.png";

const Filter = () => {
  return (
      <section className={`
          bg-brand text-white
          px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 
          h-screen 
          flex items-center justify-center
      `}>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="md:w-5/12 max-h-[45vh] md:max-h-[75vh] flex justify-end order-last md:order-first">
            <img src={FilterScreen} alt="Filter Screen" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="flex flex-col justify-center gap-4 md:gap-8">
            <h1 className="font-bold text-5xl md:text-6xl text-center md:text-left">
              Filtered to your needs
            </h1>
            <p className="text-xl md:text-2xl text-center md:text-left">
              Filter search results to find the perfect sublease for you! we offer more than 10+ filters to find
              your desired crib
            </p>
          </div>
        </div>
      </section>
  );
};

export default Filter;