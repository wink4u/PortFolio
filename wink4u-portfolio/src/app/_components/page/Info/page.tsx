import Introduce from '../../atoms/introduce/introduce';
import Title from '../../atoms/title/title';
import InfoList from '../../molecules/infoList/infoList';
import ArchivingContent from '../../organisms/archivIngContent/archivingContent';
import CommonLayout from '../../template/CommonLayout/commonLayout';
import InfoTemplate from '../../template/InfoTemplate/InfoTemplate';

export default function Info() {
    return (
        <CommonLayout>
          <InfoTemplate>
            <Title value="INFO" />
            <Introduce />
            <InfoList />
            <ArchivingContent />
          </InfoTemplate>
        </CommonLayout>
    )
}