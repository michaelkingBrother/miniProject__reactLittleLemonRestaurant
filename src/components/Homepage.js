import marioAndAdrianA from '../assets/img/Mario and Adrian A.jpg';
import marioAndAdrianB from '../assets/img/Mario and Adrian B.jpg';
import greenSalad from '../assets/img/greek salad.jpg';
import restauranFood from '../assets/img/restauranfood.jpg';
import Hero from "./Hero";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";

const Homepage = () => (
        <main>
            <Hero image={restauranFood} />
            {/* <Specials greenSalad={greenSalad}/>
            <CustomersSay/>
            <Chicago images={[marioAndAdrianA, marioAndAdrianB]} /> */}
        </main>
);
export default Homepage;