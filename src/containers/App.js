import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, fetchRobots } from '../actions';
// import { robots } from '../robots';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobotsReducer.searchField,
        robots: state.fetchRobotsReducer.robots,
        loading: state.fetchRobotsReducer.loading,
        error: state.fetchRobotsReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onFetchRobots: () => dispatch(fetchRobots())
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onFetchRobots();
    }

    render() {

        const { searchField, onSearchChange, robots, loading } = this.props
        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return (
            //  todo note: remove the robot.length later
            loading
            // loading || !robots.length
            ? <h1 className='tc f1 light-blue' style={{'fontFamily': 'monospace', 'fontStyle':'italic'}}>loading...</h1>
            : (
                <div className='tc'>
                    <h3 className='f3 light-blue' >Robofriends</h3>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={ filteredRobots } />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
