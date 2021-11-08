// eslint-disable-next-line import/no-unresolved
import BarChart from 'components/BarChart';
// eslint-disable-next-line import/no-unresolved
import DataTable from 'components/DataTable';
// eslint-disable-next-line import/no-unresolved
import DonutChart from 'components/DonutChart';
// eslint-disable-next-line import/no-unresolved
import Footer from 'components/Footer';
// eslint-disable-next-line import/no-unresolved
import Navbar from 'components/Navbar';

const Dashboard = () => (
  <>
    <Navbar />
    <div className="container">
      <h1 className="text-primary py-3">Dashboard de Vendas</h1>
      <div className="row px-3">
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
          <BarChart />
        </div>
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
          <DonutChart />
        </div>
      </div>

      <div className="py-3">
        <h2 className="text-primary">Todas vendas</h2>
      </div>
      <DataTable />
    </div>
    <Footer />
  </>
);

export default Dashboard;
