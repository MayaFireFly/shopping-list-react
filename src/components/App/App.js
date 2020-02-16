import React, {useReducer, useEffect} from 'react';
import './App.css';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import Product from '../Product/Product';

const API_URL = 'http://localhost:8080/api/products/';

const initialState = {
  loading: true,
  products: [],
  errorMessage: null
};

const reducer = (state, action) => {
  switch(action.type){
  case 'LOADING':
    return {
      ...state,
      loading: true,
      products: [],
      errorMessage: null
    };
  case 'PRODUCTS':
    return {
      ...state,
      loading: false,
      products: action.payload,        
      errorMessage: null
    };
  case 'ERROR':
    return {
      ...state,
      loading: false,
      products: [],
      errorMessage: action.error
    };
  default:
    return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getShoppingList = () => {
    dispatch({ type: 'LOADING' });

    fetch(API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {        
        dispatch({
          type: 'PRODUCTS',
          payload: jsonResponse
        });             
      })
      .catch((error) => {
        dispatch({
          type: 'ERROR',
          error: error.message || 'Error in getShoppingList'
        });
      });
  };
  
  useEffect(
    () => {
      getShoppingList();
    }, 
    []
  );

  return <div className='App'>
    <Header text='Shopping list'/>
    {state.loading && !state.errorMessage ? (
      <Loading/>
    ) : state.errorMessage ? (
      <div className='App-error'>{state.errorMessage}</div>
    ) : 
      <ol>
        {state.products.map((product, index) => (
          <li key={index}><Product product={product}/></li>
        ))}
      </ol>}
  </div>;
};  

export default App;