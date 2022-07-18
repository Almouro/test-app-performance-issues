import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useQuery} from 'react-query';
import {getUser, getUserStats} from '../Api';
import {ListContainer} from '../ListContainer';
import {TweetList} from '../components/TweetList';
import {useCountdown} from './useCountdown';
import {AnimatedReactNativeEU} from '../components/AnimatedReactNativeEU';
import {useFeed} from '../feed/useFeed';

const UserHeader = ({user}: any) => (
  <View style={{flexDirection: 'row', padding: 10}}>
    <Text style={{color: 'black'}}>
      {user?.tweetCount} Tweets from{' '}
      <Text style={{fontWeight: 'bold'}}>{user?.name} 👇</Text>
    </Text>
  </View>
);

const REACT_NATIVE_EU_DATE = '2022-09-01T08:00:00.000Z';

const styles = StyleSheet.create({
  container: {width: 50, alignItems: 'center'},
  value: {color: 'white', fontWeight: 'bold', fontSize: 20},
  text: {color: 'white'},
});

const CountdownItem = ({value, text}: {value: string; text: string}) => (
  <View style={styles.container}>
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.text}>{text}</Text>
  </View>
);

export const TweetsTab = () => {
  const feed = useFeed();
  const {data: user} = useQuery('user', getUser);
  const {data: userStats} = useQuery('useStats', getUserStats);

  const [days, hours, minutes, seconds] = useCountdown(REACT_NATIVE_EU_DATE);

  return (
    <>
      <UserHeader user={user} stats={userStats} />
      <ListContainer style={{flex: 1, backgroundColor: 'white'}}>
        <TweetList feed={feed} />
      </ListContainer>
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
            <CountdownItem value={days} text="Days" />
            <CountdownItem value={hours} text="Hours" />
            <CountdownItem value={minutes} text="Min" />
            <CountdownItem value={seconds} text="Sec" />
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
    </>
  );
};
