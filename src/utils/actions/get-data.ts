import { Exception } from "sass";

export const getDataHome = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/66d7c1a725a33cd032f0726e?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,`
    );

    if (!res.ok) {
      throw new Error("failed to fetch data.");
    }

    return res.json();
  } catch (error) {
    throw new Error("failed to fetch data.");
  }
};
