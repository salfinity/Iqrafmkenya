import { Phone } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/phones`;

const getPhones = async (): Promise<Phone[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getPhones;