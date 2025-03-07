import React from 'react';
import Typography from "@/components/Typography/typography";
import { TbBus } from "react-icons/tb";

export default function Footer() {
    return (
        <footer className="flex justify-between items-center p-6 bg-black text-white">
            <div className="flex items-center">
                <TbBus className="text-4xl mr-4" />
                <Typography variant="p">Contact with us</Typography>
            </div>
            <div>
                <Typography variant="p" className='mb-2'>
                    Email: <a href="mailto:essateressa@example.com">essateressa@example.com</a>
                </Typography>
                <Typography variant="p">Phone: +48 123 456 789</Typography>
            </div>
        </footer>
    );
};