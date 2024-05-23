import { addCoin } from '../../redux/coins/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import {
  Form,
  FormBlock,
  Block,
  Label,
  Input,
  Select,
  ButtonBlock,
  Button,
} from './DataForm.styled';

const allCoins = ['BTC', 'ETH', 'LTC', 'DOGE', 'TRX'];


export const DataForm = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('BUY');
  const [selectedCoin, setSelectedCoin] = useState('BTC');

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;

    const coinValue = {
      exchange: form.elements.exchange.value,
      // name: form.elements.name.value,
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

  const handleSelectChange = (event) => {
    setSelectedCoin(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormBlock>
        <Block>
          <Label>Exchange</Label>
          <Input
            type="text"
            placeholder="Enter name exchange"
            name="exchange"
            required
          />
        </Block>

        {/* <Block>
          <Label>Name Coin</Label>
          <Input
            type="text"
            placeholder="Enter name coin"
            name="name"
            required
          />
        </Block> */}

        <Block>
          <Label>Name Coin</Label>
          <Select 
            name="name" 
            value={selectedCoin} 
            onChange={handleSelectChange} 
            required
          >
            {allCoins.map(coin => (
              <option key={coin} value={coin}>
                {coin}
              </option>
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
