import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Image, { StaticImageData } from "next/image";
import Typography from "@/components/Typography/typography";

interface CardProps {
  title: string;
  text: string;
  image: StaticImageData | string;
}

export default function Card({ title, text, image }: CardProps) {
  return (
    <CardContainer>
      <CardBody className="h-[450px] w-[250px] md:h-[500px] md:w-[300px] relative rounded-2xl text-white bg-black overflow-hidden hover:shadow-2xl shadow-red-600 transition-all duration-300">
        <CardItem key="image" className="h-3/4 w-full relative">
          <Image
            src={image}
            alt="card image"
            sizes="75%"
            fill
            className="object-cover"
          />
        </CardItem>
        <CardItem key="title">
          <Typography variant="h3">{title}</Typography>
        </CardItem>
        <CardItem key="text">
          <Typography variant="p">{text}</Typography>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
