import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContainerPage />}>
          <Route index element={<ItemList />} />
          <Route path="items" element={<ItemList />}>
            <Route path="buyers" element={<Buyers />} />
            <Route path="suppliers" element={<Suppliers />} />
            <Route path=":itemId" element={<AboutItem />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function ContainerPage() {
  return (
    <div>
      <h1>Container Page</h1>
      <nav>
        <Link to="/items">Items</Link> {/* Updated link to items */}
      </nav>
      <Outlet /> {/* Renders nested routes */}
    </div>
  );
}

function ItemList() {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ];

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Link to={`items/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

function AboutItem() {
  const { itemId } = useParams();

  return (
    <div>
      <h2>About Item {itemId}</h2>
      <nav>
        <Link to="reviews">Reviews</Link>
        <Link to="specifications">Specifications</Link>
      </nav>
      <Outlet /> {/* Render reviews or specifications */}
    </div>
  );
}

function ItemReviews() {
  const { itemId } = useParams();
  return <h3>Reviews for Item {itemId}</h3>;
}

function ItemSpecifications() {
  const { itemId } = useParams();
  return <h3>Specifications of Item {itemId}</h3>;
}
