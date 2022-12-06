import Logo from '../assets/logo.svg';

const Slogan = () => {
  return (
      <section className="bg-brand text-white snap-center flex items-center justify-center gap-4">
        <img src={Logo} alt="Crib" />
        <h1 className="font-bold text-xl md:text-4xl -translate-y-2">Start saving thousands by using Crib today</h1>
      </section>
  );
};

export default Slogan;