import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBtcSpotData } from '../../redux/btcSpot/operations';

import { BtcBlock, BtcName, BtcValue } from './DisplayBtc.styled';

export const DisplayBtc = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.btcSpot);

  console.log(data)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBtcSpotData());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <BtcBlock>Loading...</BtcBlock>;
  }

  if (status === 'failed') {
    return <BtcBlock>Error: {error}</BtcBlock>;
  }

  const btcValue = data?.data?.[0].markPrice; // Витягуємо значення з вкладеного об'єкта

  return (
    <BtcBlock>
      <BtcName>BTC</BtcName>
      <BtcValue>{btcValue ? `${btcValue} USDT` : 'No data available'}</BtcValue>
    </BtcBlock>
  );
};
