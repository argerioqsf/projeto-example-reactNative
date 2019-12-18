import {
    EXAMPLE_RESPONSE,
    EXAMPLE_LOADING,
    EXAMPLE_ERROR,
    EXAMPLE_WATCHER
} from "./actionTypesExample";
  
  //WATCHERS
    export const watcherExample = () => ({
        type: EXAMPLE_WATCHER
    });
  //FIM WATCHERS

  export const loadingExample= (loading) => ({
    type: EXAMPLE_LOADING,
    loading:loading
  });

  export const errorExample = (error) => ({
    type: EXAMPLE_ERROR,
    error:error
  });

  export const responseExample = (response) => ({
    type: EXAMPLE_RESPONSE,
    response:response
  });