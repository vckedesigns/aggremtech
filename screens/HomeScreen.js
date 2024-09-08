// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import Stethoscope from './assets/stethoscope-solid.svg';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Consultations</Text>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Dr. Marta Juarez</Text>
            <Text style={styles.cardText}>Dr. Hans Gerhoff</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require('./assets/images/stetoscope.png')}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.cardBadge}>2</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Medical Files</Text>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Blood tests.pdf</Text>
            <Text style={styles.cardText}>Cardiology results.pdf</Text>
            <Text style={styles.cardText}>Blood tests 20-02-2020.pdf</Text>
            <Text style={styles.cardText}>MRI results.pdf</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require('./assets/images/medical.png')}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.cardBadge}>7</Text>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton}>
        <View style={styles.imageContainer}>
            <Image
              source={require('./assets/images/add.png')}
              style={styles.icons}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.actionText}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
        <View style={styles.imageContainer}>
            <Image
              source={require('./assets/images/phone-call.png')}
              style={styles.icons}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.actionText}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    padding: 16,
  },
  homeIcons:{
    marginRight: 10
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7B1FA2',
    textAlign: 'center',
    marginBottom: 20,
    // backgroundColor: '#7B1FA2'
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#140058',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardContent: {
    flex: 1,
  },
  cardText: {
    fontSize: 16,
    color: '#7B1FA2',
    marginBottom: 5,
  },
  cardBadge: {
    color: '#7B1FA2',
    paddingVertical: 3,
    paddingHorizontal: 8,
    fontSize: 50,
    fontWeight: 'bold'
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 5,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  actionText: {
    fontSize: 14,
    color: '#7B1FA2',
    marginTop: 5,
  },
  icon: {
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 0,
    marginRight: 5
  },

  icons: {
    width: 40,
    height: 40,
  },
});
