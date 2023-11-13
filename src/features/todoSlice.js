import  {createSlice} from '@reduxjs/toolkit'

const todosItems = localStorage.getItem('todos') != null ? JSON.parse(localStorage.getItem('todos'))  : []

const initialState = {
    todos : todosItems
}

const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            state.todos.push(action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        deleteTodo : (state , action) => {
            const filteredTodo = state.todos.filter(todo => todo.id !== action.payload)

            localStorage.setItem('todos', JSON.stringify(filteredTodo))
            state.todos = filteredTodo
        },
        editTodo : (state, action) => {
            const filteredTodo = state.todos.filter(todo => todo.id !== action.payload.id)
            localStorage.setItem('todos', JSON.stringify(filteredTodo))
            state.todos = filteredTodo
            
            state.todos.push(action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        searchTodo: (state, action) => {
            state.todos = action.payload
        }
    }
})

export const { addTodo , deleteTodo , editTodo , searchTodo } = todoSlice.actions

export default todoSlice.reducer