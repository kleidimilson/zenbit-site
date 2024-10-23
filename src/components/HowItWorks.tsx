import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Desenvolvimento de Sistemas",
    description:
      "Projetamos e desenvolvemos sistemas personalizados.",
  },
  {
    icon: <MapIcon />,
    title: "Criação de Sites",
    description:
      "Transformamos sua presença online com sites modernos, responsivos e intuitivos",
  },
  {
    icon: <PlaneIcon />,
    title: "Desenvolvimento de Aplicativos",
    description:
      "Criamos aplicativos móveis e web que facilitam a interação dos seus clientes",
  },
  {
    icon: <GiftIcon />,
    title: "Consultoria Tecnológica",
    description:
      "Oferecemos consultoria especializada para identificar e implementar as melhores soluções tecnológicas",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
       
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Nossos Serviços

        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
         Soluções inovadoras
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
