import Vue from 'vue';
import {
  ADD_PIECE_STAR_1,
  REMOVE_PIECE_STAR_1,
  ADD_PIECE_STAR_2,
  ADD_PIECE_STAR_3,
  REMOVE_PIECE_STAR_2,
  REMOVE_PIECE_STAR_3,
} from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [ADD_PIECE_STAR_1](state, payload) {
    Vue.set(state.quantity.names[payload.name], 0, state.quantity.names[payload.name][0] + 1);
    if (state.quantity.names[payload.name][0] === 1) {
      state.quantity.classes[payload.class] += 1;
      for (let i = 0; i < payload.species.length; i += 1) {
        state.quantity.species[payload.species[i]] += 1;
      }
    }
  },
  [ADD_PIECE_STAR_2](state, payload) {
    if (state.quantity.names[payload.name][0] >= 3) {
      Vue.set(state.quantity.names[payload.name], 0, state.quantity.names[payload.name][0] - 3);
      Vue.set(state.quantity.names[payload.name], 1, state.quantity.names[payload.name][1] + 1);
    }
  },
  [ADD_PIECE_STAR_3](state, payload) {
    if (state.quantity.names[payload.name][1] >= 3) {
      Vue.set(state.quantity.names[payload.name], 1, state.quantity.names[payload.name][1] - 3);
      Vue.set(state.quantity.names[payload.name], 2, state.quantity.names[payload.name][2] + 1);
    }
  },
  [REMOVE_PIECE_STAR_1](state, payload) {
    if (state.quantity.names[payload.name][0] > 0) {
      Vue.set(state.quantity.names[payload.name], 0, state.quantity.names[payload.name][0] - 1);

      if (state.quantity.names[payload.name][0] === 0 &&
        state.quantity.names[payload.name][1] === 0 &&
        state.quantity.names[payload.name][2] === 0) {
        state.quantity.classes[payload.class] -= 1;
        for (let i = 0; i < payload.species.length; i += 1) {
          state.quantity.species[payload.species[i]] -= 1;
        }
      }
    }
  },
  [REMOVE_PIECE_STAR_2](state, payload) {
    if (state.quantity.names[payload.name][1] > 0) {
      Vue.set(state.quantity.names[payload.name], 1, state.quantity.names[payload.name][1] - 1);

      if (state.quantity.names[payload.name][0] === 0 &&
        state.quantity.names[payload.name][1] === 0 &&
        state.quantity.names[payload.name][2] === 0) {
        state.quantity.classes[payload.class] -= 1;
        for (let i = 0; i < payload.species.length; i += 1) {
          state.quantity.species[payload.species[i]] -= 1;
        }
      }
    }
  },
  [REMOVE_PIECE_STAR_3](state, payload) {
    if (state.quantity.names[payload.name][2] > 0) {
      Vue.set(state.quantity.names[payload.name], 2, state.quantity.names[payload.name][2] - 1);

      if (state.quantity.names[payload.name][0] === 0 &&
        state.quantity.names[payload.name][1] === 0 &&
        state.quantity.names[payload.name][2] === 0) {
        state.quantity.classes[payload.class] -= 1;
        for (let i = 0; i < payload.species.length; i += 1) {
          state.quantity.species[payload.species[i]] -= 1;
        }
      }
    }
  },
};
