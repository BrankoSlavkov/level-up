export const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (e: unknown) {
    const error = e as Error;
    console.error(error);
    return error;
  }
};
