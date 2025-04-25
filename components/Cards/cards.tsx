import europe from "@/public/europe.jpg";
import handShake from "@/public/handShake.jpg";
import parcels from "@/public/parcels.jpg";
import Card from "@/components/Card/card";

export default function Cards() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
        <div className="flex justify-center">
          <Card
            title="Mirek-Trans"
            text="Mirek-Trans to rodzinna firma transportowa, która rozpoczęła swoją działalność w 2012 roku. Początkowo skupialiśmy się na przewozach mienia prywatnego w kraju i za granicą. Z biegiem lat, dzięki zdobytemu doświadczeniu, sukcesywnie rozszerzyliśmy naszą ofertę."
            image={europe}
          />
        </div>
        <div className="flex justify-center">
          <Card
            title="Twoje Zlecenie, Nasza Pasja"
            text="Świadczenie usług tranportowych na wysokim poziomie to dla nas priorytet. Dlatego działamy z zaangażowaniem, pozwalającym nam sprawnie realizować każde zlecenie. Dbamy o to, by nasi klienci mieli poczucie bezpieczeństwa."
            image={parcels}
          />
        </div>
        <div className="flex justify-center md:col-span-2 lg:col-span-1">
          <Card
            title="Twoje Potrzeby, Nasza Odpowiedzialność"
            text="Fundamentem naszych działań są partnerskie relacje oparte na wzajemnym zaufaniu i zrozumieniu potrzeb klienta. Zdając sobie sprawę z tego, jak ważne są silne relacje biznesowe, rozwijamy relacje z partnerami."
            image={handShake}
          />
        </div>
      </div>
    </div>
  );
}
