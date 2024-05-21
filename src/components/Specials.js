const Specials = ({greenSalad}) => (
    <section className='specials'>
      <h2>Specials</h2>
      <a href='/onlineMenu' role='button'>Online Menu</a>
      <article className='food-card'>
        <img src={greenSalad} alt='food thumbnail'width={256} height={185}/>
        <h3>Greek Salad <span className='price_food'>12.99</span></h3>
        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
        <p>Order a delivery <span>icon</span></p>
      </article>
      <article className='food-card'>
        <img src={greenSalad} alt='food thumbnail'width={256} height={185}/>
        <h3>Greek Salad <span className='price_food'>12.99</span></h3>
        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
        <p>Order a delivery <span>icon</span></p>
      </article>
      <article className='food-card'>
        <img src={greenSalad} alt='food thumbnail'width={256} height={185}/>
        <h3>Greek Salad <span className='price_food'>12.99</span></h3>
        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
        <p>Order a delivery <span>icon</span></p>
      </article>
    </section>
);
export default Specials;