import { takeEvery, put, all, select } from 'redux-saga/effects';
import {
    EXAMPLE_WATCHER,
} from '../actions/actionsExample/actionTypesExample';
import Server from '../../services/axios';
import {
    loadingExample,
    errorExample,
    responseExample
} from '../actions/actionsExample';

export default WhatcherCadastroTecnico = {
    watcherExample: function* () {
        console.log("watcherWorker saga EXAMPLE_WATCHER");
        yield workerExample(EXAMPLE_WATCHER, WorkersExample.workerExample);
    }
}

const WorkersExample = {
    workerExample: function* (action) {
        console.log("worker workerCadastrarTecnico", action);

        yield put(errorExample(""));
        yield put(loadingExample(true));
        setTimeout(() => {
             put(responseExample({
                resp:'OK'
            }));
             put(loadingExample(false));
        }, 1000);
        // try {
        //     const data = yield Server.post("usersTech/cadastro",action.payload);
        //     console.log("usersTech/cadastro data: ", data);
        //     yield AsyncStorage.setItem('tokenServ3',data.data.token);
        //     console.log('Token salvo');
        //     yield put(responseCadastroTecnico(data.status));
        //     yield put(loadingCadastroTecnico(false));
        // } catch (error) {
        //     if (error.response) {
        //         console.log('error.response.data: ',error.response.data);
        //         yield put(errorCadastroTecnico(error.response.data.error));
        //         console.log('error.response.status: ',error.response.status);
        //         console.log('error.response.headers: ',error.response.headers);
        //       } else if (error.request) {
        //         console.log('error.request: ',error.request);
        //         yield put(errorCadastroTecnico('Erro de requisição'));
        //       } else {
        //         console.log('Error', error.message);
        //         yield put(errorCadastroTecnico(error.response.data));
        //       }
        //     console.log('error.config: ',error.config);
        //     console.log("error worker: ", error.message);
        //     yield put(loadingCadastroTecnico(false));
        // }
    }
}