'use client';

import {usePathname, useRouter} from 'next/navigation';

import {type ReactElement} from 'react';

import {type IRouteData, routesDataList} from '@shared/utils/constants';

import './style.css';

const NavigationBar = (): ReactElement => {
    const router = useRouter();
    const pathname = usePathname();

    const handleNavigate = (path: string): void => {
        router.push(path);
    };

    return (
        <div className="navigation-bar">
            {routesDataList.map((routeData: IRouteData) => (
                <button
                    className="navigation-button"
                    style={{
                        transform:
                            pathname !== routeData.path ? '' : 'scale(1.2)',
                    }}
                    key={routeData.id}
                    onClick={() => handleNavigate(routeData.path)}>
                    {routeData.id}
                </button>
            ))}
        </div>
    );
};

export default NavigationBar;
