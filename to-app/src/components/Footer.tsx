/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { TODO_FILTERS } from "../consts"
import { FilterValue } from "../types"
import { Filters } from "./Filters"

interface Props {
    activeCount: number,
    completedCount: number,
    filterSelected: FilterValue,
    onClearCompleted: () => void
    handleFilterChange: (filter: FilterValue) => void
}


export const Footer: React.FC<Props> = (
    {
        activeCount = 0, 
        completedCount = 0,
        filterSelected,
        handleFilterChange,
        onClearCompleted
    }) => {
    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> tareas pendientes
            </span>

            <Filters
            filteredSelected={filterSelected}
            onFilterChange={handleFilterChange}
            />
            {
                completedCount > 0 && (
                    <button 
                    className='clear-completed'
                    onClick={onClearCompleted}
                    >
                        Borrar completadas
                    </button>
                )
            }
        </footer>
    )
}