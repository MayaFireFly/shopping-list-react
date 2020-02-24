import React, {useReducer, useEffect} from 'react';
import './App.css';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import Product from '../Product/Product';
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';
import ProductForm from '../Product/ProductForm';
import Search from '../Search/Search';

const API_URL = process.env.API_URL;

const initialState = {
  loading: true,
  products: [],
  errorMessage: null,
  form:null
};

const reducer = (state, action) => {
  switch(action.type){
  case 'LOADING':
    return {
      ...state,
      loading: true,
      products: [],
      errorMessage: null,
      form: null
    };
  case 'PRODUCTS':
    return {
      ...state,
      loading: false,
      products: action.payload,        
      errorMessage: null,
      form: null
    };
  case 'ERROR':
    return {
      ...state,
      loading: false,
      products: [],
      errorMessage: action.error,
      form: null
    };
  case 'FORM':
    return {
      ...state,
      loading: false,
      products: [],
      errorMessage: null,
      form: action.form
    };
  default:
    return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getShoppingList = (partUrl = '') => {
    dispatch({ type: 'LOADING' });    
    
    const fullUrl = API_URL + partUrl;
    fetch(fullUrl)
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
  
  const addProductForm = () => {    
    dispatch({
      type: 'FORM',
      form: true
    });
  };
  
  useEffect(
    () => {
      getShoppingList();
    }, 
    []
  );

  return <div className='App'>
    <Header text='Shopping list' search={<Search/>}/>

    <Wrapper>
      <Button func={()=>getShoppingList()} text='All list'/>
      <Button func={()=>getShoppingList('notdone/')} text='Not done list'/>
      <Button func={()=>getShoppingList('notdone/?data=' + new Date())} text='Need buy'/>
      <Button func={()=>addProductForm()} text='Add item'/>
    </Wrapper>

    {state.loading && !state.errorMessage ? (
      <Loading/>
    ) : state.errorMessage ? (
      <div className='App-error'>{state.errorMessage}</div>
    ) : state.form ? (
      <ProductForm/>
    ) : state.products.map((product, index) => (
      <Product product={product} key={index}/>
    ))}

  </div>;
};  

export default App;