import {PropsWithChildren} from 'react';

import StripeProvider from '@app/_providers/StripeProvider';

const CartLayout = ({children}: PropsWithChildren) => {
    return <StripeProvider>{children}</StripeProvider>;
};

export default CartLayout;
