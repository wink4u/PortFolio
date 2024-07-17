import Introduce from "../../atoms/introduce/introduce";
import Title from "../../atoms/title/title";
import InfoList from "../../molecules/infoList/infoList";
import ArchivingContent from "../archivIngContent/archivingContent";

export default function infoContent() {
    return(
        <div>
          <Title value="Who I am" />
          <Introduce />
          <InfoList />
          <ArchivingContent />
        </div>
    )
}