/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import {FILTERS_BUTTONS } from "../consts"
import { type FilterValue } from "../types"


interface Props {
    onFilterChange: (filter: FilterValue) => void,
    filteredSelected: FilterValue
}


export const Filters: React.FC<Props> = (
    {filteredSelected, onFilterChange}
) => {
    return(
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, {href, literal}]) => {
                    const isSelected = key === filteredSelected
                    const className = isSelected ? 'selected' : ''

                    return(
                        <li key={key}>
                            <a 
                            href={href}
                            className={className}
                            onClick={(e) => {
                                e.preventDefault()
                                onFilterChange(key as FilterValue)
                            }}
                            >
                                {literal}
                            </a>
                        </li>
                    )
                }) 
            }
            
        </ul>
    )
}