import { Swiper, SwiperSlide } from 'swiper/react';

import imgTansistemas from '../media/svg/img_transistemas.svg';
import cardTalleres from '../media/svg/card_talleres.svg';
import cardCapacitaciones from '../media/svg/card_capacitaciones.svg';
import cardAcompaniamiento from '../media/svg/card_acompaniamiento.svg';

import Button from '../components/Button';
import Card from '../components/Card';
import Contact from '../components/Contact';
import Message from '../components/Message';


function Home() {


    return (
        <div className="home">

            <div className="hero-section">
                <img className="hero-section__img" src={imgTansistemas} alt="imagen de transistemas" />

                <br />

                <p className="hero-section__description">
                    Somos una organización social integrada por personas del colectivo <strong>LGTBIQANB+</strong> y personas con discapacidad (<strong>PcD</strong>).
                    <br /> <br />
                    Actuamos para la inserción laboral de nuestra comunidad en empleos formales del <strong>área de sistemas</strong>. Para lograrlo, realizamos <strong>cursos y capacitaciones gratuitas.</strong>
                </p>

                <Button>Colaborá donando</Button>
            </div>


            <div className="cards-section">
                <h1 className="cards-section__title">Que hacemos</h1>

                <Swiper
                    spaceBetween={8}
                    
                >
                    <SwiperSlide>
                        <Card
                            img={cardTalleres}
                            alt="Descripcion de la imagen"
                            title="Cursos y talleres"
                            description="Brindamos capacitaciones en Testing, Diseño UX/UI y Desarrollo web para personas de la comunidad LGTBI+."
                            link="Ver más"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card
                            img={cardCapacitaciones}
                            alt="Descripcion de la imagen"
                            title="Capacitaciones"
                            description="Facilitamos capacitaciones en diversidad, género y discapacidad
                            para empresas y organizaciones."
                            link="Ver más"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card
                            img={cardAcompaniamiento}
                            alt="Descripcion de la imagen"
                            title="Acompañamiento"
                            description="Colaboramos con personas de la comunidad a sortear situaciones complejas."
                            link={<br />}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="contact-section">
                <h2 className='contact-section__title'>¡Dejanos tu mensaje!</h2>

                

                <Contact
                    title="Nombre/s:"
                />

                

                <Contact
                    title="Pronombres/s:"
                
                />

                

                <Contact
                    title="Correo electrónico:"
                
                />

                

                <Message
                    title="Mensaje:"
                />

                

                <Button>Enviar <img src="" alt="" /></Button>
                    

            </div>

        </div>
    );
}

export default Home;