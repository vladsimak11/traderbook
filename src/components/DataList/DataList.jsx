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
          <Th>Name</Th>

          <Th>Quantity</Th>

          <Th mobile>Commission</Th>

          <Th>Entry</Th>

          <Th mobile>Sum, USDT</Th>

          <Th>Action</Th>
        </TheadTr>
      </thead>
        
      <tbody>

        {visibleData
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ _id, name, quantity, commission, entry, sum, type }) => {
          return (
            <TbodyTr key={_id} type = {type}>
              <Td>{name}</Td>
              <Td>{quantity}</Td>
              <Td mobile>{commission}</Td>
              <Td>{entry}</Td>
              <Td mobile>{sum}</Td>
              <Td>
                <DeleteButton onClick={() => dispatch(deleteCoin(_id))}>X</DeleteButton>
              </Td>
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
