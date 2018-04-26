import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount(){
    this.setState({
      tweets: this.props.newTweets
    })
  }

  componentWillReceiveProps(nextProps){
    // console.log(nextProps.newTweets)
    this.setState({
      tweets: [...nextProps.newTweets, ...this.state.tweets]
    })
  }

  shouldComponentUpdate(nextProps){
    return (nextProps.newTweets.length > 0)
  }
  // TODO: shouldComponentUpdate()
  // TODO: componentWillReceiveProps()

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
