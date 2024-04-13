import { DataList } from '../../components/DataList/DataList';
import { DataForm } from '../../components/DataForm/DataForm';
import { Filter } from '../../components/Filter/Filter';
import { fetchCoins } from "../../redux/coins/operations";

import {  getIsLoading } from "../../redux/coins/selectors";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import {ThreeDots} from '../../Loader/Loader';

import { Header1, Header2, MainBlock} from './Coins.styled';

export default function Coins() {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);  

  useEffect(() => { 
    dispatch(fetchCoins()); 
  }, [dispatch]);

  return (
    <div       
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        paddingTop: '80px',
      }}>
      <Helmet>
        <title>Your Traderbook</title>
      </Helmet>
        <MainBlock>
          <Header1>Traderbook</Header1>
          <DataForm />
          <div>{isLoading && <ThreeDots />}</div>
          <Header2>List Coins</Header2>
          <Filter />
          <DataList />
        </MainBlock>
    </div>
  );
}