import { SwiperHOC } from "../utils/SwiperHOC"
import { Pagination } from 'swiper';

import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import courseCardImage from "../assets/svg/course-card-image.svg";
import { PastCards } from "../utils/CoursesCards"

import Dropdown from "../components/Dropdown";

function Courses() {
    return (
        <div className="courses">
            <div className="courses-section">
                <h1 className="courses-section__title">Cursos y talleres</h1>
                <h4 className="courses-section__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suspendisse suscipit elit ultricies risus arcu tellus. A, tellus tincidunt tortor, et cras non pretium urna. Risus dolor mi, amet dui dictum et condimentum.
                </h4>

                <CourseCard
                    title="Introducción a UX/UI"
                    img={courseCardImage}
                    teacher="Profe Pepita"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque earum provident, nulla molestias blanditiis voluptatum ab dicta culpa praesentium, explicabo mollitia architecto pariatur accusamus unde consectetur"
                    date="15/07"
                    duration="4 Semanas"
                    modality="Online"
                    // signupHref="_blank"
                />
            </div>

            <div className="past-courses-section">
                <h1 className="past-courses-section__title">Cursos pasados</h1>
                <p className="past-courses-section__description">Seguinos en las redes para no perderte ninguno.</p>

                <SwiperHOC
                    modules={[Pagination]}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                >
                    {PastCards()}
                </SwiperHOC>
            </div>

            <div className="faq-section">
                <h2 className="faq-section__title">Preguntas frecuentes</h2>
                <Dropdown title={"¿Cuál es el costo de los cursos?"}>
                    Los cursos son gratuitos y no tienen coste de emisión de certificado.
                </Dropdown>
                <Dropdown title="¿Quiénes pueden anotarse a los cursos?">
                    Cualquier persona interesada, damos prioridad a personas del colectivo LGTBIQNB+.
                </Dropdown>
                <Dropdown title="¿Si termino el curso recibo un certificado?">
                    ¡Si! Vas a recibir un certificado expedido por Transistemas y los entes que participen de la certificación.
                </Dropdown>
            </div>

            <Footer />
        </div>
    );
}

export default Courses;