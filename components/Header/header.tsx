import Typography from "@/components/Typography/typography";
import HeaderButtons from "@/components/HeaderButtons/headerButtons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full px-4 py-2 bg-background shadow-xs">
      <div className="flex items-center gap-4">
        <Typography variant="h2">LOGO</Typography>
      </div>
      <div className="hidden sm:flex mr-12">
        <HeaderButtons />
      </div>
    </header>
  );
}
