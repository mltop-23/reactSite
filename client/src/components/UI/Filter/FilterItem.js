import React from 'react';
import CheckboxRadioButton from "../Input/CheckboxRadioButton";

const FilterItem = ({property,
                     filterName,
                     setSelectedId = () => {console.log('None function')},
                     removeSelectedId = () => {console.log('None function')},
                     inputType = 'checkbox'}
) => {

    const setSelect = (checekd) => {
        if(checekd)
            setSelectedId(property.id)
        else
            removeSelectedId(property.id)
    }

    return (
        <div>
            <CheckboxRadioButton name={filterName} type={inputType} onInput={setSelect} text={property.value}/>
        </div>
    );
};

export default FilterItem;