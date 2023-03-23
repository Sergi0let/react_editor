import {
  ADD_BLOCK,
  REMOVE_BLOCK,
  OPEN_MODAL,
  ADD_CONTENT,
  CLOSE_MODAL,
  COPY_BLOCK,
  REMOVE_DOWN,
  REMOVE_UP,
} from './reducer';

export const addBlock = (payload) => ({
  type: ADD_BLOCK,
  payload,
});

export const removeBlock = (payload) => ({
  type: REMOVE_BLOCK,
  payload,
});

export const openModal = (payload) => ({
  type: OPEN_MODAL,
  payload,
});

export const closeModal = (payload) => ({
  type: CLOSE_MODAL,
  payload,
});

export const addContent = (payload) => ({
  type: ADD_CONTENT,
  payload,
});

export const copyBlock = (payload) => ({
  type: COPY_BLOCK,
  payload,
});

export const removeDown = (payload) => ({
  type: REMOVE_DOWN,
  payload,
});
export const removeUp = (payload) => ({
  type: REMOVE_UP,
  payload,
});
