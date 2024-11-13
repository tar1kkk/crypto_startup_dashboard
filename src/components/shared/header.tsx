import React from 'react';
import {cn} from "@/lib/utils.ts";
import {Button} from "@/components/ui/button.tsx";
import {Instagram, Twitter} from "lucide-react";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
    return (
        <header className={cn(className, 'pt-6 flex justify-between')}>
            <svg width="39" height="30" viewBox="0 0 39 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4375 30C6.91935 30 0 23.101 0 14.608V0C8.51814 0 15.4375 6.89896 15.4375 15.392V30Z"
                      fill="white"/>
                <path
                    d="M16.7744 17.561V9.79965C16.7744 4.39024 21.1776 0 26.603 0V7.76132C26.603 13.1707 22.1998 17.561 16.7744 17.561Z"
                    fill="white"/>
                <path
                    d="M39.0002 29.9995H27.7301C21.6756 29.9995 16.7744 25.1128 16.7744 19.0762H28.0446C34.099 19.0762 39.0002 23.9629 39.0002 29.9995Z"
                    fill="white"/>
            </svg>
            <ul className='flex gap-12 items-center'>
                <li className="cursor-pointer opacity-65 hover:opacity-100 transition-opacity duration-300 ease-in-out">About</li>
                <li className="cursor-pointer opacity-65 hover:opacity-100 transition-opacity duration-300 ease-in-out">Collection</li>
                <li className="cursor-pointer opacity-65 hover:opacity-100 transition-opacity duration-300 ease-in-out">FAQs</li>
                <Button className='bg-[#638596] bg-opacity-50 rounded-2xl text-[#C4EBFF]'>
                    Connection Wallet
                </Button>
                <div className="gap-3 flex cursor-pointer">
                    <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                        <Twitter />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <Instagram />
                    </a>
                </div>

            </ul>
        </header>
    );
};
