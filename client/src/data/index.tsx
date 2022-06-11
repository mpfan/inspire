export type PublicAPIData = {
  id: number;
  url: string;
  name: string;
  description: string;
};

export const getPublicAPI = async (): Promise<PublicAPIData> => {
  try {
    const res = await fetch("/api/get");

    if (!res.ok) {
      throw "Error fetching data...";
    }

    const publicAPIData = (await res.json()) as PublicAPIData;

    return publicAPIData;
  } catch (error) {
    throw "Error fetching data...";
  }
};
