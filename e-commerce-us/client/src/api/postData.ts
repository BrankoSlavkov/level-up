export const postData = async <T>(url: string, data: T) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        stock: true,
        ...data,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

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
