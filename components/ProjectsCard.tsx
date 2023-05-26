import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

interface Props {
    data: {
        img: string;
        title: string;
        description: string;
        linkGitHub?: string;
        linkFigma?: string;
        linkAPI?: string;
        link: string;
        techno: any;
    };
}

export default function PrestationCard({ data }: Props) {
    return (
        <div className="bg-pur rounded-lg h-full ">
        
            <div>
                <div className={"absolute pl-2 pt-2 z-[6] "}>
                    <p className={"bg-pur p-2 rounded-lg text-center"}>
                        {data.techno?.map((tech: string, index: number) => (
                            <span className="text-white" key={index}>
                                <Image className="bg-white rounded-full" src={`/icons/${tech.toLowerCase()}.png`} alt={tech} width={20} height={20} />
                                {tech}
                                {index !== (data.techno?.length ?? 0) - 1 && ", "}
                            </span>
                        ))}
                    </p>
                </div>

                <div className="w-full h-[300px] relative bg-black">
                    <Image
                        src={data.img}
                        alt="images des prestations"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                        placeholder="blur"
                        blurDataURL={data.img}
                    />
                </div>

                <div className="p-6">
                    <p className="text-stone-50 uppercase text-3xl font-bold">
                        {data.title}
                    </p>

                    <p className="text-stone-50 pt-3 text-xl">{data.description}</p>

                    <div className="flex justify-start gap-4 py-4">
                        {data.linkGitHub && (
                            <Link href={data.linkGitHub} target="_blank">
                                <div className="inline-block bg-white font-bold py-2 px-4 rounded">
                                    <Image src="/icons/github.svg" alt="GitHub logo" width={20} height={20} />
                                    GitHub
                                </div>
                            </Link>
                        )}

                        {data.linkFigma && (
                            <Link href={data.linkFigma} target="_blank">
                                <div className="inline-block bg-white font-bold py-2 px-4 rounded">
                                    <Image src="/icons/figma.svg" alt="Figma logo" width={20} height={20} />
                                    Figma
                                </div>
                            </Link>
                        )}

                        {data.linkAPI && (
                            <Link href={data.linkAPI} target="_blank">
                                <div className="inline-block bg-white font-bold py-2 px-4 rounded">
                                    <Image src="/icons/api.svg" alt="API logo" width={20} height={20} />
                                    API
                                </div>
                            </Link>
                        )}

                        <Link href={data.link} target="_blank">
                            <div className="inline-block bg-white font-bold py-2 px-4 rounded">
                                <Image src="/icons/site.svg" alt="Site logo" width={20} height={20} />
                                Le site
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}