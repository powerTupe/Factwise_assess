import React from 'react'
import { Customer } from './CustomerList'
import ListCom from './ListCom';

export interface filterProps{
    customers: Customer[];
}
const FilteredComponent: React.FC<filterProps> = ({customers}) => {
  return (
    <div>
        {customers.map((data) =>  <ListCom data={data} />)}
    </div>
  )
}

export default FilteredComponent