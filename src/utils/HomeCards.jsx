import cardTalleres from '../assets/svg/card_talleres.svg';
import cardCapacitaciones from '../assets/svg/card_capacitaciones.svg';
import cardAcompaniamiento from '../assets/svg/card_acompaniamiento.svg';
import { SwiperSlide } from 'swiper/react';
import InfoCard from '../components/InfoCard';

const cards = [
    {
        img: cardTalleres,
        alt: "Descripcion de la imagen",
        title: "Cursos y Talleres",
        description: "Brindamos capacitaciones en Testing, Diseño UX/UI y Desarrollo web para personas de la comunidad LGTBI+.",
        link: "Ver más"
    },

    {
        img: cardCapacitaciones,
        alt: "Descripcion de la imagen",
        title: "Capacitaciones",
        description: "Facilitamos capacitaciones en diversidad, género y discapacidad para empresas y organizaciones.",
        link: "Ver más"
    },

    {
        img: cardAcompaniamiento,
        alt: "Descripcion de la imagen",
        title: "Acompañamiento",
        description: "Colaboramos con personas de la comunidad a sortear situaciones complejas.",
        link: "Ver más"
    }
];

const HomeSlides = () => cards.map((item, idx) =>
(<SwiperSlide key={idx}>
    <InfoCard
        img={item.img}
        alt={item.alt}
        title={item.title}
        description={item.description}
        link={item.link}
    />
</SwiperSlide>));

export default HomeSlides;