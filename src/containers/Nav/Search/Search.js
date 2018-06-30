import React, {Component} from 'react';
import ReactAutocomplete from 'react-autocomplete';
import classes from './Search.css';
import SearchIcon from 'react-icons/lib/md/search'
class Search extends Component {

    constructor (props) {
        super(props)
            this.state = {
                value: '',

            }

    }

    render() {

        const style = {
            width: '70%',
            border: '3px solid #ccc',
            borderRadius: '5px',
            display: 'inline-block',
            float: 'left',
            padding: '8px 10px',
            lineHeight: '8px',
        }

        const wrapperStyle = {
                width: '100%',
                marginLeft: '1.5em',
                textAlign: 'left'
        }

        const dropdownStyle = {
            backgroundColor: 'white',
        }

        const dropdownStyleHL = {
            backgroundColor: '#eee',
        }

        const menuStyle = {
            position: 'fixed',
            overflow: 'auto',
            maxHeight: '50%',
            marginLeft: '0px'
        }

        const searchStyle = {
        }

        const itemStyle = {
            position: 'relative',
            left: '20px'
        }

        return (
                <div  className={classes.Search}>
                <ReactAutocomplete
                wrapperStyle={wrapperStyle}
                inputProps={{style: style}}

                menuStyle = {menuStyle}
                items={[
                    { id: 'foo', label: 'foo'  },
                    { id: 'bar', label: 'bar'  },
                    { id: 'baz', label: 'baz'  },
                ]}
                shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.label}
                renderItem={(item, highlighted) =>
                    <div
                        key={item.id}
                    style={highlighted ? dropdownStyleHL: dropdownStyle}

                    >
                    &nbsp;&nbsp;{item.label}
                    </div>
                }
                value={this.state.value}
                onChange={e => this.setState({ value: e.target.value  })}
                onSelect={value => this.setState({ value  })}
                />
                <SearchIcon style={searchStyle} size={40} color='white'/>
                    </div>

                    )

    }

}

export default Search;
