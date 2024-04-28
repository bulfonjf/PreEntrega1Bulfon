interface Props {
  name: string;
  price: number;
}

function handleClick(name: string, price: number) {
  alert(`agregaste ${name} $${price}`);
}

export default function AddToCart({ name, price }: Props) {
  return (
    <>
      <button
        className="btn btn-ghost btn-xl text-xl"
        onClick={() => handleClick(name, price)}
      >
        Add to Cart
      </button>
    </>
  );
}
