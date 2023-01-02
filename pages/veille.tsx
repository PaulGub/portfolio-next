import Image from 'next/image'
import Link from "next/link";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <link rel="icon" href="/pwa.gif" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <title>Veille technologique</title>
                <meta name="description" content="Veille technologique" />
            </Head>

            <div className="bg-cover bg-blue-500 h-screen w-full flex flex-col items-center justify-center p-12">

                <h1 className="text-6xl text-stone-50 text-center font-fancy pb-8">Veille technologique</h1>
                <p className="text-stone-50 italic pb-4 text-center">Progressive web app (PWA) - Paul Gubbiotti</p>

                <Image className="pb-4" src="/pwa.gif" width="400" height="400" alt="gif pwa" />

                <nav className="text-stone-50">
                    <ol>
                        <li><a href="#part 1">I/ Les grands principes</a></li>
                        <li><a href="#part 2">II/ Les grands utilisateurs</a></li>
                        <li><a href="#part 3">III/ Les dernières versions</a></li>
                        <li><a href="#part 4">IV/ Les avantages</a></li>
                        <li><a href="#part 5">V/ Les inconvénients</a></li>
                        <li><a href="#part 6">VI/ Le fonctionnement</a></li>
                        <li><a href="#part 7">VII/ Mise en pratique</a></li>
                    </ol>
                </nav>

            </div>

            <div className="p-6 lg:h-screen" id="part 1">
                <h1 className="text-4xl pb-4"> I/ Les grands principes</h1>

                <p className=" italic pb-4">
                    Les sites web sont plus simples et rapides d’accès. En effet, il ne nécessite aucune installation particulière, pas de système d’exploitation par exemple. Il suffit d’un accès à un internet et du lien et, c’est bon, vous êtes sur le site.
                </p>

                <p className="italic pb-4">
                    Tandis que les applications natives sont plus en symbiose avec le système d’exploitation avec une expérience utilisateur plus fluide. Un des gros avantages des applications et leurs usages hors ligne. De plus, sur téléphone, il est bien plus rapide et agréable de cliquer sur l’icône de l’application que d’ouvrir un navigateur et de sélectionner le site (sachant que des fois, il faut se reconnecter).
                </p>

                <p className="italic pb-4">
                    Eh bien grâce au PWA, vous prenez tous les avantages sans les inconvénients et c’est bon.
                </p>

                <p className="italic">
                    Les PWA ne nécessite aucune installation, elles ne prennent pas de place sur votre espace de stockage, mais elles sont accessibles sur votre tiroir d’applications. Pour partager l’application, il vous suffit d’envoyer un lien et l’appareil vous propose d’installer l’application.
                </p>
            </div>

            <div className="p-6 bg-blue-500 text-stone-50 lg:h-screen" id="part 2">
                <h1 className="text-4xl pb-4"> II/ Les grands utilisateurs</h1>

                <p className=" italic pb-4">
                    Un exemple flagrant, Flipkart Lite (principal site e-commerce en Inde), redéveloppé en PWA en 2015, ce qui a conduit à 70 % d’augmentation.
                </p>

                <p className="italic pb-4">

                    AliExpress a aussi une augmentation similaire, 104 %.

                </p>

                <p className="italic">
                    YouTube (Google) et Twitter utilisent aussi les PWA.
                </p>

            </div>

            <div className="p-6 lg:h-screen" id="part 3">
                <h1 className="text-4xl pb-4">III/ Les dernières versions</h1>

                <p className=" italic pb-4">
                    La première version date de 2015.
                </p>

            </div>

            <div className="p-6 bg-blue-500 text-stone-50 lg:h-screen" id="part 4">
                <h1 className="text-4xl pb-4">IV/ Les avantages</h1>

                <p className=" italic pb-4">
                    Le système de cache des Services Workers permettent un gain de temps, avec une diminution du temps de chargement et de l’utilisation de la bande passante.

                </p>

                <p className="italic pb-4">

                    La mise à jour concerne uniquement les modifications effectuées, alors que la mise à jour d’implication native doive tous réinstaller.
                </p>

                <p className="italic pb-4">

                    Contrairement à un site en responsive, l’application ressemble à une application native (icônes, plein écran…).

                </p>

                <p className="italic pb-4">

                    Grace aux notifications, les utilisateurs sont davantage impliqués, taux de conversion plus élevés.Grace aux notifications, les utilisateurs sont davantage impliqués, taux de conversion plus élevés.
                </p>

                <p className="italic">

                    Le site web PWA Stats partage de nombreux cas d’études qui démontrent ces bénéfices.
                </p>

            </div>

            <div className="p-6 lg:h-screen" id="part 5">
                <h1 className="text-4xl pb-4">V/ Les inconvénients</h1>


            </div>

            <div className="p-6 bg-blue-500 text-stone-50 lg:h-screen" id="part 6">
                <h1 className="text-4xl pb-4">VI/ Le fonctionnement</h1>

                <p className=" italic pb-4">
                    Les PWA permettent d’adapter son site en application. Les PWA sont disponibles à la fois sur ordinateur comme sur téléphone portable.
                </p>

                <p className="italic pb-4">

                    Une PWA n’utilise pas qu’une seule technologie, en effet, elle intègre une nouvelle façon de développer, certains motifs spécifiques, des API et d’autre.

                </p>

                <p className="italic pb-4">
                    Elles sont développées à l’aide de technologies spécifiques et de standards leur permettant de tirer parti à la fois des fonctionnalités du web et de celles des applications natives.

                </p>

                <p className="italic pb-4">
                    Ce n’est pas évident de savoir si une application est une PWA. Une application peut être considérée une application web progressive si elle remplit certains critères, intégrés des  fonctionnalités : fonctionne hors-ligne, est installable, est facile à synchroniser, peut envoyer des notifications push, etc.
                </p>

                <p className="italic pb-4">
                    Google Lighthouse permet de mesurer la conformité d’une app à une PWA.

                </p>

                <p className="italic">
                    Il y a des principes clés qu’une application web devrait suivre afin d’être identifié comme une PWA. Elle doit être :

                </p>

                <table>

                    <tbody>
                        <tr>
                            <td>Discoverable (Découvrable)</td>
                            <td>afin que le contenu soit trouvé à l’aide de moteurs de recherche.</td>
                        </tr>
                        <tr>
                            <td>Installable</td>
                            <td>afin d’être disponible sur l’écran d’accueil de l’appareil.</td>
                        </tr>
                        <tr>
                            <td>Linkable (Lien vers)</td>
                            <td>afin que vous puissiez la partager simplement en envoyant un lien.</td>
                        </tr>
                        <tr>
                            <td>Network independent (Indépendant du réseau)</td>
                            <td>afin qu’elle fonctionne hors-ligne ou avec une mauvaise connexion internet.</td>
                        </tr>
                        <tr>
                            <td>Progressive (Progressif)</td>
                            <td>afin qu’elle soit utilisable sur les plus vieux navigateurs, mais complétement fonctionnelle sur les derniers.</td>
                        </tr>
                        <tr>
                            <td>Re-engageable (Réengageable)</td>
                            <td>afin qu’elle soit capable d’envoyer des notifications lorsque du nouveau contenu est disponible.</td>
                        </tr>
                        <tr>
                            <td>Responsive (Réactif)</td>
                            <td>afin qu’elle soit fonctionnelle sur n’importe quel appareil et résolution d’écran — téléphones mobiles, tablettes, ordinateurs portables, télévisions, réfrigérateurs, etc.</td>
                        </tr>
                        <tr>
                            <td>Safe (Sécurité)</td>
                            <td>afin que la connexion entre vous et l’application soit sécurisée et prévienne n’importe quel tiers d’accéder à vos données.</td>
                        </tr>
                    </tbody>
                </table>
                <Link target="black" href="https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps/Introduction">Source</Link>

            </div>

            <div className="p-6 lg:h-screen" id="part 7">
                <h1 className="text-4xl pb-4">VII/ Mise en pratique</h1>

            </div>


        </>

    )
}