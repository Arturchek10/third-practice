import type { IProduct } from '@/types/product';


export const getProduct = async (): Promise<IProduct[]> => {
  try {

    const fetchResponse = await fetch(`https://vue-study.skillbox.cc/api/products`);
    const response = await fetchResponse.json();
    const products = response.items

    return products
  

  } catch (err) {
    throw new Error('product response was not ok');
  }
};