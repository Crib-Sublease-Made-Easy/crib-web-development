import House from '../assets/house-crib.png';
import Screen from '../assets/post-properties-screen.png';


const PostProperties = () => {
  return (
      <div className="bg-white flex flex-col justify-center items-center md:px-80 mb-80">
        <div className="bg-brand p-20 rounded-2xl flex relative pr-72 overflow-hidden">
          <div>
            <h1 className="font-oswald font-bold text-6xl text-white">
              Sublease just as easy
            </h1>
              <p className="font-roboto pt-10 pr-10 text-2xl text-white">
                Sublease your property on Crib with a few clicks
              </p>
              <button className="bg-white rounded-xl px-4 py-6 font-roboto text-xl flex items-center gap-4 font-bold mt-12">
                <img src={House} alt="Crib sublease count" className="h-10" />
                <p><span className="text-brand">157+</span> subleases already on Crib</p>
              </button>
          </div>
          <img src={Screen} alt="Post properties" className="absolute right-0 bottom-0 w-60" />
        </div>
      </div>
  );
}

export default PostProperties;
