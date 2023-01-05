import LandingScreen from '../assets/landing-screen.png';
import QRCodeDownload from '../assets/qr-code-download.svg';
import AppleDownload from '../assets/apple-download.png';
import GoogleDownload from '../assets/google-download.png';

const Download = () => {
  return (
      <section className={`
          bg-brand text-white
          px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 
          h-screen 
          flex items-center justify-center
      `}>
        <div className="flex flex-row gap-12">
          <div className="w-5/12 max-h-[75vh] flex justify-end">
            <img src={LandingScreen} alt="Filter Screen" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-col justify-center gap-8">
              <h1 className="font-bold text-6xl">
                Download Crib
              </h1>
              <p className="text-2xl">
                Let’s make subleasing easier than ever!
              </p>
              <img src={QRCodeDownload} alt="Download with QR Code" className="w-44" />
              <div className="flex gap-4">
                <img src={AppleDownload} alt="Download on App Store" className="w-44" />
                <img src={GoogleDownload} alt="Download on Google Play Store" className="w-44" />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Download;