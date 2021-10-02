import React from 'react';
import "./../../App.css"
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const Home = () => {

    const QUERY_LIST_OF_COUNTRIES = gql`
    {
        countries{
          name
          capital
          emoji
          phone
          code
        }
      }
    `;
    const { data, loading, error } = useQuery(QUERY_LIST_OF_COUNTRIES);
console.log("data:",data);
    return (
        <div className="home">
            <h1>List Of Countries</h1>
            <Link to="/search">Search for country</Link>
            <div className="listOfCountries">
                {loading && <h3>Data is Loading...</h3>}
                {error && <h3>{error.message}</h3>}
                {data && data.countries && data.countries.map((country, key) => {
                    return (
                        <div className="country" key={key}>
                            <h2>{country.name} {country.emoji}</h2>
                            <h4>{country.capital} | {country.code}</h4>
                            {/* <h4>{country.continent.code}</h4> */}
                        </div>
                    )

                })

                }
            </div>
        </div>
    )
}

export default Home;
