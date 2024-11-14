import  {FC} from "react";
import {Title} from "@/components/shared/title.tsx";
import {Instagram, Twitter} from "lucide-react";

export const Footer: FC = () => {
    return (
        <div>
            <div className='mt-[200px] flex justify-between items-center'>
                <Title text={'Oasis'}/>
                <div className='flex cursor-pointer gap-5 opacity-70'>
                    <p>Buy a Punk</p>
                    <p>View Full Collection</p>
                </div>
                <div className="gap-3 flex cursor-pointer">
                    <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                        <Twitter />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <Instagram />
                    </a>
                </div>
            </div>
            <div className='pt-[100px]'>
                <div className='border-[0.5px] border-opacity-5 border-b-gray-200'/>
                <div className='pt-5 pb-5 flex max-w-[800px] gap-7 mx-auto opacity-40 cursor-pointer'>
                    <p>© 2021 CryptoPunks. All right reserved.</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies Settings</p>
                </div>
            </div>
        </div>
    )
}