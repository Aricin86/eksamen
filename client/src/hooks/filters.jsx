import { OfficeList } from '../data/OfficeList';
import React, {useState} from 'react';

const filterOffices = (searchData) => {
    const [search, setSearch] = useState(null);

    return OfficeList.filter((data) => {
        if (search === '') return data;
        if (
            data.place.toLowerCase().includes(search) ||
            data.locale.toLowerCase().includes(search)
        ) {
            return data;
        }
    })
}

export default filterOffices;