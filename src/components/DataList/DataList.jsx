import { Table, TheadTr, TbodyTr, Th, Td, TdDate, DeleteButton } from './DataList.styled';
import { deleteCoin } from '../../redux/coins/operations';
import { useSelector, useDispatch } from 'react-redux';
import { getCoins, getFilterValue } from '../../redux/coins/selectors';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { fetchCoins } from '../../redux/coins/operations';

const formatDate = (date) => format(new Date(date), 'dd/MM/yyyy HH:mm:ss');

export const DataList = () => {
  const dispatch = useDispatch();
  const coins = useSelector(getCoins);
  const filterValue = useSelector(getFilterValue);

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  useEffect(() => {
    console.log(coins); // Додаємо консоль для перевірки даних після отримання з API
  }, [coins]);


  const getVisibleData = () => {
    const normalizedFilter = filterValue.toLowerCase();
    return coins.filter(value =>
      value.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleData = getVisibleData();

  // const getTotalNumber = (data, columnName) => {
  //   return data.reduce((accumulator, currentValue) => accumulator + Number(currentValue[columnName]), 0)
  // }

  return (
    <Table>
      <thead>
        <TheadTr>
          <Th mobile>Exchange</Th>

          <Th>Name</Th>

          <Th>Quantity</Th>

          <Th mobile>Commission</Th>

          <Th>Entry</Th>

          <Th mobile>Sum, USDT</Th>

          <Th>Action</Th>

          <Th mobile>Date</Th>
        </TheadTr>
      </thead>
        
      <tbody>

        {visibleData
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ _id, exchange, name, quantity, commission, entry, sum, type, 
            createdAt, }) => {
              console.log(createdAt);
          return (
            <TbodyTr key={_id} type = {type}>
              <Td mobile>{exchange}</Td>
              <Td>{name}</Td>
              <Td>{quantity}</Td>
              <Td mobile>{commission}</Td>
              <Td>{entry}</Td>
              <Td mobile>{sum}</Td>
              <Td>
                <DeleteButton onClick={() => dispatch(deleteCoin(_id))}>X</DeleteButton>
              </Td>

              <TdDate mobile>{formatDate(createdAt)}</TdDate>
      
            </TbodyTr>
          );
        })}
      </tbody>
      {/* <tfoot>
        <TfootTr>
          <TfootTd><strong>Total:</strong></TfootTd>
          <TfootTd>{getTotalNumber(visibleData, 'quantity')}</TfootTd>
          <TfootTd>{getTotalNumber(visibleData, 'commission')}</TfootTd>
          <TfootTd></TfootTd>
          <TfootTd>{getTotalNumber(visibleData, 'sum')}</TfootTd>
          <TfootTd></TfootTd>
        </TfootTr>
      </tfoot> */}
    </Table>
  );
};
