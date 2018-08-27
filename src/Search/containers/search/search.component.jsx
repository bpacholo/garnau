import React from "react";

import styles from './search.component.scss';

import {SearchBarComponent, SearchButtonComponent} from './../../components';

export const html = () => 
    <div>
        <SearchBarComponent/>
        <SearchButtonComponent/>
    </div>;

export default html;