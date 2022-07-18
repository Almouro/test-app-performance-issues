import React from 'react';
import {Text, View} from 'react-native';
import {useQuery} from 'react-query';
import {getUser, getUserStats} from '../Api';
import {ListContainer} from '../ListContainer';
import {TweetList} from '../components/TweetList';
import {AnimatedReactNativeEU} from '../components/AnimatedReactNativeEU';
import {useFeed} from '../feed/useFeed';
import {FastCountdown} from '../components/FastCountdown/FastCountdown';

const UserHeader = () => {
  const {data: user} = useQuery('user', getUser);
  const {data: userStats} = useQuery('useStats', getUserStats);

  return (
    <View style={{flexDirection: 'row', padding: 10}}>
      <Text style={{color: 'black'}}>
        {user?.tweetCount} Tweets from{' '}
        <Text style={{fontWeight: 'bold'}}>{user?.name} 👇</Text>
      </Text>
    </View>
  );
};

const ReactNativeEUBanner = () => {
  return (
    <View style={{flexDirection: 'row', backgroundColor: 'black'}}>
      <AnimatedReactNativeEU />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <FastCountdown />
        </View>

        <Text
          style={{
            color: 'rgb(219, 44, 70)',
            fontWeight: '600',
            marginTop: 10,
          }}>
          {' '}
          to React Native EU 🚀
        </Text>
      </View>
    </View>
  );
};

export const TweetsTab = () => {
  const feed = useFeed();

  return (
    <>
      <UserHeader />
      <ListContainer style={{flex: 1, backgroundColor: 'white'}}>
        <TweetList feed={feed} />
      </ListContainer>
      <ReactNativeEUBanner />
    </>
  );
};
