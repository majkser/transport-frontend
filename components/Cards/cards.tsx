import backgroundImage from "@/public/bgImage.jpg";
import Card from "@/components/Card/card";

export default function Cards() {
  return (
    <>
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
    </>
  );
}
