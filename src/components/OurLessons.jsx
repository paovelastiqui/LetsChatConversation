import Clases from "../assets/clases.png";

export const OurLessons = () => {
  return (
    <section className="bg-stone-950 flex items-center justify-center w-full h-auto pt-24 px-10">
      <div className="max-w-6xl px-10 flex flex-col">
        <p className="text-stone-50 text-5xl font-normal font-dela text-center md:text-left">NUESTRAS</p>
        <p className="text-stone-50 text-5xl font-normal font-dela mb-8 text-center md:text-left">CLASES</p>
        <div className="flex flex-col pt-2 md:flex-row">
          <div className="flex flex-col justify-center w-full text-center md:w-1/2 md:text-left">
            <p className="text-stone-50 mb-4 font-montserrat"><span className="text-orange-400 font-bold text-xl">· </span>Se enfocan en la <span className="text-orange-400 font-bold">comunicación</span> en inglés! </p>
            <p className="text-stone-50 mb-4 font-montserrat"><span className="text-orange-400 font-bold text-xl">· </span>Son <span className="text-orange-400 font-bold">grupos reducidos</span> (el máximo son 6 personas por curso), para que se pueda generar un ambiente de intercambio lingüístico!</p>
            <p className="text-stone-50 mb-4 font-montserrat"><span className="text-orange-400 font-bold text-xl">· </span>Vas a tener tiempo y espacio para <span className="text-orange-400 font-bold">interactuar</span> con tu profesor y con tus compañeros de clase, resolviendo todas las dudas</p>
            <p className="text-stone-50 mb-4 font-montserrat"><span className="text-orange-400 font-bold text-xl">· </span><span className="text-orange-400 font-bold">¡Son 100% prácticas!</span> Hablamos mucho! Y aprendemos mientras escuchamos también!</p>
            <p className="text-stone-50 mb-4 font-montserrat"><span className="text-orange-400 font-bold text-xl">· </span>Hablamos sobre una <span className="text-orange-400 font-bold">gran variedad de temas</span> interesantes actuales.</p>
            <p className="text-stone-50 mb-4 font-montserrat"><span className="text-orange-400 font-bold text-xl">· </span>¡Se aprende hablando y pasándola bien! Queremos que acá puedas <span className="text-orange-400 font-bold">perder el miedo</span> a hablar.</p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center align-middle items-center text-center">
            <img src={Clases} alt="clases" className="w-64 h-64 lg:w-80 lg:h-80" />
          </div>     
        </div>
      </div>
    </section>
  );
};
  