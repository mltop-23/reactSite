import React, {useState} from 'react';
import FilterItem from "./FilterItem";

const Filter = ({filter}) => {

    const [isHidden, setHidden] = useState(true)
    const changeHidden = () => {
        setHidden(!isHidden)
    }

    return (
        <div className={'Filter'}>
            <div className={'Filter_Name'}
                 onClick={changeHidden}>
                {filter.name}
            </div>
            <div hidden={isHidden}>
                {filter.properties.map(property =>
                    !filter.inputType ?
                        <FilterItem key={property.id}
                                    property={property}
                                    filterName={filter.name}
                                    setSelectedId={filter.setSelectedId}
                                    removeSelectedId={filter.removeSelectedId}/> :
                        <FilterItem key={property.id}
                                    property={property}
                                    filterName={filter.name}
                                    inputType={filter.inputType}
                                    setSelectedId={filter.setSelectedId}/>
                )}
            </div>
        </div>
    );
};

export default Filter;