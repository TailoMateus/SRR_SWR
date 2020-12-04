import { mutate } from "swr";
import { keys } from './keys'

export const fetcher = async (path: string, delay = 1000) => {
  const searchKey = keys.find(key => key.path === path);

  return await new Promise(response => setTimeout(() => response(searchKey.value), delay));
}

export const cacheData = async (key: string) => {
  const request = await fetcher(key);

  mutate(key, request, false);
  return request;
}