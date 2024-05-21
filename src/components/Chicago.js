const Chicago = ({images}) => (
    <section className='about'>
      <h2>Little Lemon</h2>
      <h3>Chicago</h3>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
      <div className='owner-photos__about'>
        { images.map((image, index) => (
          <img key={index} src={image} alt='owner photo' width={276} height={338}/>
        ))}
      </div>
    </section>
)
export default Chicago