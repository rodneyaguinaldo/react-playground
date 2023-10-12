import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import PropTypes from "prop-types";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "./../contexts/CitiesContext";

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
};

// function CityList({ cities, isLoading }) {
function CityList() {
  const { isLoading, cities } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map!" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
