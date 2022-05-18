const state = {
  collections: [
    {
      id: 1,
      title: 'Cofe for everyone',
      image: 'https://image.shutterstock.com/z/stock-vector-coffee-set-hand-drawn-sketch-collection-with-cup-of-espresso-cappuccino-latte-mocha-dessert-365683979.jpg',
      author: 'Tay Loo',
      description: 'I collected the most of popular and tasty cofe from all world!'
    },
    {
      id: 2,
      title: 'Cars from my garage',
      image: 'https://robbreport.com.au/application/assets/2021/05/1-8.jpeg',
      author: 'Harison Ford',
      description: 'It is collection only of Porsche'
    }
  ]
}

const getters = {
  COLLECTIONS: state => {return state.collections},
  COLLECTION: state => id => {return state.collections.find(e => e.id === id)}
};
const mutations = {};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
}