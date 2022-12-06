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
      <section className="bg-brand snap-center text-white">
        <h1 className="font-bold text-6xl text-center">
          Finding a sublease should be easy
        </h1>
        <h4 className="text-2xl mt-6 text-center">
          We are here to make your life easier!
        </h4>
        <div className="grid grid-cols-3 justify-items-center gap-4 mt-16">
          {features.map(feature => (
              <div className="flex flex-col items-center">
                <button className={`
                  bg-white p-6 rounded-lg
                  flex items-center justify-center 
                  shadow-lg hover:shadow-2xl
                  transition ease-in-out hover:-translate-y-1 duration-300
                `}>
                  <img src={feature.icon} alt={feature.title} />
                </button>
                <h5 className="text-3xl font-bold mt-4">{feature.title}</h5>
                <p className="text-xl">{feature.text}</p>
              </div>
          ))}
        </div>
      </section>
  );
}

export default Features;