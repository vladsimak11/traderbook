import { FilterBlock, Label, Input } from './Filter.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from '../../redux/coins/selectors';
import { filterCoins } from '../../redux/coins/filterSlice';

export const Filter = () => {
  const filterValue = useSelector(getFilterValue);

  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(filterCoins(event.target.value));
  };

  return (
    <FilterBlock>
      <Label>
        Find contacts by name
        <Input
          type="text"
          placeholder="Enter name coin"
          name="filter"
          value={filterValue}
          onChange={handleFilter}
        />
      </Label>
    </FilterBlock>
  )
};
