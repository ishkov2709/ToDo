import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo: (state, { payload }) => {
      state.todo.push(payload);
    },
    filter: (state, { payload }) => {
      state.filter = payload;
    },
    toggleModalCreate: (state, { payload }) => {
      state.isModalCreate = payload;
    },
    toggleModalEdit: (state, { payload }) => {
      state.modalEdit = payload;
    },
    toggleCheck: (state, { payload }) => {
      state.todo = [
        ...state.todo.map(el =>
          el.id === payload ? { ...el, isCheck: !el.isCheck } : el
        ),
      ];
    },
    toggleImportant: (state, { payload }) => {
      state.todo = [
        ...state.todo.map(el =>
          el.id === payload ? { ...el, isImportant: !el.isImportant } : el
        ),
      ];
    },
    deleteTodo: (state, { payload }) => {
      state.todo = state.todo.filter(({ id }) => id !== payload);
    },
    updateTodo: (state, { payload }) => {
      const updatedList = state.todo.filter(({ id }) => id !== payload.id);
      state.todo = [payload, ...updatedList];
    },
    changeFilterText: (state, { payload }) => {
      state.filterText = payload;
    },
    filterOfImportant: state => {
      state.isCheckFilter = false;
      state.filteredList = [...state.todo].filter(
        ({ isImportant }) => isImportant === true
      );
      state.isImportantFilter = true;
    },
    filterOfCheck: state => {
      state.isImportantFilter = false;
      state.filteredList = [...state.todo].filter(
        ({ isCheck }) => isCheck === true
      );
      state.isCheckFilter = true;
    },
    resetFilers: state => {
      state.filterText = '';
      state.isImportantFilter = false;
      state.isCheckFilter = false;
      state.filteredList = [];
    },
  },
});

export const todoReducer = todoSlice.reducer;

export const {
  createTodo,
  filter,
  toggleModalCreate,
  toggleModalEdit,
  toggleCheck,
  deleteTodo,
  toggleImportant,
  updateTodo,
  changeFilterText,
  filterOfImportant,
  filterOfCheck,
  resetFilers,
} = todoSlice.actions;
