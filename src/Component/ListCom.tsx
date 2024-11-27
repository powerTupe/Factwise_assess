import React, { useState } from 'react'
import { Customer } from './CustomerList';

interface filterData{
    data: Customer;
}

const ListCom:React.FC<filterData> = ({data}) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
        setShowDetails(!showDetails);
  };

  function calculateAge(dob: Date) {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff   
   === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }

  return (
    <div>
        <div>
            {data.first} {data.last}
            <button onClick={toggleDetails}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
        </div>
        {showDetails && (
            <div className='customer-details'>
                <p>Age: {calculateAge(data.dob)}</p>
                <p>Gender: {data.gender}</p>
                <p>Country: {data.country}</p>
                <p>Description: {data.description}</p>
            </div>
        )}
    </div>
  )
}

export default ListCom