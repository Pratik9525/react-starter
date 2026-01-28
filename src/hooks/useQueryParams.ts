import { useSearchParams } from "react-router-dom";

export const useQueryParams = <T extends Record<string, string>>() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getAll = () => {
    const params = {} as T;
    searchParams.forEach((value, key) => {
      params[key as keyof T] = value as T[keyof T];
    });
    return params;
  };

  const set = (params: Partial<T>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        newParams.delete(key);
      } else {
        newParams.set(key, String(value));
      }
    });
    setSearchParams(newParams);
  };

  return { getAll, set };
};
