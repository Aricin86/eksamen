import { OfficeList } from '../data/OfficeList';

export const FilterOffices = ({ search }) =>
  OfficeList.filter((data) => {
    if (search === '') return data;
    if (
      data.place.toLowerCase().includes(search) ||
      data.locale.toLowerCase().includes(search)
    ) {
      return data;
    }
  });

//   export const FilterCategory = () => {
// .filter((cat) => {
//                 if (filterCat === null) return cat;
//                 if (cat.category.toLowerCase() === filterCat) {
//                   return cat;
//                 }
//               })
//   }
