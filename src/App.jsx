import React, { Fragment, Component } from 'react';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import sortBy from './utils/sortBy';
import searchFilter from './utils/searchFilter';

import './App.scss';

class App extends Component {
    state = {
        contacts: [],
        contactsToShow: [],
        lastFilter: "id"
    }

    componentDidMount() {
        const urlApi = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';

        fetch(urlApi).then(
            async result => {
                const resultJson = await result.json();
                this.setState({
                    contacts: resultJson,
                    contactsToShow: resultJson
                });
            }
        );
    }

    handleSearch = (e) => {
        e.preventDefault();
        let query = e.target.value.trim();

        this.setState(oldState => ({
            contactsToShow: searchFilter(oldState.contacts, query, oldState.lastFilter),
        }));
    };

    handleFilter = (filter, desc) => {
        this.setState((oldState) => ({
            lastFilter: filter,
            contactsToShow: sortBy(oldState.contactsToShow, filter, desc),
        }));
    };

    render() {
        const { contactsToShow } = this.state;
        return (
            <Fragment>
                <Topbar />

                <Filters
                    handleSearch={this.handleSearch}
                    handleFilter={this.handleFilter}
                />

                <Contacts contacts={contactsToShow} />
            </Fragment>
        )
    }
}

export default App;
