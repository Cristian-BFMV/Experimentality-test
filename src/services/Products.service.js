import axios from 'axios';

export const getPopularProductsService = async () => {
  try {
    const { data } = await axios.get('https://api.mercadolibre.com/sites/MCO/search?category=MCO1430&limit=12');
    return data.results;
  } catch (error) {
    throw new Error('Lo sentimos, ha ocurrido un problema obteniendo los productos');
  }
};

export const getProductsByNameService = async name => {
  try {
    const { data } = await axios.get(`https://api.mercadolibre.com/sites/MCO/search?q=${name}&limit=20`);
    return data.results;
  } catch (error) {
    throw new Error('Lo sentimos, ha ocurrido un problema obteniendo los productos');
  }
};
