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
            <div className='pt-[250px]'>
                <Title size='lg' text={'Details and FAQ'} className='mb-[50px]'/>
                <Faqs description={'When originally released, the actual images of the punks were too large to store on the blockchain, so we took a hash of the composite image of all the punks and embeded it into the contract. You can verify that the punks being managed by the Ethereum contract are the True Official Genuine CryptoPunks™ by calculating an SHA256 hash on the cryptopunks image and comparing it to the hash stored in the contract.Since then, due to some clever compression ideas and some help from friends of the punks we have managed to put the entire image and attribute data fully on chain. You can read more about the mechanisms and details of the process in the announcement blog post.'} question={'Where are the images for the punks stored?'}/>
                <Faqs description={'No. The CryptoPunks pre-date the ERC-721 standard and are a custom contract, that means it doesnt comply with any standards. They are almost an ERC20 token. We support the methods that provide your balance so you can watch CryptoPunks as a token in your wallet and see how many you own. None of the other methods are the same since youre not transferring a simple balance, but need to reference which specific Punk you want to work with.'} question={'Are the punks an ERC-721 token?'}/>
                <Faqs description={'The prices, bids and sales you see on this site are loaded from the Cryptopunks contract on the Ethereum blockchain. Because the Cryptopunks pre-date the ERC-721 standard (and all third party NFT marketplaces) we also needed to write a market so the punks could be transacted. We have no control over the contract governing this market, and have no access to any additional data beyond what the blockchain provides. In fact anyone else could write a web front end for it.'} question={'Where does the market data on this site come from?'}/>
                <Faqs description={'No. We charge no fees for Cryptopunks transacted through the built-in market beyond the ones charged by Ethereum (gas).The contract source and more technical details are available on Github.'} question={'Do you charge any fees for transactions?'}/>
            </div>
        </div>
    );
};
