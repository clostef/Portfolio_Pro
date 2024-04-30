import { FolderOpenDot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
  },
  {
    name: "Kasa project",
    techno: "JAVASCRIPT",
    link: "https://github.com/clostef/Kasa_project",
  },
  {
    name: "bank user",
    techno: "REACT",
    link: "https://github.com/clostef/bank_user",
  },
];

export const Project = () => {
  return (
    <>
      <div className="flex gap-3 items-center">
        <FolderOpenDot />
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Projets
        </h2>
      </div>
      <Carousel className="w-full m-auto max-w-xs">
        <CarouselContent>
          {projects.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="card-content">
                      <p>{item.techno}</p>
                      <a
                        href={item.link}
                        target="_blank"
                        className="text-sm text-muted-foreground underline underline-offset-1"
                      >
                        {item.name}
                      </a>
                    </div>
                  </CardContent>
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
