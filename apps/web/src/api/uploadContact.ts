import { Envs } from "@/env";

interface ContactPostData {
  email: string,
  file: string,
  message: string,
  name: string,
  remark: string 
}
export async function uploadContact(contact: ContactPostData): Promise<any> {
  const url = `${Envs.API_HOST}/v1/public/ft/contact`;

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(contact),
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to upload file: ${response.statusText}`);
  }
  const json = await response.json();

  return json.data;
}