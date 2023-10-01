export const getProducts = async () => {
  return await fetch("http://localhost:3000/api/products");
};

export const deleteProduct = async (id: number) => {
  return await fetch(`http://localhost:3000/api/products/${id}`, {
    method: "DELETE",
  });
};
