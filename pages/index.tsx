import type { NextPage } from 'next';
import Layout from "../components/Layout";
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import ImageCard from "../components/ImageCard";
import ContactButton from '../components/ContactButton';
import { contacts } from '../helpers/contacts';
import { technologies } from '../helpers/technologies';
import { intro } from '../helpers/intro';
import { passions } from '../helpers/passions';
import { actual } from '../helpers/actual';

const Home: NextPage = () => {
    return (
        <Layout>
            <div className="lg:text-2xl text-xl">
                <div
                    className="bg-cover bg-[url('/background.jpg')] lg:h-screen h-auto min-h-fit min-w-fit flex flex-col justify-center"
                >
                    <div className="grid lg:grid-cols-6 grid-cols-1">
                        <div className='lg:px-10 py-7 px-2 col-span-4 text-center lg:text-left'>
                            <p className="text-pur">Bienvenue sur mon portfolio, je suis </p>
                            <h1 className="text-stone-5 py-6 text-7xl font-fancy ">Paul Gubbiotti</h1>
                            <h1 className="text-4xl">
                                <Typewriter
                                    options={{
                                        strings: ['Développeur Web', 'Curieux', 'Passionné', 'Rigoureux', 'Organisé', 'Polyvalent', 'Motivé'],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 15,
                                        cursor: ""
                                    }}
                                />
                            </h1>
                            <p className="text-stone-5 pb-4 pt-5">{actual}</p>
                            <div>
                                {contacts.map(({ link, title, icon }) => (
                                    <ContactButton href={link} text={title} logo={icon} key={title} />
                                ))}
                            </div>
                        </div>
                        <div className='col-span-2 lg:justify-start justify-center flex py-7 px-2'>
                            <Image className="bg-pur rounded-full" src={"/paul.png"} width="400" height="400" alt="image de paul gubbiotti" />
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
                <div className="px-6 py-32 leading-loose">
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