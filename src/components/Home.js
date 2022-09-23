import Carousel from 'react-bootstrap/Carousel';

  function Home() {
    return (
      <div className='carousel'>
      <Carousel slide={false}>
        <Carousel.Item>
          <img src="https://i.imgur.com/a8ZnF1m.jpeg" height="500" margin="auto" alt="First slide" class="first"/>
          <Carousel.Caption>
            <h3>Happy Pills</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://i.imgur.com/Sa2XjSx.jpeg" margin="auto" alt="Second slide"/>
          <Carousel.Caption>
            <h3>Drinks with Friends</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://i.imgur.com/DOTy74u.jpeg" height="500" width="1250" alt="Third slide" class="third"/>
          <Carousel.Caption>
            <h3>Popular Cocktails</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  
  export default Home;