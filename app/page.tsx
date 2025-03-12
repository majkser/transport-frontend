import Typography from "@/components/Typography/typography";
import backgroundImage from "@/public/bgImage.jpg";
import Cards from "@/components/Cards/cards";
import Form from "@/components/Form/form";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="relative -mt-20 pt-24 bg-cover bg-center flex items-center justify-center aspect-square md:aspect-auto md:h-screen"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <Typography variant="h1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            voluptate nisi minima odit ex non dolorum et doloremque suscipit hic
            quis, sequi quam repellendus voluptatibus vel provident minus natus
          </Typography>
        </div>
      </div>
      <section className="max-width-[1440px] py-12 pt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Cards />
      </section>
      <section id="contact" className="py-12">
        <Form />
      </section>
      <section id="faq" className="py-12">
        <Typography variant="h1" className="text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          voluptate nisi minima odit ex non dolorum et doloremque suscipit hic
          quis, sequi quam repellendus voluptatibus vel provident minus natus
        </Typography>
      </section>
    </>
  );
}
