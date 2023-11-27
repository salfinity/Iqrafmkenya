"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  console.log('searchParams');
  console.log(searchParams);

  useEffect(() => {
    if (searchParams) {
      if (searchParams.get('success')) {
        toast.success('Payment completed.');
        removeAll();
      }

      if (searchParams.get('canceled')) {
        toast.error('Something went wrong.');
      }
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    try {
      // Make a request to your backend to initiate M-Pesa payment
      const mpesaResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
        BusinessShortCode: "174379",
        Password: "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3",
        Timestamp: "20160216165627",
        TransactionType: "CustomerPayBillOnline",
        Amount: "1",
        PartyA: "254708374149",
        PartyB: "174379",
        PhoneNumber: "254708374149",
        CallBackURL: "https://mydomain.com/pat",
        AccountReference: "Test",
        TransactionDesc: "Test",
      });

      // Handle the M-Pesa response
      console.log('M-Pesa Response:', mpesaResponse.data);

      // Redirect the user to the M-Pesa payment page
      window.location = mpesaResponse.data.url;
    } catch (error: any) {
      console.error('Error initiating M-Pesa payment:', error.message);
      // Handle error, show error message to the user
      toast.error('Error initiating M-Pesa payment. Please try again.');
    }
  };

  return ( 
    <div className="mt-16 rounded-lg bg-gray-50 dark:bg-slate-900 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white">
        Order summary
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900 dark:text-white">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={onCheckout} disabled={items.length === 0} className="w-full rounded-full text-white bg-slate-600 dark:bg-slate-700 mt-6">
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
