import { Envs } from '@/env';

export async function uploadFile(file: File): Promise<any> {
  const url = `${Envs.API_HOST}/v1/public/ft/upload`;
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Failed to upload file: ${response.statusText}`);
  }
  const json = await response.json();

  return json.data;
}