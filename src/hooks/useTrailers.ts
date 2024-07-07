import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";
import Trailer  from "../entities/Trailer";



const useTrailer = (gameId: number) => {
    const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`)
    
    return useQuery({
        queryKey: ['trailers', gameId],
        queryFn: apiClient.getAll
    })
}

export default useTrailer