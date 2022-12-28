import Image from 'next/image'
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/paul.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <title>Paul Gubbiotti</title>
        <meta name="description" content="Paul Gubbiotti" />
      </Head>

      <div className="bg-cover bg-blue-500 h-screen w-full flex flex-col items-center justify-center p-4">

        <h1 className="text-6xl text-stone-50 text-center font-fancy pb-8">Paul Gubbiotti</h1>
        <p className="text-stone-50 italic pb-4">Développeur Web (Next JS et Laravel)</p>

        <Image className="rounded-full pb-4" src="/paul.png" width="400" height="400" alt="photo de paul gubbiotti" />

        <div className="flex pb-4">
          <Link target="_blank" href="https://github.com/PaulGub">
            <Image src="/github.svg" width={40} height={40} alt={"logo de instagram"}></Image>
          </Link>



          <Link target="_blank" href="https://www.linkedin.com/in/paul-gubbiotti/">
            <Image src="/linkedin.svg" width={43} height={43} alt={"logo de youtube"}></Image>
          </Link>
        </div>


        <div className="flex">
          <Image src="/email-icon.png" width="20" height="20" alt="logo email" />
          <p className=" text-stone-5 text-stone-50 pl-2"><Link href="mailto:paul.gubbiotti@gmail.com">paul.gubbiotti@gmail.com</Link></p>
        </div>

      </div>
    </>

  )
}