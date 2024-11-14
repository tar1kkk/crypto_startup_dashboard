import {Header} from "@/components/shared/header.tsx";
import {Container} from "@/components/shared/container.tsx";
import {MainBlock} from "@/components/shared/main-block.tsx";
import {Footer} from "@/components/shared/footer.tsx";

function App() {
    return (
        <div className="bg-[#101111] min-h-screen text-[#FFFFFF]">
            <Container className='h-full'>
                <Header/>
                <MainBlock/>
                <Footer/>
            </Container>
        </div>
    );
}

export default App;
