import { addCoin } from '../../redux/coins/operations';
import { useDispatch } from 'react-redux';

import {
  Form,
  FormBlock,
  Block,
  Label,
  Input,
  Button,
} from './DataForm.styled';

export const DataForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;

    const coinValue = {
      name: form.elements.name.value,
      quantity: form.elements.quantity.value,
      commission: form.elements.commission.value,
      entry: form.elements.entry.value,
      sum: form.elements.sum.value,
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

        <Block mobile>
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

        <Block mobile>
          <Label>Sum</Label>
          <Input type="text" placeholder="Enter sum" name="sum" required />
        </Block>
      </FormBlock>
      <Button type="submit">Add values</Button>
    </Form>
  );
};
