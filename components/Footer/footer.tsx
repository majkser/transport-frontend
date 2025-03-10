import Typography from "@/components/Typography/typography";
import { TbBus } from "react-icons/tb";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="flex justify-between items-center p-6 bg-black text-white">
            <div className="flex items-center">
                <TbBus className="mr-4" size={48}/>
                <Typography variant="p">Contact with us</Typography>
            </div>
            <div>
                <Typography variant="p" className='mb-2'>
                    Email: <Link href="mailto:essateressa@example.com">essateressa@example.com</Link>
                </Typography>
                <Typography variant="p">Phone: +48 123 456 789</Typography>
            </div>
        </footer>
    );
};