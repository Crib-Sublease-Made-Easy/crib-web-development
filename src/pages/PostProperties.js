import HouseIcon from '../assets/house-brand-icon.svg';
import PropertyTypeScreen from '../assets/post-properties-screen.png';


const PostProperties = () => {
  return (
      <section className={`
          bg-brand px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 
          h-screen 
          flex items-center justify-center
      `}>
        <div className="bg-white rounded-2xl flex relative py-16 lg:py-24 xl:py-32 pl-10 xl:pl-20 pr-80 overflow-hidden">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="font-bold text-5xl">
              Sublease just as easy
            </h1>
              <p className="text-2xl">
                Sublease your property on Crib with a few clicks
              </p>
              <button className={`
                  bg-black px-8 py-4 rounded-xl
                  flex gap-4 items-center
                  text-xl font-light text-white
                  shadow-lg hover:shadow-2xl
                  transition ease-in-out hover:-translate-y-1 duration-300
              `}>
                <img src={HouseIcon} alt="Crib sublease count" className="h-8" />
                <p><span className="text-brand font-bold text-2xl">157+</span> subleases already on Crib</p>
              </button>
          </div>
          <img src={PropertyTypeScreen} alt="Post properties" className="absolute right-0 bottom-0 w-60" />
        </div>
      </section>
  );
}

export default PostProperties;
