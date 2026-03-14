import { PropsProduct } from "../interfaces/propsProduct";

interface ProductErrorResult {
    error: any
}

export const getProducts = async () : Promise<PropsProduct[] | null> => {
    const url = "https://fakestoreapi.com/products";

    try {
        const response = await fetch(url);
        const data: PropsProduct[] = await response.json();

        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};