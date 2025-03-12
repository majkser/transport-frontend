import backgroundImage from "@/public/bgImage.jpg";
import Card from "@/components/Card/card";

export default function Cards() {
  return (
    <section className="max-width-[1440px] m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Card
        title="Card Title"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        image={backgroundImage}
      ></Card>
      <Card
        title="Card Title"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        image={backgroundImage}
      ></Card>
      <Card
        title="Card Title"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        image={backgroundImage}
      ></Card>
    </section>
  );
}
