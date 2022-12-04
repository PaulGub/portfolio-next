import Image from 'next/image'
import logo from '../images/roi-lion.gif'


export default function Home() {
  return (
    <div className="bg-cover bg-blue-300 h-screen w-full flex flex-col items-center justify-center p-4">

    <h1 className="text-4xl lg:text-8xl lg:p-9 p-2"> Bienvenue sur gubbiotti.fr </h1>

    <p className="lg:p-9 p-2">Site en cours de construction, bientôt sur vos écrans !</p>

    <Image src={logo} width="500" height="500" alt="logo" />

    </div>

  )
}