import { ENV } from '@/constants/env';

enum Env {
  DEV = 'dev',
  PROD = 'prod',
}

interface CollateralContractAddresses {
  collateralCeABNBc: string;
  collateralETH: string;
  collateralSNBNB: string;
  collateralWBETH: string;
  collateralBTCB: string;
  collateralEzETH: string;
  collateralSTONE: string;
  collateralweETH: string;
  collateralMWBETH: string;
  collateralSOLVBTC: string;
}

interface IlkContractAddresses {
  ilkCeABNBc: string;
  ilkETH: string;
  ilkSNBNB: string;
  ilkWBETH: string;
  ilkBTCB: string;
  ilkEzETH: string;
  ilkSTONE: string;
  ilkweETH: string;
  ilkMWBETH: string;
  ilkSOLVBTC: string;
}

interface OtherContractAddresses {
  SNBNB: string;
  ETH: string;
  ezETH: string;
  HAY: string;
  interaction: string;
  wBETH: string;
  binancePool: string;
  oracleCeABNBc: string;
  jug: string;
  jar: string;
  thena: string;

  lisUSD: string;
  stabilityPool: string;
  borrowOperation: string;
  troveManager: string;
  troveManagerGetters: string;
  debtToken: string;
  priceFeed: string;
  veLista: string;
  Lista: string;

  // synclub
  SnStakeManager: string;
  bnbUsdOracle: string;
}

export type ContractAddresses = CollateralContractAddresses &
  IlkContractAddresses &
  OtherContractAddresses;

// For development
const devCollateralContracts: CollateralContractAddresses = {
  collateralCeABNBc: '0x92D8c63E893685Cced567b23916a8726b0CEF3FE',
  collateralETH: '0xf1Abbc41721D0970BEa2e84C5bC159F8D3Cac760',
  collateralSNBNB: '0xCc752dC4ae72386986d011c2B485be0DAd98C744',
  collateralWBETH: '0x34f8f72e3f14Ede08bbdA1A19a90B35a80f3E789',
  collateralBTCB: '0x4BB2f2AA54c6663BFFD37b54eCd88eD81bC8B3ec',
  collateralEzETH: '0xDB9A93d9ae2eB2C8d91B2217C2B3dd4Ef311faBa',
  collateralSTONE: '0xb982479692b9f9D5d6582a36f49255205b18aE9e',
  collateralweETH: '0x6101D440EbF918F44706197a1acB884d621CA1F7',
  collateralMWBETH: '0x5b8E97Cbf8b623737bBf9F3842e3895d23a1F98E',
  collateralSOLVBTC: '0xB1E63330f4718772CF939128d222389b30C70cF2',
};

const devIlkContracts: IlkContractAddresses = {
  ilkCeABNBc:
    '0x636541424e426300000000000000000000000000000000000000000000000000',
  ilkETH: '0x6365774245544800000000000000000000000000000000000000000000000000',
  ilkSNBNB:
    '0x536e424e42000000000000000000000000000000000000000000000000000000',
  ilkWBETH:
    '0x7742455448000000000000000000000000000000000000000000000000000000',
  ilkBTCB: '0x4254434200000000000000000000000000000000000000000000000000000000',
  ilkEzETH:
    '0x657a455448000000000000000000000000000000000000000000000000000000',
  ilkSTONE:
    '0x53544f4e45000000000000000000000000000000000000000000000000000000',
  ilkweETH:
    '0x7765455448000000000000000000000000000000000000000000000000000000',
  ilkMWBETH:
    '0x6d77424554480000000000000000000000000000000000000000000000000000',
  ilkSOLVBTC:
    '0x736f6c7642544300000000000000000000000000000000000000000000000000',
};

const devOtherContracts: OtherContractAddresses = {
  SNBNB: '0xCc752dC4ae72386986d011c2B485be0DAd98C744',
  ETH: '0x0000000000000000000000000000000000000000',
  ezETH: '0xDB9A93d9ae2eB2C8d91B2217C2B3dd4Ef311faBa',
  HAY: '0xF052Cb891C3887aCCA8741859c6184794C482A8A',
  interaction: '0x70C4880A3f022b32810a4E9B9F26218Ec026f279',
  wBETH: '0x34f8f72e3f14Ede08bbdA1A19a90B35a80f3E789',
  binancePool: '0x0eCf14f54C5fF190e025Bc5e80c6351F91BFcB1c',
  oracleCeABNBc: '0x99E6Ef66B3D3e966f7e6FC15ceD0A0B4eBd78CcA',
  jug: '0xbC5C7162694e3cfD9F9040198BA23b00618837C4',
  jar: '0x980Cf9892F3d4d2e68466520584D3f58837BA25b',
  thena: '0xe43317c1f037cbbaf33f33c386f2caf2b6b25c9c',
  lisUSD: '0x0FD622F570a3b28517457C31825aF8da26812f1c',
  stabilityPool: '0xe3AAA45dd69480b48540d470e21BcD9d785b9EBC',
  borrowOperation: '0x63e705823ea51800bb01B031F03cc4906caD2F85',
  troveManager: '0x3Dac278579EC6F2b50e04251BCC63AD4e74dD41C',
  troveManagerGetters: '0x2Ed47b6Fb1F253c1C8Be7352F176f839d211Ac7c',
  priceFeed: '0x7C95f0b981Ab366717167c88f93dc07F591BBE2f',
  debtToken: '0x0FD622F570a3b28517457C31825aF8da26812f1c',
  veLista: '0x51075B00313292db08f3450f91fCA53Db6Bd0D11',
  Lista: '0x1d6d362f3b2034D9da97F0d1BE9Ff831B7CC71EB',

  // synclub
  SnStakeManager: '0xc695F964011a5a1024931E2AF0116afBaC41B31B',
  bnbUsdOracle: '0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526',
};

// For production
const prodCollateralContracts: CollateralContractAddresses = {
  collateralCeABNBc: '0x563282106A5B0538f8673c787B3A16D3Cc1DbF1a',
  collateralETH: '0x6C813D1d114d0caBf3F82f9E910BC29fE7f96451',
  collateralSNBNB: '0xB0b84D294e0C75A6abe60171b70edEb2EFd14A1B',
  collateralWBETH: '0xa2E3356610840701BDf5611a53974510Ae27E2e1',
  collateralBTCB: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
  collateralweETH: '0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A',
  collateralEzETH: '0x2416092f143378750bb29b79ed961ab195cceea5',
  collateralSTONE: '0x80137510979822322193fc997d400d5a6c747bf7',
  collateralMWBETH: '',
  collateralSOLVBTC: '0x4aae823a6a0b376De6A78e74eCC5b079d38cBCf7',
};

const prodIlkContracts: IlkContractAddresses = {
  ilkCeABNBc:
    '0x636541424e426300000000000000000000000000000000000000000000000000',
  ilkETH: '0x6365774245544800000000000000000000000000000000000000000000000000',
  ilkSNBNB:
    '0x536e424e42000000000000000000000000000000000000000000000000000000',
  ilkWBETH:
    '0x7742455448000000000000000000000000000000000000000000000000000000',
  ilkBTCB: '0x4254434200000000000000000000000000000000000000000000000000000000',
  ilkweETH:
    '0x7765455448000000000000000000000000000000000000000000000000000000',
  ilkEzETH:
    '0x657a455448000000000000000000000000000000000000000000000000000000',
  ilkSTONE:
    '0x53544f4e45000000000000000000000000000000000000000000000000000000',
  ilkMWBETH: '',
  ilkSOLVBTC:
    '0x736f6c7642544300000000000000000000000000000000000000000000000000',
};

const prodOtherContracts: OtherContractAddresses = {
  SNBNB: '0xB0b84D294e0C75A6abe60171b70edEb2EFd14A1B',
  ETH: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  ezETH: '0x0',
  HAY: '0x0782b6d8c4551B9760e74c0545a9bCD90bdc41E5',
  interaction: '0xB68443Ee3e828baD1526b3e0Bdf2Dfc6b1975ec4',
  wBETH: '0xa2E3356610840701BDf5611a53974510Ae27E2e1',
  binancePool: '0xa0c92efdceA55ca19396e4850B8D29Df6F907bcD',
  oracleCeABNBc: '0xf81748d12171De989A5Bbf2d76bf10BFbBaEC596',
  jug: '0x787BdEaa29A253e40feB35026c3d05C18CbCA7B3',
  jar: '0x0a1Fd12F73432928C190CAF0810b3B767A59717e',
  thena: '0xe43317c1f037cbbaf33f33c386f2caf2b6b25c9c',
  veLista: '',

  lisUSD: '',
  Lista: '',
  stabilityPool: '',
  borrowOperation: '',
  troveManager: '',
  troveManagerGetters: '',
  priceFeed: '',
  debtToken: '',

  // synclub
  SnStakeManager: '0x1adB950d8bB3dA4bE104211D5AB038628e477fE6',
  bnbUsdOracle: '0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE',
};

function getContracts<T>(devContracts: T, prodContracts: T): T {
  switch (ENV) {
    case Env.DEV:
      return devContracts;
    default:
      return prodContracts;
  }
}

export const collateralContracts: CollateralContractAddresses = getContracts(
  devCollateralContracts,
  prodCollateralContracts,
);

export const ilkContracts: IlkContractAddresses = getContracts(
  devIlkContracts,
  prodIlkContracts,
);

export default getContracts(
  {
    ...devCollateralContracts,
    ...devIlkContracts,
    ...devOtherContracts,
  },
  {
    ...prodCollateralContracts,
    ...prodIlkContracts,
    ...prodOtherContracts,
  },
);
