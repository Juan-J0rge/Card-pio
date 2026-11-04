import axios, { type AxiosPromise } from "axios"
import type { FoodData } from "../interface/FoodData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fechData = async (): AxiosPromise<FoodData[]> => {
    const response = axios.get(API_URL + '/food/listfood')
    return response
}

export function useFoodData() {
    const query = useQuery({
        queryFn: fechData,
        queryKey: ['food-data'],
        retry: 2
    })
    
    return{
        ...query,
        data: query.data?.data
}
}