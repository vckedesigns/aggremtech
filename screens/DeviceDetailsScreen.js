import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export default function DeviceDetailsScreen() {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [diskSpace, setDiskSpace] = useState(null);

  useEffect(() => {
    DeviceInfo.getBatteryLevel().then((level) => setBatteryLevel(level));
    DeviceInfo.getTotalDiskCapacity().then((capacity) => {
      if (capacity !== null) {
        const diskSpaceInGB = (capacity / (1024 ** 3)).toFixed(2);
        setDiskSpace(diskSpaceInGB);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>App Version: {DeviceInfo.getVersion()}</Text>
      <Text style={styles.text}>Build Version: {DeviceInfo.getBuildNumber()}</Text>
      <Text style={styles.text}>Bundle Identifier: {DeviceInfo.getBundleId()}</Text>
      <Text style={styles.text}>Battery Level: {batteryLevel ? (batteryLevel * 100).toFixed(0) : 'Loading...'}%</Text>
      <Text style={styles.text}>Total Disk Space: {diskSpace ? diskSpace : 'Loading...'} GB</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#7B1FA2',
  },
});
