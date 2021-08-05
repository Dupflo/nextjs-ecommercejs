import { useTheme } from "next-themes";
import commerce from "../lib/commerce";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";

export async function getStaticProps() {
  const { data: merchant } = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}

export default function IndexPage({ merchant, categories, products }) {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <h1 className="text-xl  bg-green-400 text-white text-center py-2">
        {merchant[0].name}
      </h1>

      <div className="container mx-auto my-5">
        <CategoryList categories={categories} />
        <ProductList products={products} />
        <button
          className="rounded bg-green-400 text-white py-1 px-3 my-2"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          toggle
        </button>
      </div>
    </div>
  );
}
