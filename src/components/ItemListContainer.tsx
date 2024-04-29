import AddToCart from "./AddToCart";

interface Props {
  greeting: string;
}

export default function ItemListContainer({greeting}: Props) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl">{greeting}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra text-xl">
          {/* head */}
          <thead className="text-2xl">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Martillo</td>
              <td>1000</td>
              <td>
                <AddToCart name={"Martillo"} price={1000} />
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Destornillador</td>
              <td>500</td>
              <td>
                <AddToCart name={"Destornillador"} price={500} />
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Tornillos pack 200</td>
              <td>5000</td>
              <td>
                <AddToCart name={"Tornillos pack 200"} price={5000} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>{" "}
    </div>
  );
}
