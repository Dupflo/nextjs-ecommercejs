export default function Product({ name, price }) {
  return (
    <div>
      {name}: {price.formatted_with_symbol}
    </div>
  );
}
