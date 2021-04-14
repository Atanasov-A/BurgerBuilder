import { Component } from "react";
import { Modal } from "../components/UI/Modal/Modal";

const WithAxiosErrorHandler = (WrappedComponent, axios) => {
  return class ErrorHandler extends Component {
    state = {
      error: null,
    };

    componentDidMount() {
      this.requestInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });

      this.responseInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }

    errorConfirmHandler = () => this.setState({ error: null });
    render() {
      return (
        <>
          <Modal show={this.state.error} modalClosed={this.errorConfirmHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export { WithAxiosErrorHandler };
