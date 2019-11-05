import PRODUCTS from '../../data/dummy-data';

const initilalState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1'),
};

export default (state = initilalState, action) => {
    return state;
}