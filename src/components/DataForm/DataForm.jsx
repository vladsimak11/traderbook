import { addCoin } from '../../redux/coins/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import {
  Form,
  FormBlock,
  Block,
  Label,
  Select,
  Option,
  Input,
  ButtonBlock,
  Button,
} from './DataForm.styled';

const allCoins = [
  'BTC', 
  'ETH', 
  'USDT',
  'LTC',
  'PEPE',
  'BONK',
];

const allExchanges = [
  'Binance', 
  'Kucoin', 
  'Gate',
];

export const DataForm = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('BUY');
  const [selectedCoin, setSelectedCoin] = useState('BTC');
  const [selectedExchange, setSelectedExchange] = useState('Binance');

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;

    const coinValue = {
      exchange: selectedExchange,
      name: selectedCoin,
      quantity: form.elements.quantity.value,
      commission: form.elements.commission.value,
      entry: form.elements.entry.value,
      sum: form.elements.sum.value,
      type: type,
    };

    dispatch(addCoin(coinValue));

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormBlock>
        <Block>
          <Label>Exchange</Label>
          <Select
            type="text"
            name="exchange"
            value={selectedExchange}
            onChange={event => setSelectedExchange(event.target.value)}
          >
            {allExchanges.map(exchange => (
              <Option key={exchange} value={exchange}>
                {exchange}
              </Option>
            ))}
          </Select>
        </Block>

        <Block>
          <Label>Name</Label>
          <Select
            type="text"
            name="name"
            value={selectedCoin}
            onChange={event => setSelectedCoin(event.target.value)}
          >
            {allCoins.map(coin => (
              <Option key={coin} value={coin}>
                {coin}
              </Option>
            ))}
          </Select>
        </Block>

        <Block>
          <Label>Quantity</Label>
          <Input
            type="text"
            placeholder="Enter quantity coins"
            name="quantity"
            required
          />
        </Block>

        <Block>
          <Label>Commission</Label>
          <Input
            type="text"
            placeholder="Enter commission"
            name="commission"
            required
          />
        </Block>

        <Block>
          <Label>Entry Point</Label>
          <Input
            type="text"
            placeholder="Enter entry point"
            name="entry"
            required
          />
        </Block>

        <Block>
          <Label>Sum</Label>
          <Input type="text" placeholder="Enter sum" name="sum" required />
        </Block>
      </FormBlock>
        <ButtonBlock>
          <Button type="submit" onClick={() => setType('BUY')} buy>BUY</Button>
          <Button type="submit" onClick={() => setType('SELL')}>SELL</Button>
        </ButtonBlock>
    </Form>
  );
};
