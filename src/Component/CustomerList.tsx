import React, { useEffect, useState } from 'react'
import SearchInput from './SearchInput';
import axios from 'axios';
import FilteredComponent from './FilteredComponent';

export interface Customer{
    id: number;
    first: string;
    last: string;
    dob: Date;
    gender: string;
    email: string;
    picture: string;
    country: string;
    description: string;
}

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [filteredCustomer, setFilteredCustomer] = useState<Customer[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCustomer = async () => {
        const response = await axios.get('celebrities.json');
        setCustomers(response.data);
        setFilteredCustomer(response.data);
    }
    fetchCustomer();
  }, []);
  const handleSearch = (event: string) => {
    setQuery(event);
    const filter = customers.filter((customer) => customer.first?.toLowerCase().includes(event.toLowerCase()));
    setFilteredCustomer(filter);
  }
  const handleUpdate = async (event: Customer) => {
    const response = await axios.put(`${event.id}`, event);
    console.log(response);
  }

  return (
    <div>
        <SearchInput onSearch={handleSearch} />
        <FilteredComponent customers={filteredCustomer} onChangeData={handleUpdate}/>
    </div>
  )
}

export default CustomerList