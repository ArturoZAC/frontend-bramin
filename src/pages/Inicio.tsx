import Container from "../components/features/Container";
import SwiperBanner from "../components/features/SwiperBanner";

// import AsideNosotros from "../assets/images/asideNosotros.webp";
import WhyBramin from "../assets/images/porque-bramin.webp";
// import Edificios from "../assets/images/edificios.png"

import { motion } from "motion/react";
import ServicioSection from "../components/features/ServicioCard";
// import ProyectosSection from "../components/features/ProyectosSection";
import ContactoSection from "../components/features/ContactoSection";
import { scrollToElement } from "../logic/scrollToElement";
import { FaBullseye, FaGlobeAmericas } from "react-icons/fa";

export default function Inicio() {
  return (
    <div className="overflow-hidden">
      <SwiperBanner />
      <section className="w-full bg-slate-50" id="nosotros">
        <Container className="py-10 space-y-6 pb-20">
          <section className="flex gap-4 items-center lg:flex-row flex-col">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8 lg:w-1/2 w-full"
            >
              <h2 className="text-4xl font-bold text-secondary">
                ¿Porque <span className="text-primary">elegirnos?</span>
              </h2>
              <div className="space-y-3">
                <p>
                  En <strong className="text-secondary">Bramin</strong>, desarrollamos proyectos de
                  ingeniería y construcción con una visión sostenible y orientada al impacto real.
                  No solo ejecutamos obras: creamos soluciones que optimizan recursos, protegen el
                  entorno y fortalecen el desarrollo de las comunidades.
                </p>
                <p>
                  Somos un equipo multidisciplinario de ingenieros, especialistas y técnicos con
                  amplia experiencia en proyectos de infraestructura, minería y gestión ambiental.
                  Nos caracteriza la planificación estratégica, el compromiso con la seguridad y la
                  búsqueda constante de soluciones eficientes y responsables.
                </p>
                <p>
                  Creemos que cada proyecto debe generar valor duradero. Por ello, trabajamos junto
                  a nuestros clientes en cada etapa, comprendiendo sus necesidades y
                  transformándolas en resultados concretos, sostenibles y de alta calidad,
                  construyendo hoy lo que servirá al futuro.
                </p>
              </div>
            </motion.div>
            <div className="lg:w-1/2 w-full">
              <motion.img
                src={WhyBramin}
                alt="AsideNosotros"
                className="w-full rounded-2xl"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-md rounded-xl p-8 text-center border border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <FaBullseye className="text-primary" size={42} />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3">Misión</h3>
              <p className="text-slate-700 leading-relaxed">
                Desarrollar proyectos de ingeniería y construcción que generen valor sostenible,
                optimizando recursos y respetando el entorno, mediante soluciones técnicas
                responsables y adaptadas a las necesidades reales de nuestros clientes y
                comunidades.
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-md rounded-xl p-8 text-center border border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <FaGlobeAmericas className="text-primary" size={42} />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3">Visión</h3>
              <p className="text-slate-700 leading-relaxed">
                Ser una empresa líder en soluciones de ingeniería y sostenibilidad en el país,
                reconocida por su compromiso con la calidad, la innovación, la responsabilidad
                social y la construcción de un futuro más eficiente y equilibrado.
              </p>
            </motion.div>
          </div>
        </Container>

        <section className="bg-secondary w-full py-20 text-white">
          <Container className="flex flex-col gap-9 items-center">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
              Impulsamos proyectos de ingeniería y construcción que generan valor real. Cada
              solución es diseñada para ser eficiente, segura y sostenible, adaptada a las
              necesidades específicas de cada cliente y entorno.
            </p>
            <button
              onClick={() => scrollToElement("#proyectos", 100)}
              className="px-4 py-2 group hover:bg-primary bg-transparent fancy hover:before:bg-white before:bg-white text-white text-sm border-2 border-white  hover:text-white duration-300 transition-colors max-lg:text-sm"
            >
              <span className="top-key bg-secondary group-hover:bg-secondary"></span>
              <span className="text text-white Poppins-Font ps-8">Contactar</span>
              <span className="bottom-key-1 bg-secondary"></span>
              <span className="bottom-key-2 bg-secondary"></span>
            </button>
          </Container>
        </section>

        <section className="bg-slate-50 py-9" id="servicios">
          <Container className="w-full">
            <motion.h2
              className="text-4xl font-bold text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Nosotros contamos con los <span className="text-primary">mejores servicios</span> */}
              Soluciones en <span className="text-secondary">Ingeniería y Sostenibilidad</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mt-3 mb-16"
            >
              Ofrecemos servicios especializados que generan valor, eficiencia y desarrollo
              responsable.
            </motion.p>

            <ServicioSection />
          </Container>
        </section>

        <section className="w-full py-20 bg-primary text-white">
          <Container className="flex flex-col items-center gap-3">
            <p className="text-xl md:text-2xl lg:text-3xl text-center font-medium">
              Conversemos tu proyecto. Nuestro equipo especializado está listo para brindarte
              asesoría técnica y soluciones integrales adaptadas a tus necesidades.
            </p>
            <p className="text-center my-2">
              El siguiente paso hacia un desarrollo eficiente y sostenible comienza con una
              conversación.
            </p>
            <button
              onClick={() => scrollToElement("#contacto", 100)}
              className="px-4 py-2 w-fit fancy text-black hover:bg-secondary hover:text-white hover:before:bg-white border-2 border-white before:bg-white duration-300 transition-colors"
            >
              <span className="top-key bg-primary group-hover:bg-secondary"></span>
              <span className="text text-white Poppins-Font ps-8">Contáctanos</span>
              <span className="bottom-key-1 bg-primary"></span>
              <span className="bottom-key-2 bg-primary"></span>
            </button>
          </Container>
        </section>

        {/* <section className="w-full py-9 bg-slate-50" id="proyectos">
          <Container className="space-y-8">
            <h2 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl">
              Proyectos que <span className="text-primary">hemos diseñado</span>
            </h2>

            <ProyectosSection />
          </Container>
        </section> */}

        <section className="w-full bg-slate-50 text-black" id="contacto">
          <Container>
            <section className="flex lg:flex-row flex-col gap-5">
              <ContactoSection />
            </section>
          </Container>
        </section>
      </section>
    </div>
  );
}
