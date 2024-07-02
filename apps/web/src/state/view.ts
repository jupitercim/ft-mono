import { atom } from 'jotai';

export enum AnchorNameEnum {
  Team = 'team',
  Vision = 'vision',
  Partnership = 'partnership',
  Event = 'event',
  ContactUs = 'contactUs',
}

export const anchorNameAtom = atom<AnchorNameEnum | undefined>(undefined);
