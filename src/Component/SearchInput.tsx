import React, {useState} from 'react';

interface SearchInputProps{
    onSearch: (query : string) => void;
}

const SearchInput:React.FC<SearchInputProps> = ({onSearch}) => {
  const [query, setQuery] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  }
  
  return (
    <input 
    type='text'
    placeholder='search user'
    value={query}
    onChange={handleInputChange} 
    className='input-box'/>
  )
}

export default SearchInput