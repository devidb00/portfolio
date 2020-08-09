import MySkills from "./MySkills";
import Studies from "./Studies";
import Experience from "./Experience";
import Learning from "./Learning";
import {useContext} from "react";
import ThemeContext from "../contexts/ThemeContext";
import LanguageContext from "../contexts/LanguageContext";

const Core = () => {
    // Contexts
    const {theme, setTheme} = useContext(ThemeContext);
    const {language, setLanguage} = useContext(LanguageContext);

    const blackBody = "bg-gray-900 border-gray-900";
    const blackHead = "bg-gray-900 text-white";
    const sunBody = "bg-white border-white";
    const sunHead = "bg-grey-200 text-black";

    return (
        <div
            className={`transition duration-500 flex lg:flex-row flex-col ${
                theme === "sun" ? sunHead : blackHead
            }`}
        >
            <div
                className={`transition duration-500 flex flex-col ${
                    theme === "sun" ? sunBody : blackBody
                } h-26 lg:h-screen w-screen lg:w-1/4 shadow-2xl sticky top-0`}
            >
                <div className="h-full my-2">
                    <img
                        className="rounded-full h-16 w-16 lg:h-32 lg:w-32 mx-auto lg:my-8"
                        src="/ProfileImage.jpeg"
                        alt="Ma photo"
                    />
                    <div className="hidden lg:inline text-sm text-center italic font-thin">
                        <p className="mx-4">Salut, c'est Tarik ! </p>
                        <p className="mx-4"> Je suis Scrum Master. Je m'interesse aussi beaucoup à la BI et au
                            développement Web !
                        </p>
                    </div>
                </div>
                <div className="h-12 flex justify-center items-baseline space-x-4">
                    <div>
                        <a href="https://urlz.fr/ds5e" target="_blank">
                            <img className="w-4 h-4" src="/linkedin.png" alt="Linkedin" rel="noopener"/>
                        </a>
                    </div>
                    <div>
                        <input
                            type="image"
                            src={theme === "sun" ? `night.png` : "sun.png"}
                            className="w-4 h-4"
                            onClick={(e) => {
                                e.currentTarget.blur();
                                if (theme === "sun") {
                                    setTheme("night");
                                } else {
                                    setTheme("sun");
                                }
                            }}
                            alt='Theme'
                        />
                    </div>
                </div>
            </div>
            <div className="w-screen lg:w-3/4 h-auto px-4 lg:px-6 lg:py-4 py-2">
                <MySkills/>
                <Studies/>
                <Experience/>
                <Learning/>
            </div>
        </div>
    );
};
export default Core;
