"use client";

import Typography from "@/components/Typography/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CompanyInfo() {
  function handleClick(buttonName: string) {
    const section = document.getElementById(buttonName);
    if (section) {
      const height = section.getBoundingClientRect().height;
      const middleOffset =
        section.offsetTop - window.innerHeight / 2 + height / 2;

      window.scrollTo({ top: middleOffset, behavior: "smooth" });
    }
  }

  return (
    <Card className="bg-black/80 backdrop-blur-sm border border-neutral-800 shadow-lg h-full">
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-4">
          <Typography
            variant="h3"
            className="text-red-600 text-xl sm:text-2xl md:text-3xl font-bold"
          >
            Firma transportowa MIREK-TRANS - postaw na profesjonalistów
          </Typography>
          <Typography variant="p" className="text-white text-sm sm:text-base">
            Szukasz firmy, która sprawnie przewiezie Twój ładunek do dowolnego
            miejsca w Polsce do Francji a dokładniej Paryża i okolic?
            Potrzebujesz przewoźnika, który bezpiecznie przetransportuje
            delikatne i wrażliwe na uszkodzenia towary? Gdy poznasz nas lepiej,
            z pewnością będziesz chciał zostać naszym partnerem.
          </Typography>
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            onClick={() => handleClick("contact")}
            className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto"
          >
            Skontaktuj się z nami
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
