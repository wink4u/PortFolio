import { readmeItem } from "@/app/_types/readme"
import ReadmeTemplate from "../../template/ReadmeTemplate/reademeTemplate";
import ReadmeIntroduce from "../../atoms/readmeIntroduce/readmeIntroduce";
import ReadmeIdo from "../../atoms/readmeIdo/readmeIdo";
import ReadmeTrouble from "../../atoms/readmeTrouble/readmeTrouble";

interface ReademeProps {
    project: readmeItem;
}

export default function Readme({ project }: ReademeProps) {
    return (
      <ReadmeTemplate>
          <ReadmeIntroduce readmeIntro={project.readmeIntro} />
          <ReadmeIdo readmeWhatIdo={project.reademeWhatIdo} />
          <ReadmeTrouble readmeTrouble={project.readmeTrouble} />
      </ReadmeTemplate>
  )
}