import type { NextPage } from 'next';
import Layout from "../components/Layout";
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import ImageCard from "../components/ImageCard";
import ContactButton from '../components/ContactButton';
import { contacts } from '../helpers/contacts';

const technologies = [
    {
        name: "JavaScript",
        imgUrl: "/technologies/1.png",
    },
    {
        name: "HTML",
        imgUrl: "/technologies/2.png",
    },
    {
        name: "CSS",
        imgUrl: "/technologies/3.png",
    },
    {
        name: "NEXT.JS",
        imgUrl: "/technologies/4.png",
    },
    {
        name: "REACT.JS",
        imgUrl: "/technologies/5.png",
    },
    {
        name: "React Native",
        imgUrl: "/technologies/6.png",
    },
    {
        name: "PHP",
        imgUrl: "/technologies/7.png",
    },
    {
        name: "Laravel",
        imgUrl: "/technologies/8.png",
    },
    {
        name: "WordPress",
        imgUrl: "/technologies/9.png",
    },
    {
        name: "GraphQL",
        imgUrl: "/technologies/10.png",
    },
    {
        name: "Tailwind CSS",
        imgUrl: "/technologies/11.png",
    },
];

const intro = "Je suis une personne passionnée par le monde du numérique depuis mon plus jeune âge. Je suis constamment à la recherche de nouvelles façons d'explorer et de repousser les limites de la technologie. Je suis très consciencieux et je m'investis pleinement dans chaque projet que j'entreprends. J'aime travailler dur et je suis toujours prêt à relever de nouveaux défis. De nature très curieuse, j'aime explorer des sujets de multiples horizons, que ce soit en programmation, en design, en marketing numérique ou dans tout autre domaine lié à la technologie. J'aime apprendre et découvrir de nouvelles choses. Si vous cherchez quelqu'un de passionné, déterminé et toujours prêt à relever de nouveaux défis, alors je suis la personne qu'il vous faut. Je suis prêt à travailler avec vous pour créer quelque chose d'incroyable dans le monde du numérique.";

const passions = [
    {
        name: "Cyclisme et Randonnée",
        imgUrl: "/passions/1.png",
    },
    {
        name: "Audiovisuel",
        imgUrl: "/passions/2.png",
    },
    {
        name: "Jeux de société et Jeux vidéo",
        imgUrl: "/passions/3.png",
    },
    {
        name: "Mangas et Bandes dessinées",
        imgUrl: "/passions/4.png",
    },
];

const Home: NextPage = () => {
    return (
        <Layout>
            <div className="lg:text-2xl text-xl">

                <div
                    className="bg-cover bg-[url('/background.jpg')] lg:h-screen h-auto min-h-fit min-w-fit  flex flex-col  justify-center"
                >
                    <div className="grid lg:grid-cols-6 grid-cols-1">

                        <div className='lg:px-10 py-7 px-2 col-span-4 text-center lg:text-left'>

                            <p className="text-pur">Bienvenue sur mon portfolio, je suis </p>

                            <h1 className=" text-stone-5 py-6 text-7xl font-fancy ">Paul Gubbiotti</h1>

                            <h1 className="text-4xl">
                                <Typewriter
                                    options={{
                                        strings: ['Développeur Web', 'Curieux', 'Passionné'],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 15,
                                        cursor: ""
                                    }}
                                />
                            </h1>

                            <p className=" text-stone-5 pb-4 pt-5">Actuellement en développement web, je recherche une alternance pour l&apos;année prochaine.</p>

                            <div>
                                {contacts.map(({ link, title, icon }) => (
                                    <ContactButton href={link} text={title} logo={icon} key={title} />
                                ))}
                            </div>

                        </div>

                        <div className='col-span-2 lg:justify-start justify-center flex py-7 px-2'>
                            <Image className="bg-pur rounded-full" src={"/paul.png"} width="400" height="400"
                                alt="image de paul gubbiotti" />
                        </div>

                    </div>

                </div>

                <div className="px-6 py-32 leading-loose">

                    <h1 className="font-bold text-4xl text-pur text-center pb-10 ">Mes Compétences</h1>

                    <div className={"grid lg:grid-cols-4 grid-cols-1 gap-10 pt-10"}>
                        {technologies.map((tech, index) => (
                            <ImageCard tech={tech} key={index} />
                        ))}
                    </div>

                </div>

                <div className="px-6 py-32 bg-pur text-stone-50 leading-loose">

                    <p>{intro}</p>

                </div>

                <div className="px-6 py-32  leading-loose">

                    <h1 className="font-bold text-4xl text-pur text-center pb-10">Mes passions</h1>

                    <div className={"grid lg:grid-cols-4 grid-cols-1 gap-10 pt-10"}>
                        {passions.map((tech, index) => (
                            <ImageCard tech={tech} key={index} />
                        ))}
                    </div>

                </div>

            </div>
        </Layout>
    );
};

export default Home;