import ImageHero from '@/assets/image-hero.svg';
export const Hero = () => {
  return (
    <section
      id="home"
      className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10"
    >
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Tenha o{' '}
            <span style={{ color: '#52b357' }}>software sob medida </span>para
            atender o seu negócio
          </h1>{' '}
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Crie seu software de acordo com a sua necessidade Aplicativos, sites,
          sistemas web e desktop.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a
            href=" https://wa.me/5586994201843?text=Olá,%20gostaria%20de%20ter%20uma%20consultoria%20gratuita!."
            className="w-full md:w-1/3 bg-primary text-primary-foreground hover:bg-primary/90 p-3 cursor-pointer rounded "
          >
            Consultoria gratuita
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="">
        <img src={ImageHero} />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
