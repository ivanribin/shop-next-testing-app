import {redirect} from 'next/navigation';

import {ReactElement} from 'react';

import {routesData} from '@shared/utils/constants';

const Home = (): ReactElement => {
    redirect(routesData.MARKET.path);
};

export default Home;
