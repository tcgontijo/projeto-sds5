/* eslint-disable import/no-unresolved */
import DataTable from 'components/DataTable';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

const App = () => (
  <>
    <Navbar />
    <div className="container">
      <h1 className="text-primary">Olá Mundo!</h1>
      <DataTable />
    </div>
    <Footer />
  </>
);

export default App;
