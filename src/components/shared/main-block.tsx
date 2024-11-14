import {Title} from "@/components/shared/title.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Card} from "@/components/shared/card.tsx";
import {Faqs} from "@/components/shared/faqs.tsx";


export const MainBlock = () => {
    // const [isScrolled, setIsScrolled] = useState(false);
    //
    // // Используем useEffect для отслеживания прокрутки
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 0) {
    //             setIsScrolled(true); // Когда скролим, меняем состояние
    //         } else {
    //             setIsScrolled(false); // Когда в начале страницы, возвращаем в исходное состояние
    //         }
    //     };
    //
    //     // Слушаем событие скролла
    //     window.addEventListener("scroll", handleScroll);
    //
    //     // Убираем слушателя при размонтировании компонента
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    return (
        <div className="mt-[170px]">
            <Title size={"xl"} className={"text-center"}
                   text={"The project that inspired the modern CryptoArt movement"}/>
            <Title
                className={"text-[17px] text-center mt-10 max-w-[530px] mx-auto"}
                text={`10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain.`}
            />
            <Button
                size={"lg"}
                variant={"secondary"}
                className={'bg-white text-black rounded-2xl mt-10 block mx-auto'}
            >
                Mint now
            </Button>

            {/*<ChevronDown*/}
            {/*    size={'40'}*/}
            {/*    className={`text-white ${isScrolled ? 'absolute bottom-10 left-1/2 transform -translate-x-1/2' : 'fixed bottom-10 left-1/2 transform -translate-x-1/2'}`}*/}
            {/*/>*/}

            <div className="pt-[250px] mb-9">
                <Title size={'sm'} className={'text-center'} text={'Featured in'}/>
            </div>
            <div className='flex col-end-3 justify-between'>
                <Card title={'Mashabe'} text={'This ethereum-based project could change how we think about digital art'}
                      desc={'Read article'}/>
                <Card title={'Mashabe'} text={'CryptoKitties, CryptoPunks and the birth of a cottage industry'}
                      desc={'Read article'}/>
                <Card title={'Mashabe'}
                      text={'‘Obviously, we had no idea it was going to get here,’ say the guys who made the first NFT'}
                      desc={'Read article'}/>
            </div>
            <div className='pt-[250px] flex'>
                <Title className='flex-1' size={'lg'} text={'How do I get a punk?'}/>
                <div className='flex-1 flex'>
                    <div className="flex-1 items-center">
                        <div className="flex flex-col items-center">
                            <div className='mb-3 pl-[20px] pr-[20px] pb-[10px] pt-[10px] text-[20px] border border-white rounded-[50%]'>
                                1
                            </div>
                            <div className="w-[1px] min-h-[260px] bg-white opacity-30"/> {/* Заменил h-[260px] на min-h */}
                        </div>
                        <div className="flex flex-col items-center">
                            <div className='mt-3 mb-3 pl-[20px] pr-[20px] pb-[10px] pt-[10px] text-[20px] border border-white rounded-[50%]'>
                                2
                            </div>
                            <div className="w-[1px] min-h-[110px] bg-white opacity-30"/> {/* Аналогично здесь */}
                        </div>
                        <div className="flex flex-col items-center">
                            <div className='mt-3 mb-3 pl-[20px] pr-[20px] pb-[10px] pt-[10px] text-[20px] border border-white rounded-[50%]'>
                                3
                            </div>
                        </div>
                    </div>
                    <div className='ml-5 mt-8'>
                        <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect x="0.59375" y="0.640625" width="56" height="56" fill="url(#pattern0_1_206)"/>
                            <defs>
                                <pattern id="pattern0_1_206" patternContentUnits="objectBoundingBox" width="1"
                                         height="1">
                                    <use xlinkHref="#image0_1_206" transform="scale(0.0104167)"/>
                                </pattern>
                                <image id="image0_1_206" width="96" height="96"
                                       xlinkHref="data:image/png;base64,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"/>
                            </defs>
                        </svg>
                        <Title className='mb-5 mt-5' text={'Download and install MetaMask'}/>
                        <p className='opacity-70 text-lg'>Download and install a Chrome browser plugin called MetaMask.
                            This will allow websites (that you
                            authorise) access to your Ethereum account.</p>
                        <Button
                            className="p-5 mt-5 mb-9 border-[1px] border-opacity-45 border-gray-300 rounded-2xl bg-[#101111]">Download
                            MetaMask</Button>

                        <Title className='mb-5 mt-5' text={'Buy some Ethereum'}/>
                        <p className='opacity-70 text-lg mb-[70px]'>If you made a new account, buy some Ethereum. The
                            MetaMask plugin has a button that will allow you to buy Ether from Coinbase.</p>
                        <Title className='mb-5 mt-5' text={'Start bidding, buying and selling'}/>
                        <p className='opacity-70 text-lg'>Once you have the plugin installed, this website will
                            recognise it and add buttons that allow you to bid on, buy and sell punks directly in the
                            interface.</p>
                    </div>
                </div>
            </div>
            <div className='pt-[250px]'>
                <Title size='lg' text={'Details and FAQ'} className='mb-[50px]'/>
                <Faqs
                    description={'When originally released, the actual images of the punks were too large to store on the blockchain, so we took a hash of the composite image of all the punks and embeded it into the contract. You can verify that the punks being managed by the Ethereum contract are the True Official Genuine CryptoPunks™ by calculating an SHA256 hash on the cryptopunks image and comparing it to the hash stored in the contract.Since then, due to some clever compression ideas and some help from friends of the punks we have managed to put the entire image and attribute data fully on chain. You can read more about the mechanisms and details of the process in the announcement blog post.'}
                    question={'Where are the images for the punks stored?'}/>
                <Faqs
                    description={'No. The CryptoPunks pre-date the ERC-721 standard and are a custom contract, that means it doesnt comply with any standards. They are almost an ERC20 token. We support the methods that provide your balance so you can watch CryptoPunks as a token in your wallet and see how many you own. None of the other methods are the same since youre not transferring a simple balance, but need to reference which specific Punk you want to work with.'}
                    question={'Are the punks an ERC-721 token?'}/>
                <Faqs
                    description={'The prices, bids and sales you see on this site are loaded from the Cryptopunks contract on the Ethereum blockchain. Because the Cryptopunks pre-date the ERC-721 standard (and all third party NFT marketplaces) we also needed to write a market so the punks could be transacted. We have no control over the contract governing this market, and have no access to any additional data beyond what the blockchain provides. In fact anyone else could write a web front end for it.'}
                    question={'Where does the market data on this site come from?'}/>
                <Faqs
                    description={'No. We charge no fees for Cryptopunks transacted through the built-in market beyond the ones charged by Ethereum (gas).The contract source and more technical details are available on Github.'}
                    question={'Do you charge any fees for transactions?'}/>
            </div>
        </div>
    );
};