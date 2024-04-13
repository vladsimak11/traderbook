import { Table, TheadTr, TbodyTr, Th, Td, DeleteButton } from './DataList.styled';
import { deleteCoin } from '../../redux/coins/operations';
import { useSelector, useDispatch } from 'react-redux';
import { getCoins, getFilterValue } from '../../redux/coins/selectors';

export const DataList = () => {
  const dispatch = useDispatch();
  const coins = useSelector(getCoins);
  const filterValue = useSelector(getFilterValue);


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
          <Th>Name Coin</Th>

          <Th>Quantity Coins</Th>

          <Th>Commission</Th>

          <Th>Entry Point</Th>

          <Th>Sum, USDT</Th>

          <Th>Action</Th>
        </TheadTr>
      </thead>

      <tbody>
        {visibleData.map(({ _id, name, quantity, commission, entry, sum }) => {
          return (
            <TbodyTr key={_id}>
              <Td>{name}</Td>
              <Td>{quantity}</Td>
              <Td>{commission}</Td>
              <Td>{entry}</Td>
              <Td>{sum}</Td>
              <Td>
                <DeleteButton onClick={() => dispatch(deleteCoin(_id))}>X</DeleteButton>
              </Td>
            </TbodyTr>
          );
        })}
      </tbody>
      {/* <tfoot>
        <TableTr>
          <TableTd><strong>Total:</strong></TableTd>
          <TableTd>{getTotalNumber(visibleData, 'quantity')}</TableTd>
          <TableTd>{getTotalNumber(visibleData, 'commission')}</TableTd>
          <TableTd></TableTd>
          <TableTd>{getTotalNumber(visibleData, 'sum')}</TableTd>
          <TableTd></TableTd>
        </TableTr>
      </tfoot> */}
    </Table>
  );
};
