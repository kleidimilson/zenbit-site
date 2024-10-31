import imageAbout from '../assets/img-about.svg';

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className=" rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={imageAbout}
            alt="logo zenbit"
            className="w-[300px] object-contain rounded-lg"
            width={300}
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6 ">
              <h2 className="text-3xl md:text-4xl font-bold">
                Conheça
                <span className="mx-2 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  a Zenbit{' '}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Somos uma software-house especializada em soluções sob medida,
                aplicativos móveis e web, consultoria em TI. Com anos de
                experiência na criação de sistemas, sites e aplicativos, nossa
                missão é transformar suas ideias em realidade digital.
                Acreditamos que soluções tecnológicas eficientes e
                personalizadas são a chave para o sucesso dos nossos clientes.
              </p>
            </div>

            <div className="space-y-4 mt-4  md:space-y-0 md:space-x-4">
              <a
                href=" https://wa.me/5586994201843?text=Olá,%20gostaria%20de%20ter%20uma%20consultoria%20gratuita!."
                className="w-full md:w-1/3 bg-primary text-primary-foreground hover:bg-primary/90 p-3 cursor-pointer rounded "
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
