// import { Link } from "react-router-dom";
import Home from "../assets/home.png";

export const Hero = () => {
  return (
    <section id="Home" className="bg-stone-950 flex items-center justify-center w-full h-auto pb-16 pt-32 px-10">
        <div className="max-w-6xl flex flex-col-reverse justify-between items-center gap-0 md:flex-row-reverse md:gap-4 lg:gap-24">
            <div className="flex">
                <div className="flex items-center justify-center">
                    <img src={Home} alt="home" className="w-96"/>
                </div>
            </div>
            <div>
                <p className="text-stone-50 text-6xl text-center font-normal mb-4 font-dela md:text-7xl md:text-left">LET'S</p>
                <p className="text-stone-50 text-6xl text-center font-normal mb-4 font-dela md:text-7xl md:text-left">CHAT</p>
                <p className="text-orange-400 text-2xl font-sanchez text-center md:text-left">Practical English conversation</p>
            </div>
        </div>
    </section>
  );
};
