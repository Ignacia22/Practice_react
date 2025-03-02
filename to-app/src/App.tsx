/* eslint-disable react/react-in-jsx-scope */
import { JSX, useState } from "react";
import { Todos } from "./components/Todos";
import { FilterValue, TodoTitle, type TodoId, type Todo as TodoType } from "./types";
import { TODO_FILTERS } from "./consts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const mockTodos = [
  {
    id: '1',
    title: 'Ignacia',
    completed: true
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]

const App = ():JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelect, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)


  const handleRemove = ({id}: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({id, completed}: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter((todo) => {
    if(filterSelect === TODO_FILTERS.ACTIVE) return !todo.completed
    if(filterSelect === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({title}: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo}/>
      <Todos 
      onToggleCompletedTodo={handleCompleted}
      onRemoveTodo={handleRemove}
      todos={filteredTodos}
      />
      <Footer
       activeCount={activeCount}
       completedCount={completedCount}
       filterSelected={filterSelect}
       onClearCompleted={handleRemoveAllCompleted}
       handleFilterChange={handleFilterChange}
      />
    </div>
  )
}


export default App;

