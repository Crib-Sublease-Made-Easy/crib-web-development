import FilterScreen from "../assets/filter-screen.png";

const Filter = () => {
  return (
      <section className={`
          bg-brand text-white
          px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 
          h-screen 
          flex items-center justify-center
      `}>
        <div className="flex flex-row gap-12">
          <div className="w-5/12 max-h-[75vh] flex justify-end">
            <img src={FilterScreen} alt="Filter Screen" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-col justify-center gap-8">
              <h1 className="font-bold text-6xl">
                Filtered to your needs
              </h1>
              <p className="text-2xl">
                Filter search results to find the perfect sublease for you! we offer more than 10+ filters to find
                your desired crib
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Filter;