import Link from "next/link"
import { Button } from "@/components/ui/button"
import Typography from "../Typography/typography"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between w-full px-4 py-2 bg-background shadow-xs">
        <div className="flex items-center gap-4">
            <Typography variant="h2">LOGO</Typography>

        </div>
        <nav className="flex items-center gap-4">
        <Link href="/">
            <Button variant="link" className="cursor-pointer">Home</Button>
        </Link>
        <Button>dasdas</Button>
        </nav>
        </header>
    )
}