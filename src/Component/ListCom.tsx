import React, { useState } from 'react'
import { Customer } from './CustomerList';

interface filterData{
    data: Customer;
    onSave: (editedData: Customer) => void;
}

const ListCom:React.FC<filterData> = ({data, onSave}) => {
  const [edit, setEdit] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [editedData, setEditedData] = useState(data);

  const toggleDetails = () => {
        setShowDetails(!showDetails);
  };

  const handleEdit = () => {
    setEdit(!edit); // Toggle edit mode
    // Optionally pre-fill edited data with current data
    setEditedData({ ...data });
  };

  const handleCancelEdit = () => {
    setEdit(false); // Exit edit mode
    setEditedData(data); // Reset edited data to original data
  };

  const handleSaveEdit = () => {
    // Implement logic to save edited data (e.g., API call, update local state)
    onSave(editedData);
    setEdit(false); // Exit edit mode after saving
  };

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setEditedData({ ...editedData, [name]: value }); // Update edited data based on input changes
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
        <div className='filter-data'>
          <div>{data.first} {data.last}</div>
          <button onClick={toggleDetails}>{showDetails ? '-' : '+'}</button>
        </div>
        {showDetails && (
            <div className='customer-details'>
            {edit ? (
            <>
              <div className='cust-edit-details'>
              <p>
                Age: 
                <input
                    type='number'
                    name='age'
                    value={new Date(editedData.dob).toDateString()}
                    onChange={handleChange}
                /> 
              </p> 
              <p>
                Gender:
                <select value={editedData.gender} onChange={(e) => setEditedData({ ...editedData, gender: e.target.value })}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Rather not say">Rather not say</option>
                </select>
              </p>
              <p>
                Country:
                <input
                  type="text"
                  name="country"
                  value={editedData.country}
                  onChange={handleChange}
                />
              </p>
              </div>
              <br/>
              <p className='desc'>
                Description:
                <textarea
                  name="description"
                  value={editedData.description}
                  onChange={handleChange}
                  className='textarea'
                />
              </p>
              <div className='btn-ed'>
                <button onClick={handleCancelEdit} className='btn'>Cancel</button>
                <button onClick={handleSaveEdit} className='btn'>Save</button>
              </div>
            </>
          ) : (
            <>
              <div>
                <div className='cust-edit-details'>
                  <p>Age: {calculateAge(data.dob)}</p>
                  <p>Gender: {data.gender}</p>
                  <p>Country: {data.country}</p>
                </div>
                <p className='desc'>Description: {data.description}</p>
                <div className='btn-ed'>
                  {calculateAge(data.dob) > 18 ? 
                  <button onClick={handleEdit} disabled={edit} className='btn'>
                    {edit ? 'Cancel' : 'Edit'}
                  </button> : 
                  <button onClick={handleEdit} disabled={!edit} className='btn'>
                  {edit ? 'Cancel' : 'Edit'}
                </button> }
                  
                </div>
              </div>
            </>
          )}
            </div>)}
    </div>
  )
}
export default ListCom;