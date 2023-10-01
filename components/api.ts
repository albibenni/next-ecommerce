export const getProducts = async () => {
  return await fetch("http://localhost:3000/api/products");
};

export const deleteProduct = async (id: number) => {
  console.log("Calling deleteProduct on : ", id);

  await fetch(`http://localhost:3000/api/products/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
};
