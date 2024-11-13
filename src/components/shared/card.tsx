import { FC } from "react";
import {MoveUpRight} from "lucide-react";

interface Props {
    className?: string;
    title?: string;
    text?: string;
    desc?: string;
}

export const Card: FC<Props> = ({ title, text, desc, className }) => {
    return (
        <div className={`flex-1 max-w-[31%] p-4 border border-gray-600 rounded-3xl pt-9 pr-9 pl-9 ${className} grid grid-rows-[auto_1fr_auto]`}>
            {title && <h3 className="text-xl font-semibold mb-7">{title}</h3>}
            {text && <p className="mb-7 opacity-70">{text}</p>}
            <hr className="border-gray-600 my-4" />
            <div className='flex justify-between items-center'>
                {desc && <p className={'m-2'}>{desc}</p>}
                <MoveUpRight className='text-white opacity-80'/>
            </div>
        </div>
    );
};
