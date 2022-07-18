import {format, parse} from 'date-fns';
import {Tweet} from '../Tweet';

const getTweetWeekDay = (tweet: Tweet) =>
  format(
    parse(tweet.createdAt, "yyyy-MM-dd'T'HH:mm:ss.SSSX", new Date()),
    'EEEE',
  );

export const filterTweets = (tweets: Tweet[]) => {
  return tweets.filter(tweet => {
    return !!['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].find(
      weekDay => weekDay === getTweetWeekDay(tweet),
    );
  });
};
