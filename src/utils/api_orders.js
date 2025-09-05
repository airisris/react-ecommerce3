import axios from "axios";

import { API_URL } from "./constants";

export const getOrders = async (token) => {
  const response = await axios.get(API_URL + "orders", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.data;
};

export const createOrder = async (
  customerName,
  customerEmail,
  products,
  totalPrice
) => {
  const response = await axios.post(API_URL + "orders", {
    customerName,
    customerEmail,
    products,
    totalPrice,
  });

  return response.data;
};

export async function updateOrder(id, status, token) {
  const response = await axios.put(
    API_URL + "orders/" + id,
    {
      status,
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return response.data;
}

export async function deleteOrder(id, token) {
  const response = await axios.delete(API_URL + "orders/" + id, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.data;
}
