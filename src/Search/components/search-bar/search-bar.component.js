import React, {Component} from 'react';

import SearchJSX from './search-bar.component.jsx';

export class SearchBarComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <SearchJSX/>
    }
}