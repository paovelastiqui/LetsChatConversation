import Polly from "../assets/Polly.png";
import Raque from "../assets/Raque.png";

export const Team = () => {
  return (
    <section className="bg-stone-950 flex flex-col items-center justify-center w-full h-auto px-10">

        {/* Polly */}
        <div id="Polly" className="max-w-6xl pt-24 sm:px-10">
            <div className="text-left">
                <h2 className="text-stone-50 text-4xl font-sanchez text-center lg:text-left">El team</h2>
                <h3 className="text-red-300 mb-8 text-7xl font-dela text-center lg:text-left">Polly</h3>
            </div>
            <div className="flex flex-col w-full gap-8 lg:flex-row lg:gap-12">
                <div className="flex flex-col w-full justify-center align-middle text-center lg:text-left lg:w-2/3">
                    <p className="text-stone-50 mb-4 font-montserrat">Soy <span className="text-orange-400 font-bold">inglesa</span> (de pura sepa!). A los 18 vine a Argentina por un par de meses, pero 15 años después, y con una <span className="text-orange-400 font-bold">familia bilingüe</span> de por medio, sigo aca!</p>
                    <p className="text-stone-50 mb-4 font-montserrat">Estudié español por muchos años en clases tradicionales, (y de hecho sacaba las mejores notas! Era muy nerd!) pero cuando llegué por primera vez a Argentina <span className="text-orange-400 font-bold">me frustré porque no podía comunicarme</span> de la manera que quisiera! Tardé años en re-aprender la adquisición de idioma, y esto quiero compartir con vos!</p>
                    <p className="text-stone-50 mb-4 font-montserrat">De eso sale mi <span className="text-orange-400 font-bold">pasión</span> para ayudar a los demás poder adquirir herramientas de aprendizaje y practicarlos en un espacio relajada, con el fin de poder comunicarse con más confianza!</p>
                    <p className="text-stone-50 font-montserrat">Con la <span className="text-orange-400 font-bold">formación de Cambridge</span> y la <span className="text-orange-400 font-bold">experiencia de la vida</span> misma en la mano quiero brindarte un espacio para usar tu inglés y mejorar!</p>
                </div>
                <div className="flex flex-col justify-center items-center align-middle lg:w-1/3">
                    <img src={Polly} alt="Polly" className="size-56 lg:size-64 rounded-full"/>
                    <a href="wa.link/vbv68v" target="_blank" rel="noopener noreferrer" className="mt-6 px-4 py-3 w-60 text-center text-lg font-medium rounded-3xl text-stone-950 bg-red-400 hover:bg-orange-400 hover:cursor-pointer">Tomar clases con Polly</a>
                </div>
            </div>
        </div>

        {/* Raque */}
        <div id="Raque" className="max-w-6xl pt-24 pb-10 sm:px-10">
            <div className="sm:text-right">
                <h2 className="text-stone-50 text-4xl font-sanchez text-center lg:text-right">El team</h2>
                <h3 className="text-red-500 mb-8 text-7xl font-dela text-center lg:text-right">Raque</h3>
            </div>
            <div className="flex flex-col-reverse w-full gap-8 lg:flex-row lg:gap-12">
                <div className="flex flex-col justify-center items-center align-middle lg:w-1/3">
                    <img src={Raque} alt="Raque" className="size-56 lg:size-64 rounded-full"/>
                        <a href="wa.link/dllqjm" target="_blank" rel="noopener noreferrer" className="mt-6 px-4 py-3 w-60 text-center text-lg font-medium rounded-3xl text-stone-950 bg-red-500 hover:bg-orange-400 hover:cursor-pointer">Tomar clases con Raque</a> 
                </div>
                <div className="flex flex-col w-full justify-center align-middle text-center lg:text-right lg:w-2/3">
                    <p className="text-stone-50 mb-4 font-montserrat">Soy Raquel. Durante dos años <span className="text-orange-400 font-bold">viví en Estados Unidos</span>, una experiencia que enriqueció mi perspectiva cultural y fortaleció mi <span className="text-orange-400 font-bold">pasión por la enseñanza</span>.</p>
                    <p className="text-stone-50 mb-4 font-montserrat">Creo firmemente que aprender un segundo idioma es una experiencia transformadora, <span className="text-orange-400 font-bold">accesible para todos sin importar la edad o las limitaciones de tiempo</span>.</p>
                    <p className="text-stone-50 font-montserrat">Cuando no estoy enseñando, me encanta perderme en canciones heartbreaking, disfrutar de películas cliché románticas o soñar con futuros viajes llenos de aventuras y paisajes, incluso si aún no tienen una fecha definida.</p>
                </div>
            </div>
        </div>
    </section>
  );
};
