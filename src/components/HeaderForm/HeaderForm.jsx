import { useState } from 'react';
import search from '../../assets/icon-search.svg';
import './HeaderForm.css';

const HeaderForm = ({ onSubmit }) => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <form
      className="header-search-form"
      onSubmit={event => {
        event.preventDefault();
        onSubmit(searchInput);
      }}
    >
      <input
        type="text"
        className="header-search-form-input"
        placeholder="Buscar aquí producto"
        value={searchInput}
        onChange={event => setSearchInput(event.target.value)}
      />
      <img src={search} alt="Search" className="search-icon" onClick={() => onSubmit(searchInput)} />
    </form>
  );
};

export default HeaderForm;
