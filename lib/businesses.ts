import { NextApiRequest, NextApiResponse } from 'next';

interface Business {
  id: number;
  name: string;
  description: string;
  contact: string;
  location: string;
  image: string;
}

const businesses: Business[] = [
 {
  id: 1,
  name: "Sample Salon",
  description: "A trendy salon providing hair and beauty services.",
  contact: "123-456-7890",
  location: "123 Main Street, Cityville",
  image: "https://example.com/salon.jpg",
},
{
  id: 2,
  name: "Barber's Corner",
  description: "Traditional barber shop offering classic haircuts and grooming.",
  contact: "555-123-4567",
  location: "456 Elm Street, Townsville",
  image: "https://example.com/barber.jpg",
},
{
  id: 3,
  name: "Cozy Inn Hotel",
  description: "A comfortable hotel for your relaxing stay.",
  contact: "789-987-6543",
  location: "789 Oak Avenue, Villageland",
  image: "https://example.com/hotel.jpg",
},
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Business[]>) {
  res.status(200).json(businesses);
}
