import { Action, createAction, createReducer, on } from '@ngrx/store';


export const productsFeatureKey = 'products';

export interface State {
  showDoggos: boolean;
}

export const initialState: State = {
  showDoggos: true
};


export const productsReducer = createReducer(
  initialState,
  on(createAction('[Products] Toggle doggos view'), state => {
    console.log('lo que me da el reducer', state);
    return {
      ...state,
      showDoggos: !state.showDoggos
    }
  })
);

