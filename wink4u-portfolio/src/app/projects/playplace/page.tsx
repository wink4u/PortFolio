import ReadmeHeader from "@/app/_components/atoms/readmeHeader/readmeHeader";
import Readme from "@/app/_components/page/Readme/page";
import { PlayPlaceProejct } from "@/app/_constants/readme/playplace";

export default function PlayPlace() {
    return(
        <>
          <ReadmeHeader title="PlayPlace" />
          <Readme project={PlayPlaceProejct} />
        </>
    )
}