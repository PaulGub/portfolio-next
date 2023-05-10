import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

interface Props {
    data: {
        img: string;
        title: string;
        description: string;
        linkGitHub: string;
        link: string;
        techno: any;
    };
}

export default function PrestationCard({ data }: Props) {
    return (
        <div className="bg-pur rounded-lg h-full">

            <div>
                <div className={"absolute pl-2 pt-2 z-[6] "}>
                    <p className={"bg-pur p-2 rounded-lg text-center"}>
                        {data.techno?.map((tech: string, index: number) => (
                            <span className="text-white" key={index}>
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
                        objectFit="cover"
                        objectPosition="center"
                        placeholder="blur"
                        blurDataURL={data.img}
                    />
                </div>

                <div className="p-6">
                    <p className="text-stone-50 uppercase text-3xl text-center font-bold">
                        {data.title}
                    </p>

                    <p className="text-stone-50 pt-3 text-xl">{data.description}</p>

                    <div className="flex justify-center gap-4 py-4">
                        <Link
                            href={data.linkGitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white font-bold py-2 px-4 rounded"
                        >
                            GitHub
                        </Link>

                        <Link
                            href={data.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white font-bold py-2 px-4 rounded"
                        >
                            Le site
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}