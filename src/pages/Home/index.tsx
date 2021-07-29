import HeroList from "../../components/HeroList";
import { HeroContext } from "../../contexts/HeroContext";

function Home() {
    return (
        <main>
            <h2>Heróis ou Vilões</h2>

            <HeroContext.Consumer>
                {context => (
                    <HeroList heroes={context.heroes} />
                )}
            </HeroContext.Consumer>
        </main>
    );
}

export default Home;
