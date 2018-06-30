import React, {Component} from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import Search from './Search/Search';
class Nav extends Component {

    render() {
        return (
                <React.Fragment>
                    <Toolbar/>
                    <Search />
                    <div>
                        {this.props.children}
                    </div>
                </React.Fragment>
               )
    }

}

export default Nav;
