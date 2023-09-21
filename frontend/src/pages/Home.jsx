import Reacct from 'react';
import '../styles/home.css';
import {Container, Row, Col} from 'reactstrap';
import heroImage from '../assets/images/hero-img01.jpg';
import heroImage02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';

import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';

const Home = () => {
    return <>

    { /* ============== Hero section start ============== */}

        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex align-items-center ">
                                <Subtitle subtitle = {'Know Before You Go'}/>
                                <img src={worldImg} alt="" />
                            </div>
                            <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores facere obcaecati inventore commodi? Soluta, neque. Possimus officia iusto voluptatem, iste dignissimos, harum praesentium voluptatibus expedita ut, temporibus aut. Laudantium, placeat?</p>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box">
                            <img src={heroImage} alt="" />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-4">
                            <video src={heroVideo} alt="" controls/>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-5">
                            <img src={heroImage02} alt="" />
                        </div>
                    </Col>

                    <SearchBar />
                </Row>
            </Container>
        </section>

        { /* ============== Hero section end ============== */}

        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                        <h5 className="services__subtitle">What we serve</h5>
                        <h2 className="services__title">We offer our best services</h2>
                    </Col>
                    <ServiceList />
                </Row>
            </Container>
        </section>


        { /* ============== Featured tour section start ============== */}

        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        < Subtitle subtitle={"Explore"} />
                        <h2 className="featured__tour-title">Our featured tours</h2>
                    </Col>
                    < FeaturedTourList />
                </Row>
            </Container>
        </section>

        { /* ============== Featured tour section end ============== */}

        { /* ============== Experience section start ============== */}

        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="experience__content">
                            < Subtitle subtitle={'Experience'} />

                            <h2>With our all experience <br />we will serve you</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
                             Quasi explicabo pariatur similique consectetur.</p>
                        </div>

                        <div className="counter__wrapper d-flex align-items-center gap-5">
                            <div className="counter__box">
                                <span>12k+</span>
                                <h6>Successful Trip</h6>
                            </div>
                            <div className="counter__box">
                                <span>2k+</span>
                                <h6>Regular clients</h6>
                            </div>
                            <div className="counter__box">
                                <span>15</span>
                                <h6>Years Experience</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="experience__img">
                            <img src={experienceImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>  

        { /* ============== Experience section end ============== */}

        { /* ============== Gallery section start ============== */}

        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle subtitle={'Gallery'} />
                        <h2 className="gallery__title">Visit our customer tour gallery</h2>
                    </Col>
                    <Col lg='12'>
                    < MasonryImagesGallery />
                    </Col>
                </Row>
            </Container>
        </section>

        { /* ============== Gallery section end ============== */}

    </>
}

export default Home;