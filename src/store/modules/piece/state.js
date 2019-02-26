import pieceData from '../../../data/piece/data';

const names = {};
const classes = {};
const species = {};
for (let i = 0; i < pieceData.data.length; i += 1) {
  names[pieceData.data[i].name] = [0, 0, 0];
  classes[pieceData.data[i].class] = 0;
  species[pieceData.data[i].species] = 0;
}

export default {
  quantity: {
    names,
    classes,
    species,
  },
};
