import HouseIcon from '../assets/house-brand-icon.svg';
import PropertyTypeScreen from '../assets/post-properties-screen.png';


const PostProperties = () => {
  return (
      <section className={`
          bg-brand px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 
          h-screen 
          flex items-center justify-center
      `}>
        <div className={`
            md:bg-white rounded-2xl 
            flex flex-col gap-8 md:gap-0 items-center
            relative 
            md:py-16 lg:py-24 xl:py-32 md:pl-10 xl:pl-20 md:pr-80 
            md:overflow-hidden
        `}>
          <div className="flex flex-col items-center md:items-start justify-center gap-4 md:gap-8">
            <h1 className="font-bold text-5xl text-white md:text-black text-center md:text-left">
              Sublease just as easy
            </h1>
              <p className="text-2xl text-white md:text-black text-center md:text-left">
                Sublease your property on Crib with a few clicks
              </p>
              <button className={`
                  bg-white md:bg-black px-6 md:px-8 py-3 md:py-4 rounded-xl
                  flex gap-2 md:gap-4 items-center w-fit
                  text-lg md:text-xl font-light text-black md:text-white
                  shadow-lg hover:shadow-2xl
                  transition ease-in-out hover:-translate-y-1 duration-300
              `}>
                <img src={HouseIcon} alt="Crib sublease count" className="h-6 md:h-8" />
                <p><span className="text-brand font-bold text-xl md:text-2xl">157+</span> subleases already on Crib</p>
              </button>
          </div>
          <img
              src={PropertyTypeScreen}
              alt="Post properties"
              className="md:absolute right-0 bottom-0 w-[25vh] md:w-60"
          />
        </div>
      </section>
  );
}

export default PostProperties;
