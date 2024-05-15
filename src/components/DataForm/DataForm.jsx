import { addCoin } from '../../redux/coins/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import {
  Form,
  FormBlock,
  Block,
  Label,
  Input,
  ButtonBlock,
  Button,
} from './DataForm.styled';

export const DataForm = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('BUY');

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;

    const coinValue = {
      name: form.elements.name.value,
      quantity: form.elements.quantity.value,
      commission: form.elements.commission.value,
      entry: form.elements.entry.value,
      sum: form.elements.sum.value,
      type: type // Передаємо тип операції
    };

    dispatch(addCoin(coinValue));

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormBlock>
        <Block>
          <Label>Name</Label>
          <Input
            type="text"
            placeholder="Enter name coin"
            name="name"
            required
          />
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
