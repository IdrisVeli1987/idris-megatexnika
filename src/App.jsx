import { CategoryCard } from "./components/CategoryCard";
import { PageContainer } from "./components/PageContainer";
import ekskavatorlar from "./assets/ekskavatorlar.png"
import ekskavator_yukleyici from "./assets/ekskavator_yukleyici.png"
function App() {
  return (
    <PageContainer>
      <h1>Mega Texnika</h1>
      <CategoryCard  title="Ekskavatorlar" src={ekskavatorlar}/>
      <CategoryCard  title="Ekskavator yukləyici" src={ekskavator_yukleyici  }/>
    </PageContainer>
  );
}

export default App;
