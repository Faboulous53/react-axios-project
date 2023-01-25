import React from 'react';

const Card = ({country}) => {
    return (
        <li className="card">
            <img src={country.flags.svg} alt={'drapeau' + country.translations.fra.common } />
            <div className="info">
                <h2>{country.translations.fra.common}</h2>
                <h4>{country.capital}</h4>
                <p>{country.population.toLocaleString()}</p>
            </div>
        </li>
    );
};

export default Card;