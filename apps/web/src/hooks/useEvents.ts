import { useTranslation } from 'react-i18next';
import events1Src from '@/assets/images/events-1.png';
import events2Src from '@/assets/images/events-2.png';
import events3Src from '@/assets/images/events-3.png';
import { EventStatusEnum } from '@/typings';

export function useEvents() {
  const { t } = useTranslation('event');

  const events = [
    {
      id: 100001,
      img: events1Src,
      title: t('eventTitle1'),
      desc: 'eventDesc1',
      status: EventStatusEnum.Ongoing,
      start: 1720585595785,
      end: 1720595595785,
    },
    {
      id: 100002,
      img: events2Src,
      title: t('eventTitle2'),
      desc: 'eventDesc2',
      status: EventStatusEnum.NotStarted,
      start: 1720385595785,
      end: 1730585595785,
    },
    {
      id: 100003,
      img: events3Src,
      title: t('eventTitle3'),
      desc: t('eventDesc3'),
      status: EventStatusEnum.Ended,
      start: 1720595595785,
      end: 1722595595785,
    },
  ];

  return events;
}
