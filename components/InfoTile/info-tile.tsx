"use client";

import Typography from "@/components/Typography/typography";

export default function InfoTile() {
  return (
    <div className="w-full bg-black border border-neutral-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1">
            <Typography variant="p" className="text-white">
              Mirek-Trans to polska firma rodzinna z siedzibą w Zbydniowie, woj.
              podkarpackie. Przez lata działalności konsekwentnie
              rozbudowywaliśmy zarówno tabor samochodowy, jak i własne
              możliwości magazynowe, aby sprostać dynamicznym potrzebom rynku
              transportowego. Nasze samochody, stale aktualizowane i ulepszane,
              stanowią solidną bazę do efektywnego i bezpiecznego przewozu
              towarów.
            </Typography>
          </div>

          <div className="lg:col-span-1 flex flex-col items-center justify-center">
            <div className="text-center">
              <Typography variant="h2" className="text-red-600 mb-2">
                10+ lat
              </Typography>
              <Typography variant="p" className="text-white">
                doświadczenia w branży
              </Typography>
            </div>
            <div className="text-center mt-8">
              <Typography variant="h2" className="text-red-600 mb-2">
                100%
              </Typography>
              <Typography variant="p" className="text-white">
                zadowolonych klientów
              </Typography>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <Typography
              variant="h4"
              className="text-red-600 mb-4 text-center lg:text-left"
            >
              Solidny partner w transporcie - tradycja i nowoczesność
            </Typography>
            <Typography
              variant="p"
              className="text-white mb-6 text-center lg:text-left"
            >
              Z dumą świadczymy kompleksowe usługi transportowe i logistyczne na
              terenie Polski i Europy, łącząc rodzinne wartości z
              profesjonalizmem i innowacyjnością. Stawiamy na terminowość,
              bezpieczeństwo oraz indywidualne podejście do każdego zlecenia.
              Doświadczeni kierowcy, nowoczesna flota pojazdów oraz rozbudowane
              zaplecze magazynowe pozwalają nam realizować nawet najbardziej
              wymagające projekty logistyczne. Zaufało nam już setki klientów,
              doceniając naszą rzetelność i elastyczność w dostosowaniu się do
              zmieniających się potrzeb rynku.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
