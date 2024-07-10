interface GlobalEnvs {
  API_HOST: string;
}

// @ts-ignore
const _env: GlobalEnvs = {};

Object.keys(import.meta.env).forEach(key => {
  if(key.startsWith('VITE_')) {
    const _key = key.replace('VITE_', '');
    _env[_key as keyof GlobalEnvs] = import.meta.env[key];
  }
})


export const Envs = _env