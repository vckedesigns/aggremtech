// App.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DeviceDetailsScreen from './screens/DeviceDetailsScreen';
import AccountScreen from './screens/AccountScreen';
import Settings from './screens/assets/gear-solid.svg';
import Logout from './screens/assets/logout.svg';
import Bell from './screens/assets/bell-regular.svg';
import Menu from './screens/assets/menu.svg';

export default function App() {
  const [selectedTab, setSelectedTab] = useState('Home');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const renderHeader = (title) => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}></Text>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.iconsContainer}>
        <Bell style={styles.headerIcons} height={22} width={22} />
        <TouchableOpacity onPress={toggleDropdown}>
          <Menu style={styles.headerIcons} height={22} width={22} />
        </TouchableOpacity>
        {dropdownVisible && (
          <View style={styles.dropdown}>
            <View style={styles.dropdownSelect}>
              <Text style={styles.dropdownItem}>Settings</Text>
              <Settings height={15} width={15} />
            </View>
            <View style={styles.dropdownSelect}>
              <Text style={styles.dropdownItem}>Logout</Text>
              <Logout height={15} width={15} />
            </View>
          </View>
        )}
      </View>
    </View>
  );

  const renderScreen = () => {
    let title;

    switch (selectedTab) {
      case 'Home':
        title = 'Home';
        return (
          <View style={styles.screenContainer}>
            {renderHeader(title)}
            <HomeScreen />
          </View>
        );
      case 'DeviceDetails':
        title = 'Device Details';
        return (
          <View style={styles.screenContainer}>
            {renderHeader(title)}
            <DeviceDetailsScreen />
          </View>
        );
      case 'Account':
        title = 'Account';
        return (
          <View style={styles.screenContainer}>
            {renderHeader(title)}
            <AccountScreen />
          </View>
        );
      default:
        title = 'Home';
        return (
          <View style={styles.screenContainer}>
            {renderHeader(title)}
            <HomeScreen />
          </View>
        );
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>{renderScreen()}</View>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => setSelectedTab('Home')}>
          <View>
            <Image
              source={require('./screens/assets/images/home.png')}
              style={styles.icons}
              resizeMode="cover"
            />
          </View>
          <Text style={[styles.navText, selectedTab === 'Home' && styles.activeText]}>Home</Text>
          {selectedTab === 'Home' && <View style={styles.activeIndicator} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => setSelectedTab('DeviceDetails')}>
          <View>
            <Image
              source={require('./screens/assets/images/info.png')}
              style={styles.icons}
              resizeMode="cover"
            />
          </View>
          <Text style={[styles.navText, selectedTab === 'DeviceDetails' && styles.activeText]}>Device Details</Text>
          {selectedTab === 'DeviceDetails' && <View style={styles.activeIndicator} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => setSelectedTab('Account')}>
          <View>
            <Image
              source={require('./screens/assets/images/user.png')}
              style={styles.icons}
              resizeMode="cover"
            />
          </View>
          <Text style={[styles.navText, selectedTab === 'Account' && styles.activeText]}>Account</Text>
          {selectedTab === 'Account' && <View style={styles.activeIndicator} />}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#7B1FA2',
    paddingVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 4,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 35
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginLeft: 15,
  },
  bottomNav: {
    flexDirection: 'row',
    height: 80,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff'
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  headerIcons: {
    width: 20,
    height: 20,
    margin: 5,
  },
  navText: {
    fontSize: 14,
    color: '#7B1FA2',
  },
  activeText: {
    fontWeight: 'bold',
    color: '#7B1FA2',
  },
  activeIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#7B1FA2',
    marginTop: 2,
  },
  dropdown: {
    position: 'absolute',
    top: 50,
    right: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
    zIndex: 1000,
  },
  dropdownSelect: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownItem: {
    padding: 10,
    fontSize: 16,
  },
});

