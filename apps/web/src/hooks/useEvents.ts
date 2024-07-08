import { useTranslation } from 'react-i18next';
import events1Src from '@/assets/images/events-1.png';
import { EventStatusEnum } from '@/typings';

export function useEvents() {
  const { t } = useTranslation('event');

  const events = [
    {
      id: 100001,
      img: events1Src,
      title: t('eventTitle1'),
      desc: t('eventDesc1'),
      status: EventStatusEnum.Ongoing,
    },
    {
      id: 100002,
      img: events1Src,
      title: t('eventTitle2'),
      desc: t('eventDesc2'),
      status: EventStatusEnum.NotStarted,
    },
    {
      id: 100003,
      img: events1Src,
      title: t('eventTitle3'),
      desc: t('eventDesc3'),
      status: EventStatusEnum.Ended,
    },
  ];

  return events;
}
