import { Envs } from '@/env';

export interface Team {
  coinName: string;
  coinPrice: number;
  dbCreateTime: number;
  dbModifyTime: number;
  id: 0;
  logo: string;
  name: string;
  remark: string;
}

export async function fetchTeams(): Promise<any> {
  const url = `${Envs.API_HOST}/v1/public/ft/team/query`;

  const response = await fetch(url, {
    method: 'GET',
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch teams: ${response.statusText}`);
  }
  const json = await response.json();

  return json.data;
}

export async function fetchPriceMap(
  coins: string[],
): Promise<Record<string, number>> {
  const url = `${Envs.API_HOST}/v1/public/ft/price`;

  const response = await fetch(`${url}?coin=${coins.join(',')}`, {
    method: 'GET',
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch teams: ${response.statusText}`);
  }
  const json = await response.json();

  return json.data;
}
