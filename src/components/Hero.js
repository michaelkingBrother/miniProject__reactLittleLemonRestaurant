import { Link } from "react-router-dom";

const Hero = ({image}) => (
    <section className='hero'>
      <div className='container content_hero'>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        {/* <a href='/reverseTable' role='button' className='btn'>Reserve a Table</a> */}
        <Link to='/booking' role='button' className='btn'>Reserve a Table</Link>
        <img src={image} alt='hero photo' width={375} height={440}/>
      </div>
    </section>
);
export default Hero;