import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/apiClient"
import Screenshots  from "../entities/Screenshots"


const useScreenshots = (gameId: number) => {
    const apiClient = new ApiClient<Screenshots>(`/games/${gameId}/screenshots`)

    return useQuery({
        queryKey: ['screeshots', gameId],
        queryFn: apiClient.getAll
    })
}

export default useScreenshots