import { loadNamespaces } from '@/i18n';
import { CampaignDetail } from '../home/components/CampaignDetail';
import { Footer } from '../home/components/Footer';
import { ContentSection } from '@/components/ContentSection';
import { useTranslation } from 'react-i18next';

export async function loader() {
  await loadNamespaces('event', 'en-US');
  return {};
}

export const Component = () => {
  const { t } = useTranslation("event")
  return (
    <div>
      <ContentSection title={t('campaign-detail')}>
        <CampaignDetail />
      </ContentSection>
      <Footer />
    </div>
  );
};
