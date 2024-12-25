import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
    const { name, flags,population,area,cca3 } = country;
      // Destructure the country object
      const [visited,setVisited] = useState(false);
      const handleVisited=()=>{
        setVisited(!visited);
      }

    return (
        <div className='country'>
            <h3>{name.common}</h3>
            <img src={flags.png} alt={name.common} />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>Visited</button>
            {visited && 'I have Visited This Country'}
        </div>
    );
};

export default Country;
