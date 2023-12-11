import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  let data;
  try {
    const res = await fetch(`${URL}/${id}`);
    data = await res.json();
  } catch (error) {
    console.log(error);
  }

  return data;
};

export default getCategory;
