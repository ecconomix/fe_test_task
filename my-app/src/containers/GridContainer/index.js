import { connect } from 'react-redux';
import Grid from '../../components/Grid/index.jsx';

const mapStateToProps = (state) => ({
  loading: state.loading,
  errorMessage: state.errorMessage,
  rowData: state.rowData,
});

export default connect(mapStateToProps)(Grid);
