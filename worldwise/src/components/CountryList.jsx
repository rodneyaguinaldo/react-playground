import Spinner from "./Spinner";
import PropTypes from "prop-types";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";

import { useCities } from "./../contexts/CitiesContext";

CountryList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
};

// function CountryList({ cities = [], isLoading }) {
function CountryList() {
  const { isLoading, cities } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first country by clicking on a country on the map!" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
