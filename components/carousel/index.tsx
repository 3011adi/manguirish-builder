import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Carousel1 = () => (
  <Carousel>
    <div>
      <img src="/1.jpeg" />
      <p className="legend"> exterior </p>
    </div>
    <div>
      <img src="/2.jpeg" />
      <p className="legend">exterior</p>
    </div>
    <div>
      <img src="/3.jpeg" />
      <p className="legend">living room</p>
    </div>
    <div>
      <img src="/4.jpeg" />
      <p className="legend">plan</p>
    </div>
  </Carousel>
);

export default Carousel1;