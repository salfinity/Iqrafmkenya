import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  let data;
  try {
    const res = await fetch(`${URL}`);
    console.log(res);
    data = await res.json();
  } catch (error) {
    console.log("---------------------------->", error);
  }

  return data;
};

export default getCategories;
