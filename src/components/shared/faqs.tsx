import {FC} from "react";

interface Props {
    className?: string;
    description: string;
    question : string;
}

export const Faqs: FC<Props> = ({className,question,description}) => {
    return (
        <div>
            <hr className='mb-5 opacity-90'/>
            <div className='flex justify-between'>
                <p className='flex-1'>{question}</p>
                <p className='flex-1 opacity-80 pb-8'>{description}</p>
            </div>
        </div>
    )
}