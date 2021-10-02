import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const Search = () => {
    const QUERY_SEARCH_COUNTRY = gql`
query Country_Search($code:ID!){
    country(code:$code){
        name
        capital
        emoji
        phone
        code
        currency
    }
} `;
    const [countrySearch, setCountrySearch] = useState("");
    const [searchCountry, { data, loading, error }] = useLazyQuery(QUERY_SEARCH_COUNTRY);
    return (
        <div className="search">
            <div className="inputs">
                <input type="text" placeholder="Enter Country Code (ex. BR)" onChange={(event) => {
                    setCountrySearch(event.target.value);
                }} />
                <button onClick={() =>{
                    searchCountry({
                        variables: { code: countrySearch.toUpperCase() } 
                    })

                }}>Search</button>
                 <Link to="/">Back to Home</Link>
            </div>
            <div className="searchCountry">
                {data && data.country && (<div className="countryDisplay">
                    <h1>{data.country.name} {data.country.emoji} </h1>
                    <h1>Capital:{data.country.capital}</h1>
                    <h1>Phone:{data.country.phone}</h1>
                    <h1>Currency:{data.country.currency}</h1>
                    <h1>Country Code:{data.country.code}</h1>
                </div>)}
            </div>
        </div>
    )
}

export default Search
