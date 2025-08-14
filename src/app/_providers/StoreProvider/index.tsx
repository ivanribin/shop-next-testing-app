'use client';

import type {PropsWithChildren, ReactElement} from 'react';
import {Provider} from 'react-redux';

import store from '@shared/store';

const StoreProvider = ({children}: PropsWithChildren): ReactElement => {
    return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
