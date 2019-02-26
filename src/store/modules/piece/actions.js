import * as types from './mutation-types';

export const addPiece1 = ({
  commit,
}, {
  name,
  className,
  species,
}) => {
  const payload = {
    name,
    species,
    class: className,
  };

  commit(types.ADD_PIECE_STAR_1, payload);
};

export const addPiece2 = ({
  commit,
}, {
  name,
  className,
  species,
}) => {
  const payload = {
    name,
    species,
    class: className,
  };

  commit(types.ADD_PIECE_STAR_2, payload);
};

export const addPiece3 = ({
  commit,
}, {
  name,
  className,
  species,
}) => {
  const payload = {
    name,
    species,
    class: className,
  };

  commit(types.ADD_PIECE_STAR_3, payload);
};

export const removePiece1 = ({
  commit,
}, {
  name,
  className,
  species,
}) => {
  const payload = {
    name,
    species,
    class: className,
  };

  commit(types.REMOVE_PIECE_STAR_1, payload);
};

export const removePiece2 = ({
  commit,
}, {
  name,
  className,
  species,
}) => {
  const payload = {
    name,
    species,
    class: className,
  };

  commit(types.REMOVE_PIECE_STAR_2, payload);
};

export const removePiece3 = ({
  commit,
}, {
  name,
  className,
  species,
}) => {
  const payload = {
    name,
    species,
    class: className,
  };

  commit(types.REMOVE_PIECE_STAR_3, payload);
};

export default {
  addPiece1,
  removePiece1,
  addPiece2,
  removePiece2,
  addPiece3,
  removePiece3,
};
