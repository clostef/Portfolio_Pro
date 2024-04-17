import { FolderOpenDot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="card-content">
                      <p>HTML/CSS</p>
                      <a className="text-sm text-muted-foreground underline underline-offset-1">
                        lien github à mettre
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
