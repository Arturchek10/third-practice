export interface IProduct {
  id: number,
  title: string,
  price: number,
  image: {
    file:{
      url: string,
    }
  }
}

export interface IPagination {
  pages: number // всего страниц
  total: number, // кол-во элементов
  page: number, // текущая страница
}

interface IResponseProducts {
  products: IProduct[],
  pagination: IPagination
}

export const getProduct = async(page: number = 1, searchText?: string) : Promise<IResponseProducts> => {
  try{
    const query = new URLSearchParams(
      {
        page: String(page),
        limit: String(600),
      }
    )

    const fetchResponse = await fetch(`https://vue-study.skillbox.cc/api/products?${query}`)
    const response = await fetchResponse.json()
    const products: IProduct[] = searchText ? response.items.filter((el: IProduct) => el.title.toLowerCase().includes(searchText.toLowerCase())) : response.items

    return {
      products: products,
      pagination: response.pagination
    }
  }
  catch{
    throw new Error('response server was not ok')
  }
}