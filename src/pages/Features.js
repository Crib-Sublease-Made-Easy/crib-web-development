import MapLocation from '../assets/map-location.png';
import Settings from '../assets/settings.png';
import MessageDetail from '../assets/message-detail.png';


const Features = () => {
  const features = [
    {
      icon: MapLocation,
      title: 'Find',
      text: 'Find subleases by location or on map'
    },
    {
      icon: Settings,
      title: 'Filter',
      text: 'Filter subleases to find the one that fits'
    },
    {
      icon: MessageDetail,
      title: 'Connect',
      text: 'Connect to tenants and ask more about it'
    }
  ]

  return (
      <div className="bg-white flex flex-col justify-center items-center px-10 md:px-20 2xl:px-80 my-40 lg:my-80">
        <h1 className="font-oswald font-bold text-5xl 2xl:text-6xl">
          Finding a sublease should be easy
        </h1>
        <h4 className="font-roboto pt-10 pr-10 text-2xl text-brand">
          We are here to make your life easier!
        </h4>
        <div className="grid grid-cols-3 w-full justify-items-center gap-32 mt-16">
          {features.map(feature => (
              <div className="flex flex-col items-center gap-2 lg:gap-4 2xl:gap-8">
                <button className={`
                  w-24 h-24 bg-white 
                  flex items-center justify-center 
                  rounded-lg shadow-brand shadow-2xl hover:shadow-brand hover:shadow-xl
                `}>
                  <img src={feature.icon} alt={feature.title} />
                </button>
                <h5 className="font-roboto text-2xl 2xl:text-3xl font-bold w-full text-center mt-8">{feature.title}</h5>
                <p className="font-roboto text-lg 2xl:text-2xl w-full text-center">{feature.text}</p>
              </div>
          ))}
        </div>
      </div>
  );
}

export default Features;