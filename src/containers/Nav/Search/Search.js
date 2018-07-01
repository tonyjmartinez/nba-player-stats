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

    componentDidMount() {
        let playerArr = [];
        fetch('https://us-central1-nba-player-stats-e2659.cloudfunctions.net/fetch?year=2017-2018-regular&data=active_players.json', {
                    mode: 'cors'
                })
        .then((response) => response.text())
            .then((res) =>
            {
                let jsonData = JSON.parse(res);
                console.log(jsonData.activeplayers.playerentry);
                let players = jsonData.activeplayers.playerentry;

                for (let i = 0; i < players.length; i++){
                    let playerInfo = players[i].player;
                    playerArr[i] = playerInfo.FirstName + ' ' + playerInfo.LastName;
                }

                console.log(playerArr);
            });
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
            marginLeft: '0px',
            borderRadius: '5px'

        }

        const searchStyle = {
        }

        const itemStyle = {
            position: 'relative',
            left: '20px',

        }

        return (
                <div  className={classes.Search}>
                <ReactAutocomplete
                ref={(ip)=>this.search = ip}
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
                    className={classes.Dropdown}
                    >
                        <span className={classes.DropItem}>{item.label}</span>
                        </div>
                }
                value={this.state.value}
                onChange={e => this.setState({ value: e.target.value  })}
                onSelect={value => this.setState({ value  })}
                />
                    <SearchIcon style={searchStyle}
                size={40}
                color='white'
                    onClick={() => {this.search.focus()}}
                />
                    </div>

                    )

    }

}

export default Search;

