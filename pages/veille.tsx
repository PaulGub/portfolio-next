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
                <Link target="blank" className="p-2 text-s bg-yellow-400 rounded-lg " href="/PWA.pdf">Version PDF</Link>
                <p className="p-1"></p>
                <Image className="pb-2" src="/pwa.gif" width="400" height="400" alt="gif pwa" />
                <nav className="text-stone-50">
                    <ol>
                        <li><a href="#part 1">I/ Les grands principes</a></li>
                        <li><a href="#part 2">II/ Les grands utilisateurs</a></li>
                        <li><a href="#part 3">III/ Les dernières versions</a></li>
                        <li><a href="#part 4">IV/ Les avantages</a></li>
                        <li><a href="#part 5">V/ Les inconvénients</a></li>
                        <li><a href="#part 6">VI/ Le fonctionnement</a></li>
                        <li><a href="#part 7">VII/ Mise en pratique</a></li>
                        <li><a href="#part 8">VIII/ Sources</a></li>
                    </ol>
                </nav>
            </div>

            <div className="p-6 lg:h-screen" id="part 1">
                <h1 className="text-4xl pb-4"> I/ Les grands principes</h1>
                <p className="italic">                Les sites web sont plus simples et rapides d’accès. En effet, il ne nécessite aucune
                    installation particulière, pas de système d’exploitation par exemple. Il suffit d’un accès à un
                    internet et du lien et, c’est bon, vous êtes sur le site.
                    <br></br><br></br>
                    Tandis que les applications natives sont plus en symbiose avec le système d’exploitation
                    avec une expérience utilisateur plus fluide. Un des gros avantages des applications et leurs
                    usages hors ligne. De plus, sur téléphone, il est bien plus rapide et agréable de cliquer sur
                    l’icône de l’application que d’ouvrir un navigateur et de sélectionner le site (sachant que des
                    fois, il faut se reconnecter).
                    <br></br><br></br>
                    Eh bien grâce au PWA, vous prenez tous les avantages sans les inconvénients et c’est bon.
                    <br></br><br></br>
                    Les PWA ne nécessitent aucune installation, elles ne prennent pas de place sur votre
                    espace de stockage, mais elles sont accessibles sur votre tiroir d’applications. Pour partager
                    l’application, il vous suffit d’envoyer un lien et l’appareil vous propose d’installer l’application.</p>
            </div>

            <div className="p-6 bg-blue-500 text-stone-50 lg:h-screen" id="part 2">
                <h1 className="text-4xl pb-4"> II/ Les grands utilisateurs</h1>
                <p className="italic">
                    Les PWA sont utilisés dans de nombreux domaines.
                    <br></br><br></br>
                    Dans les médias, 20 minutes, Sud Ouest, l’Équipe, Courrier International… utilise des PWA.
                    <br></br><br></br>
                    Les réseaux sociaux comme YouTube (Google) et Twitter utilisent aussi les PWA.
                    <br></br><br></br>
                    Même des chaînes de restauration comme Starbucks Coffee. Starbucks double son nombre
                    d’utilisateurs.
                    <br></br><br></br>
                    D’autres exemples de grandes entreprises : Spotify, Uber…
                    <br></br><br></br>
                    Elles permettent aussi un regain de popularité et de fidélisation.
                    <br></br><br></br>
                    Un exemple flagrant, Flipkart Lite (principal site e-commerce en Inde), redéveloppé en PWA
                    en 2015, ce qui a conduit à 70 % d’augmentation.
                    <br></br><br></br>
                    AliExpress a aussi une augmentation similaire, 104 %.
                </p>
            </div>

            <div className="p-6 lg:h-screen" id="part 3">
                <h1 className="text-4xl pb-4">III/ Les dernières versions</h1>
                <p className=" italic">
                    La première version date de 2015.
                    <br></br><br></br>
                    Il y a tous les ans des sommets <Link href="https://pwasummit.org/">(pwasummit.org)</Link> qui présentent les nouveautés et
                    regroupent la communauté.
                </p>
            </div>

            <div className="p-6 bg-blue-500 text-stone-50 lg:h-screen" id="part 4">
                <h1 className="text-4xl pb-4">IV/ Les avantages</h1>
                <p className=" italic">
                    Le système de cache des Services Workers permettent un gain de temps, avec une
                    diminution du temps de chargement et de l’utilisation de la bande passante.
                    <br></br><br></br>
                    La mise à jour concerne uniquement les modifications effectuées, alors que la mise à jour
                    d’implication native doit tout réinstaller.
                    <br></br><br></br>
                    Contrairement à un site en responsive, l’application ressemble à une application native
                    (icônes, plein écran…).
                    <br></br><br></br>
                    Grâce aux notifications, les utilisateurs sont davantage impliqués, avec des taux de
                    conversion plus élevés.
                    <br></br><br></br>
                    Le site web PWA Stats partage de nombreux cas d’études qui démontrent ces bénéfices.
                    <br></br><br></br>
                    Les PWA se trouvent dans les moteurs de recherche et l’algorithme de Google les met en
                    valeur.
                    <br></br><br></br>
                    Elles occupent moins d’espace dans la mémoire de l’appareil, car il n’est pas nécessaire de
                    la télécharger.
                </p>


            </div>
            <div className="p-6 lg:h-screen" id="part 5">
                <h1 className="text-4xl pb-4">V/ Les inconvénients</h1>
                <p className="italic">Plusieurs fonctionnalités sont indisponibles sur iOS. En 2021, cela représente 26 % des
                    smartphones dans le monde.
                    <br></br><br></br>
                    Les PWA ne sont pas disponibles sur les différents marchés d’application, ce qui porte
                    préjudice, car de nombreux utilisateurs utilisent seulement le magasin officiel pour installer
                    des applications.
                    <br></br><br></br>
                    Les PWA n’ont pas accès aux fonctionnalités natives (réalité augmentée, Bluetooth, appareil
                    photo…) ce qui peut freiner les développent pour des applications innovantes et
                    conséquentes.
                    <br></br><br></br>
                    La batterie des smartphones est plus sollicitée parce que le code est moins optimisé que
                    celui des applications natives.
                    <br></br><br></br>
                    Des navigateurs comme Mozilla Firefox, ont abandonné cette technologie.
                </p>
            </div>

            <div className="p-6 bg-blue-500 text-stone-50 lg:h-screen" id="part 6">
                <h1 className="text-4xl pb-4">VI/ Le fonctionnement</h1>
                <p className=" italic pb-4">
                    Les PWA permettent d’adapter son site en application. Les PWA sont disponibles à la fois
                    sur ordinateur comme sur téléphone portable.
                    <br></br><br></br>
                    Une PWA n’utilise pas qu’une seule technologie, en effet, elle intègre une nouvelle façon de
                    développer certains motifs spécifiques, des API et d’autres.
                    <br></br><br></br>
                    Elles sont développées à l’aide de technologies spécifiques et de standards leur permettant
                    de tirer parti à la fois des fonctionnalités du web et de celles des applications natives.
                    <br></br><br></br>
                    Ce n’est pas évident de savoir si une application est une PWA. Une application peut être
                    considérée comme une application web progressive si elle remplit certains critères, intégrés
                    des fonctionnalités : fonctionne hors-ligne, est installable, est facile à synchroniser, peut
                    envoyer des notifications push, etc.
                    <br></br><br></br>
                    Google Lighthouse permet de mesurer la conformité d’une app à une PWA.
                    <br></br><br></br>
                    Il y a des principes clés qu’une application web devrait suivre afin d’être identifié comme une
                    PWA. Elle doit être :
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
            </div>

            <div className="p-6 lg:h-screen" id="part 7">
                <h1 className="text-4xl pb-4">VII/ Mise en pratique</h1>
                <p className="italic">Je vous conseille cette vidéo très détaillée. Elle est synthétisée et structurée ce qui facilite la
                    compréhension.
                    <br></br>
                    <Link target="black" href="https://www.youtube.com/watch?v=pbSdAp8EmwI">https://www.youtube.com/watch?v=pbSdAp8EmwI</Link>
                    <br></br><br></br>

                    Pour faire ma démonstration, je me suis servie de ces tutoriels.
                    <br></br>
                    <Link target="black" href="https://www.progressive-web-apps.fr/mobile-apps-SSR-tailwind-nextjs-ionic-and-capacitor">https://www.progressive-web-apps.fr/mobile-apps-SSR-tailwind-nextjs-ionic-and-capacitor</Link>
                    <br></br>
                    <Link target="black" href="https://learn.microsoft.com/fr-fr/microsoft-edge/progressive-web-apps-chromium/how-to/">https://learn.microsoft.com/fr-fr/microsoft-edge/progressive-web-apps-chromium/how-to/</Link>

                    <br></br><br></br>
                    Pour une démonstration plus aboutie, vous pourrez participer à ma présentation en direct à
                    l’IUT de Bordeaux le 3 février 2023.
                </p>
            </div>

            <div className="p-6 bg-blue-500 text-stone-50 lg:h-screen" id="part 8">
                <h1 className="text-4xl pb-4">Sources</h1>
                <p className="italic">
                    <Link target="black" href="https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps">https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps</Link>
                    <br></br>
                    <Link target="black" href="https://deckad.fr/quest-ce-que-la-progressive-web-app-ses-avantages-et-inconvenients/">https://deckad.fr/quest-ce-que-la-progressive-web-app-ses-avantages-et-inconvenients/</Link>
                    <br></br>
                    <Link target="black" href="https://www.presse-citron.net/android-perd-des-parts-de-marche-ios-en-hausse/">https://www.presse-citron.net/android-perd-des-parts-de-marche-ios-en-hausse/</Link>
                    <br></br>
                    <Link target="black" href="https://web.dev/progressive-web-apps/">https://web.dev/progressive-web-apps/</Link>
                    <br></br>
                    <Link target="black" href="https://www.3cx.fr/blog/client-web-pwa/">https://www.3cx.fr/blog/client-web-pwa/</Link>
                    <br></br>
                    <Link target="black" href="https://www.aquilapp.fr/etudes-statistiques/le-marche-des-progressive-web-app-en-2022-en-france/">https://www.aquilapp.fr/etudes-statistiques/le-marche-des-progressive-web-app-en-2022-en-france/</Link>
                </p>
            </div>
        </>
    )
}