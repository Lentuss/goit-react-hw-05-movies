import { Notify } from 'notiflix';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  FormContainer,
  SearchForm,
  SearchButton,
  FormLabel,
  SearchInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const queryValue = searchQuery.get('query') ?? '';

  const handleInput = e => {
    if (e.currentTarget.value.toLowerCase() !== searchQuery)
      setSearchQuery({ query: e.currentTarget.value.toLowerCase() });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (queryValue.trim() === '') {
      Notify.info('Enter the query');
      return;
    }

    onSubmit(queryValue);
  };

  return (
    <FormContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <FormLabel>Search</FormLabel>
        </SearchButton>
        movie search
        <SearchInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies"
          name="query"
          value={queryValue}
          onChange={handleInput}
        />
      </SearchForm>
    </FormContainer>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
