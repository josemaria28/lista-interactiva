import { useState, useEffect } from "react";
const useFecth = (url) => {
  const [state, setState] = useState({
    data: undefined,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const resetLoadingState = () => {
    setState({
      data: undefined,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    resetLoadingState();

    const resp = await fetch(url);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!resp.ok) {
      setState({
        ...state,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }

    const data = await resp?.json();

    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};

export default useFecth;
