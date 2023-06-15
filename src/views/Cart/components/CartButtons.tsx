import { TAuthorizationStage, useAuthContext } from 'context/AuthContext';
import { Button } from 'components/Button';
import { message } from 'antd';

export const CartButtons = () => {
  const { status } = useAuthContext();

  if (status === TAuthorizationStage.UNAUTHORIZED) {
    return (
      <Button
        onClick={() =>
          message.warning('Please authorize before making a payment')
        }
      >
        Checkout
      </Button>
    );
  }
  return <Button to='/checkout'>Checkout</Button>;
};
