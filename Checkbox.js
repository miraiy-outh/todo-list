import React, { useState, useEffect } from 'react';

function Checkbox() {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const checkbox = document.querySelectorAll('.sort');

        const handleCheckboxChange = () => {
            setIsChecked(checkbox.checked);
        };

        checkbox.addEventListener('change', handleCheckboxChange);

        return () => {
            checkbox.removeEventListener('change', handleCheckboxChange);
        };
    }, []);

    return (
        <div>
            <div className='sort__item'>
                <input type='checkbox' id='create' name='sort' className='sort sort-create' />
                <label for='create' className='sort-label'>по дате создания</label>
            </div>

            <div className='sort__item'>
                <input type='checkbox' id='deadline' name='sort' className='sort sort-deadline' />
                <label for='deadline' className='sort-label'>по дедлайну</label>
            </div>
        </div>
    );
}

export default Checkbox;