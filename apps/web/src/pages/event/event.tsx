import { loadNamespaces } from '@/i18n';
import { CampaignDetail } from '../home/components/CampaignDetail';
import { Footer } from '../home/components/Footer';
import { ContentSection } from '@/components/ContentSection';
import { useTranslation } from 'react-i18next';
import BannerIMG from '@/assets/images/banner_2.png';
import Banner from '@/components/Banner';
import { useEvent } from '@/hooks/useEvent';
import { Events } from '@/components/Events';
import ScrollToView, {
  ScrollToViewItem,
  useScrollToView,
} from '@/components/ScrollToView';
import { AnchorNameEnum, anchorNameAtom } from '@/state/view';
import { useEffect } from 'react';
import { useAtomValue } from 'jotai';

export async function loader() {
  await loadNamespaces(['event', 'home']);
  return {};
}

export const Component = () => {
  const { t } = useTranslation(['event', 'home']);
  const event = useEvent();
  const view = useScrollToView();
  const anchorName = useAtomValue(anchorNameAtom);

  useEffect(() => {
    if (anchorName) {
      view.scrollTo(anchorName);
    }
  }, [anchorName]);

  return (
    <div>
      <Banner
        bgImage={BannerIMG}
        title={event.title}
        subtitle={`${event.start} ~ ${event.end}`}
      />
      <ScrollToView scrollToView={view}>
        <ContentSection>
          <CampaignDetail />
        </ContentSection>

        <ScrollToViewItem anchorName={AnchorNameEnum.Event}>
          <ContentSection
            title={t('event', { ns: 'home' })}
            subtitle={t('eventSubtitle', { ns: 'home' })}
          >
            <Events />
          </ContentSection>
        </ScrollToViewItem>
        <Footer />
      </ScrollToView>
    </div>
  );
};
