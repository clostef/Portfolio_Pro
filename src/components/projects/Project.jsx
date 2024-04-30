import { FolderOpenDot } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    name: "Ohmyfood",
    techno: "HTML/CSS",
    link: "https://github.com/clostef/clostef.github.io",
    bgImg: "https://images5.alphacoders.com/380/thumb-1920-380966.jpg",
  },
  {
    name: "Kasa project",
    techno: "JAVASCRIPT",
    link: "https://github.com/clostef/Kasa_project",
    bgImg:
      "https://hospitality-on.com/sites/default/files/import/contenu/velizy2_opt.jpg",
  },
  {
    name: "bank user",
    techno: "REACT",
    link: "https://github.com/clostef/bank_user",
    bgImg:
      "https://th.bing.com/th/id/OIP.7HjHMev7e3NTJNWbMdyP4wHaE8?w=600&h=400&rs=1&pid=ImgDetMain",
  },
];

export const Project = () => {
  return (
    <>
      <div id="projets" className="flex gap-3 items-center">
        <FolderOpenDot className="size-8" />
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Projets
        </h2>
      </div>

      <Carousel className="w-full m-auto max-w-xs">
        <CarouselContent>
          {projects.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="relative">
                  <img
                    src={item.bgImg}
                    alt="Image"
                    className="w-full rounded-lg"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 className="text-white text-4xl font-bold pb-2">
                      {item.techno}
                    </h1>
                    <a
                      href={item.link}
                      target="_blank"
                      className="text-sm text-black bg-white mt-2 p-1 rounded-md underline underline-offset-1"
                    >
                      {item.name}
                    </a>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};
