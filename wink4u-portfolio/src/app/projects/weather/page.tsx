import ReadmeHeader from "@/app/_components/atoms/readmeHeader/readmeHeader";
import Readme from "@/app/_components/page/Readme/page";
import { WeatherProject } from "@/app/_constants/readme/weatherproject";

export default function WeatherPage() {
    return(
        <>
          <ReadmeHeader title="Weather Dashboard" />
          <Readme project={WeatherProject} />
        </>
    )
}
