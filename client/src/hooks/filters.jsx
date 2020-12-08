import { OfficeList } from '../data/OfficeList';

const FilterOffices = ({ search }) =>
  OfficeList.filter((data) => {
    if (search === '') return data;
    if (
      data.place.toLowerCase().includes(search) ||
      data.locale.toLowerCase().includes(search)
    ) {
      return data;
    }
  });

export default FilterOffices;
