import { loadNamespaces } from '@/i18n';
import { CampaignDetail } from '../home/components/CampaignDetail';
import { Footer } from '../home/components/Footer';
import { ContentSection } from '@/components/ContentSection';
import { useTranslation } from 'react-i18next';
import BannerIMG from '@/assets/images/banner_2.png';
import Banner from '@/components/Banner';
import { useEvent } from '@/hooks/useEvent';
import { Events } from '@/components/Events';

export async function loader() {
  await loadNamespaces(['event', 'home'], 'en-US');
  return {};
}

export const Component = () => {
  const { t } = useTranslation('event');
  const event = useEvent();

  return (
    <div>
      <Banner
        bgImage={BannerIMG}
        title={event.title}
        subtitle={`${event.start} ~ ${event.end}`}
      />

      <ContentSection>
        <CampaignDetail />
      </ContentSection>

      <ContentSection title={t('event')} subtitle={t('eventSubtitle')}>
        <Events />
      </ContentSection>
      <Footer />
    </div>
  );
};
