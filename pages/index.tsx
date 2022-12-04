import Image from 'next/image'
import logo from '../images/roi-lion.gif'


export default function Home() {
  return (
    <div className="bg-cover bg-blue-300 h-screen w-full flex flex-col items-center justify-center">

    <h1 className="text-9xl p-9"> Bienvenue sur gubbiotti.fr </h1>

    <p className="p-9">Site en cours de construction, bientôt sur vos écrans !</p>

    <Image src={logo} width="500" height="500" alt="logo" />

    </div>

  )
}