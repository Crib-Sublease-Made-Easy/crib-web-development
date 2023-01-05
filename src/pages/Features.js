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
      <section className={`
          bg-brand text-white
          px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 
          h-screen 
          flex items-center justify-center
      `}>
        <div>
          <h1 className="font-bold text-5xl md:text-6xl text-center">
            Finding a sublease should be easy
          </h1>
          <h4 className="text-xl md:text-2xl mt-3 md:mt-6 text-center">
            We are here to make your life easier!
          </h4>
          <div className="grid grid-rows-3 md:grid-cols-3 justify-items-center gap-5 md:gap-10 md:gap-20 mt-8 md:mt-16">
            {features.map(feature => (
                <div className="flex flex-col items-center">
                  <button className={`
                  bg-white p-2 md:p-6 rounded-lg
                  flex items-center justify-center 
                  shadow-lg hover:shadow-2xl
                  transition ease-in-out hover:-translate-y-1 duration-300
                `}>
                    <img src={feature.icon} alt={feature.title} className="scale-75 md:scale-100" />
                  </button>
                  <h5 className="text-xl md:text-2xl font-bold mt-4">{feature.title}</h5>
                  <p className="text-md md:text-lg text-center">{feature.text}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}

export default Features;