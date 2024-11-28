import React from 'react'
import { Customer } from './CustomerList'
import ListCom from './ListCom';

export interface filterProps{
    customers: Customer[];
    onChangeData: (data: Customer) => void;
}

const FilteredComponent: React.FC<filterProps> = ({customers, onChangeData}) => {
  return (
    <div className='filter'>
        {customers.map((data) =>  <ListCom key={data.id} data={data} onSave={(updatedData) => onChangeData(updatedData)} />)}
    </div>
  )
}

export default FilteredComponent