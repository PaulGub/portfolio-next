import * as React from "react";

interface Tech {
  name: string;
  imgUrl: string;
}

interface Props {
  tech: Tech;
}

export default function ImageCard({ tech }: Props) {
  return (
    <div className="items-center text-center flex flex-col bg-pur/30 p-4 rounded-lg">
      <div
        style={{ 
          backgroundImage: `url(${tech.imgUrl})`,
          width: "64px",
          height: "64px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain"
        }}
      />

      <p className="pt-5 leading-none">{tech.name}</p>
    </div>
  );
}