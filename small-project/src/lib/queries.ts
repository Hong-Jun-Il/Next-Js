import { useQuery } from "@tanstack/react-query";
import fetchInstance from "./BaseURL";

export function useGetAllUsers(){
    return useQuery({
        queryKey: ["users"],
        queryFn: async(): Promise<UserType[]>=>{
            try {
                const response = await fetchInstance<UserType[]>("/users");
                
                return response;
            } catch (error: unknown) {
                console.error(error);
                throw new Error(`get users 실패 ${error}`);
            }
        }
    })
}

export function useGetUser(id: string){
    return useQuery({
        queryKey: ["user", id],
        queryFn: async(id)=>{
            
        }
    })
}