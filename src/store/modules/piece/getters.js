export default {
  quantityByName: state => state.quantity.names,
  quantityByType: state => type => state.quantity[type],
};
