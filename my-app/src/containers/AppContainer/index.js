import { connect } from 'react-redux';
import App from '../../components/App.jsx';
import { fetchDataPending, clearData } from '../../actionCreators';

const mapStateToProps = (state) => ({
  loading: state.loading,
})

const mapDispatchToProps = {
  fetchData: fetchDataPending,
  clearData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);