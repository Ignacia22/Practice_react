/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { TodoId, type Todo as TodoType } from "../types"

interface Props extends TodoType{
    onToggleCompletedTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: ({id}: TodoId) => void
} 

export const Todo: React.FC<Props> = ({id, title, completed, onRemoveTodo, onToggleCompletedTodo}) => {
 const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompletedTodo ({
        id,
        completed: e.target.checked
    })
 }

    return (
        <div className="view">
            <input 
            className="toggle"
            checked={completed}
            type="checkbox" 
            onChange={handleChangeCheckbox}
            />
            <label>{title}</label>
            <button 
            className="destroy"
            onClick={() => {
                onRemoveTodo({id, completed})
            }}
            >
            </button>
        </div>
    )
}