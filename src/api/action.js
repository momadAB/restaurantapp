import instance from ".";

const getAllCategories = async () => {
  try {
    const { data } = await instance.get("/category");
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

const getAllRestaurants = async () => {
  try {
    const { data } = await instance.get("/resturant");
    return data;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};

const getRestaurantById = async (id) => {
  try {
    const { data } = await instance.get(`/resturant/${id}`);
    return data;
  } catch (error) {
    console.error(`Error fetching restaurant with ID ${id}:`, error);
    throw error;
  }
};

const getRestaurantItems = async (id) => {
  try {
    const { data } = await instance.get(`/resturant/${id}/items`);
    return data;
  } catch (error) {
    console.error(`Error fetching items for restaurant with ID ${id}:`, error);
    throw error;
  }
};

const getItemDetails = async (id) => {
  try {
    const { data } = await instance.get(`/item/${id}`);
    return data;
  } catch (error) {
    console.error(`Error fetching item details for item with ID ${id}:`, error);
    throw error;
  }
};

export {
  getAllCategories,
  getAllRestaurants,
  getRestaurantById,
  getRestaurantItems,
  getItemDetails,
};
