import headline from '../img/headline.svg';
import text from '../img/text-align-left.svg';
import image from '../img/image.svg';
import bg from '../img/1bg.jpg';
import { createUniqueID } from '../data/helpers';

export const ADD_BLOCK = 'ADD_BLOCK';
export const REMOVE_BLOCK = 'REMOVE_BLOCK';
export const OPEN_MODAL = 'OPEN_MODAL';
export const ADD_CONTENT = 'ADD_CONTENT';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const COPY_BLOCK = 'COPY_BLOCK';
export const REMOVE_DOWN = 'REMOVE_DOWN';
export const REMOVE_UP = 'REMOVE_UP';

const initialState = {
  blocks: [
    {
      id: 1,
      name: 'Image',
      icon: image,
      isActive: false,
      content: bg,
    },
    {
      name: 'Headline',
      icon: headline,
      isActive: false,
      content: 'A legendary cap set that feels like new',
      id: 2,
    },
    {
      name: 'Paragraph',
      icon: text,
      isActive: false,
      content:
        'Prompt your customer to revisit your store by showing them the products they left behind. Consider offering them a coupon code to close the deal.Using the Insert panel on the right, drag and drop the Abandoned Cart element onto the page below.',
      id: 3,
    },
    {
      id: 4,
      name: 'Button',
      icon: image,
      isActive: false,
      content: 'Register now',
    },
  ],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BLOCK:
      const block = {
        id: createUniqueID(),
        name: payload.name,
        icon: payload.icon,
        content: '',
        isActive: false,
      };
      return {
        ...state,
        blocks: [...state.blocks, block],
      };

    case REMOVE_BLOCK:
      return {
        ...state,
        blocks: state.blocks.filter((block) => block.id !== payload.id),
      };

    case REMOVE_DOWN: {
      const index = state.blocks.findIndex((block) => block.id === payload.id);
      if (index === state.blocks.length - 1) {
        return state;
      }
      const newBlocks = [...state.blocks];
      const temp = newBlocks[index];
      newBlocks[index] = newBlocks[index + 1];
      newBlocks[index + 1] = temp;
      return {
        ...state,
        blocks: newBlocks,
      };
    }

    case REMOVE_UP: {
      const index = state.blocks.findIndex((block) => block.id === payload.id);
      if (index === 0) {
        return state;
      }
      const newBlocks = [...state.blocks];
      const temp = newBlocks[index];
      newBlocks[index] = newBlocks[index - 1];
      newBlocks[index - 1] = temp;
      return {
        ...state,
        blocks: newBlocks,
      };
    }

    case OPEN_MODAL: {
      return {
        ...state,
        blocks: state.blocks.map((block) => {
          if (block.id === payload.id) {
            return {
              ...block,
              isActive: true,
            };
          }
          return {
            ...block,
            isActive: false,
          };
        }),
      };
    }

    case CLOSE_MODAL: {
      return {
        ...state,
        blocks: state.blocks.map((block) => {
          if (block.id === payload.id) {
            return {
              ...block,
              isActive: false,
            };
          }
          return block;
        }),
      };
    }

    case ADD_CONTENT: {
      return {
        ...state,
        blocks: state.blocks.map((block) => {
          if (block.id === payload.id) {
            return {
              ...block,
              content: payload.content,
            };
          }
          return block;
        }),
      };
    }

    case COPY_BLOCK: {
      const block = {
        id: createUniqueID(),
        name: payload.name,
        icon: payload.icon,
        content: payload.content,
        isActive: false,
      };
      return {
        ...state,
        blocks: [...state.blocks, block],
      };
    }

    default:
      return state;
  }
};

export default reducer;
