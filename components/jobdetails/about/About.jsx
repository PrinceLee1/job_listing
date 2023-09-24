import React from 'react'
import { View, Text } from 'react-native'

import styles from './about.style'

const About = ( { info, posted }) => {
  const timeAgo = (time) => {
    
    const now = new Date();
    const date = new Date(time);
    const timeDifference = now - date;
    const minutesAgo = Math.floor(timeDifference / (1000 * 60));
  
    if (minutesAgo < 1) {
      return 'Just now';
    } else if (minutesAgo === 1) {
      return '1 minute ago';
    } else if (minutesAgo < 60) {
      return `${minutesAgo} minutes ago`;
    } else if (minutesAgo < 1440) { // Less than 24 hours
      const hoursAgo = Math.floor(minutesAgo / 60);
      return `${hoursAgo} hours ago`;
    } else {
      const daysAgo = Math.floor(minutesAgo / 1440);
      return `${daysAgo} days ago`;
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.contextText}>⏰ Posted: {timeAgo(posted)}</Text>
      <Text style={styles.headText }>About the job: </Text>
      <View style={styles.contentBox}>
          <Text style={styles.contextText }>{info}</Text>
      </View>
    </View>
  )
}

export default About