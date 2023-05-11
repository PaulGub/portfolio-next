import Layout from "../components/Layout";
import ProjectsCard from "../components/ProjectsCard";
import { projects } from '../helpers/projects';

export default function Projects() {
    return (
        <Layout>
            <div className="py-12">
                <h1 className="flex justify-center items-center lg:text-7xl text-5xl pb-5 font-fancy">
                    Mes Projets
                </h1>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 p-4">
                    {projects.map((data, index) => (
                        <div key={index}>
                            <ProjectsCard data={data} />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}