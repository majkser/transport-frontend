import Typography from "@/components/Typography/typography";
import backgroundImage from "@/public/bgImage.jpg";
import Cards from "@/components/Cards/cards";
import Form from "@/components/Form/form";

export default function Home() {
  return (
    <>
      <div
        className="relative -mt-20 pt-24 h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
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
      <Cards />
      <Form />
      <Typography variant="h1" className="text-white ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptate
        nisi minima odit ex non dolorum et doloremque suscipit hic quis, sequi
        quam repellendus voluptatibus vel provident minus natus
      </Typography>
    </>
  );
}
