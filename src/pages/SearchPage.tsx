import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();

  return (
    <span>search {city}</span>
  );
};

export default SearchPage;
