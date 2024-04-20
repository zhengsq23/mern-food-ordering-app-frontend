import { useSearchRestaurants } from "@/api/RestaurantApi";
import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedCuisines: string[];
  sortOption: string;
};

const SearchPage = () => {
  const { city } = useParams();
  const { results } = useSearchRestaurants(city);
  console.log(results);
  return (
    <span>
      search {city}
      <span>{
      
      results?.data.map((restaurant) => <span>
       found {restaurant.restaurantName},{restaurant.city}
      </span>)}</span>
      
    </span>
  );
};

export default SearchPage;
