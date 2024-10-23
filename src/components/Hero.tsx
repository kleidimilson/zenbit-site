import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
          Tenha o software sob medida para atender o
          seu negócio
          </h1>{" "}
          
         
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Crie seu software de acordo com a sua necessidade
        Aplicativos, sites, sistemas web e desktop.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Consultoria gratuita</Button>
        </div>
      </div>

      {/* Hero cards sections */}
     

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
