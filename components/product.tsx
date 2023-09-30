"use client";

interface ProductProps {
  name: string;
  id: number;
}

export default function Product({ name, id }: ProductProps) {
  const deleteProduct = async () => {
    await fetch(`/api/delete-product/${id}`);
    console.log("deleted product"); //! remove
  };
  return (
    <div>
      {name}
      <button onClick={deleteProduct}>CLICK</button>
    </div>
  );
}
