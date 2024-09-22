import ReadmeHeader from "@/app/_components/atoms/readmeHeader/readmeHeader";
import Readme from "@/app/_components/page/Readme/page";
import { FoodyProject } from "@/app/_constants/readme/foody";

export default function PlayPlace() {
    return(
        <>
          <ReadmeHeader title="Foody" />
          <Readme project={FoodyProject} />
        </>
    )
}