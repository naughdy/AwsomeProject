import React from 'react';
import createDateContext from './createDataContext';
import jsonserver from '../../api/jsonserver';
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogpost':
      return action.payload;
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'edit_blogpost':
      return state.map((item) => {
        return item.id === action.payload.id ? action.payload : item;
      });
    case 'delete_blogpost':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPost = (dispatch) => {
  return async () => {
    const response = await jsonserver.get('/blogposts');
    dispatch({type: 'get_blogpost', payload: response.data});
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonserver.post('/blogposts', {title, content});
    callback();
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonserver.put(`/blogposts/${id}`, {title, content});
    dispatch({type: 'edit_blogpost', payload: {id, title, content}});
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonserver.delete(`/blogposts/${id}`);
    dispatch({type: 'delete_blogpost', payload: id});
  };
};

export const {Context, Provider} = createDateContext(
  blogReducer,
  {addBlogPost, deleteBlogPost, editBlogPost, getBlogPost},
  [],
);
