import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity styles={styles.btnContainer} onPress={handlePress}>
      <Image 
      source={iconUrl}
      resizeMode="cover"
      style={styles.btnImg(40)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn