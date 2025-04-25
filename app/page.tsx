import backgroundImage from "@/public/iveco2.jpg";
import Cards from "@/components/Cards/cards";
import Form from "@/components/Form/form";
import CompanyInfo from "@/components/CompanyInfo/company-info";
import InfoTile from "@/components/InfoTile/info-tile";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="relative -mt-20 w-full h-auto min-h-[60vh] bg-cover bg-center flex items-center lg:aspect-auto lg:min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
        }}
      >
        <div className="container mx-auto px-4 py-24 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:col-span-1 w-full max-w-xl mx-auto lg:mx-0">
              <CompanyInfo />
            </div>
            <div className="lg:col-span-1"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <Cards />
      </div>

      <InfoTile />

      <section id="contact" className="py-12">
        <Form />
      </section>
    </>
  );
}
