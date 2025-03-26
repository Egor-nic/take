import Filters from "~/FSD/entities/Filters/Filters";
import Products from "~/FSD/entities/Products/Products";
import Container from "~/FSD/shared/ui/wrappers/Container/Container";

export function meta() {
  return [
    { title: 'TAKE' },
  ];
}

export default function Search() {
  return (
    <>
      <Filters />
      <Container>
        <Products />
      </Container>
    </>
  )
}