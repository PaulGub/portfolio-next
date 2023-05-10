import Layout from "../components/Layout";
import ProjectsCard from "../components/ProjectsCard";

const datas = [
  {
    linkGitHub: "https://github.com/PaulGub/portfolio-next",
    link: "https://www.gubbiotti.fr/",
    img: "/projects/paul.png",
    title: "Mon portfolio",
    description: "Mon site portfolio est un espace en ligne où je présente mes compétences, mes réalisations et mes projets passés. Il est conçu pour mettre en valeur mes talents et me permettre de me connecter avec d'éventuels employeurs ou clients potentiels.",
    techno: ["Next.JS", "TailwindCSS"]
  },
  {
    linkGitHub: "https://github.com/PaulGub/angevie-next",
    link: "https://www.angeetvie.fr/",
    img: "/projects/angelique.png",
    title: "Site Ange&Vie",
    description: "Ange&Vie est un site web dédié à l'énergétique et à la guérison holistique, proposant une gamme de prestations de qualité pour aider les individus à retrouver l'équilibre et le bien-être dans leur vie. La propriétaire, une énergéticienne expérimentée, y présente ses différentes prestations, incluant la thérapie énergétique, la méditation guidée et les soins énergétiques à distance. Le site offre également une description détaillée des tarifs pratiqués, ainsi qu'une présentation personnelle de l'énergéticienne, mettant en avant son expérience et sa passion pour aider les gens à se sentir mieux dans leur corps et leur esprit.",
    techno: ["WordPress"]
  },
];

export default function Projects() {
  return (
    <Layout>
      <div className="py-12">
        <h1 className=" flex justify-center items-center lg:text-7xl text-5xl pb-5 font-fancy">
          Mes Projets
        </h1>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 p-4">
          {datas.map((data, index) => {
            return (
              <div key={index}>
                <ProjectsCard data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}