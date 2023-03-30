import Carousel from 'react-bootstrap/Carousel';
import Kereta1 from "./../assets/Kereta1.png";
import Kereta2 from "./../assets/Kereta2.png";
import Kereta3 from "./../assets/Kereta3.png";
import Kereta4 from "./../assets/Kereta4.png";

const Hero = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Kereta1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>American Trains</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Kereta2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>London Trains</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Kereta3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>England Trains</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Kereta4}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>London Trains</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Hero;