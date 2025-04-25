import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Image, { type StaticImageData } from "next/image";
import Typography from "@/components/Typography/typography";

interface CardProps {
  title: string;
  text: string;
  image: StaticImageData | string;
}

export default function Card({ title, text, image }: CardProps) {
  return (
    <CardContainer containerClassName="py-8 w-full max-w-[360px]">
      <CardBody className="h-[520px] w-full relative rounded-2xl text-white bg-black overflow-hidden hover:shadow-2xl shadow-red-600 transition-all duration-300">
        <CardItem key="image" className="h-2/5 w-full relative">
          <Image
            src={image || "/placeholder.svg"}
            alt="card image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
        </CardItem>

        <div className="flex flex-col h-3/5">
          <CardItem key="title" className="px-8 pt-7 pb-3">
            <Typography variant="h4" className="text-red-600 font-bold">
              {title}
            </Typography>
          </CardItem>

          <CardItem key="text" className="px-8 flex-grow">
            <Typography variant="p" className="text-gray-200 leading-relaxed">
              {text}
            </Typography>
          </CardItem>

          <CardItem key="bottom-space" className="px-8 pb-7">
            <div className="h-4"></div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
