import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const attractionsData = [
  { id: '1', title: 'วัดพระแก้ว', description: 'วัดสำคัญในกรุงเทพฯ', image: 'https://example.com/image1.jpg' },
  { id: '2', title: 'ตลาดน้ำดำเนินสะดวก', description: 'ตลาดน้ำยอดนิยม', image: 'https://example.com/image2.jpg' },
  { id: '3', title: 'อุทยานแห่งชาติเขาใหญ่', description: 'ที่ท่องเที่ยวธรรมชาติ', image: 'https://example.com/image3.jpg' },
];

const AttractionsScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {attractionsData.map((attraction) => (
        <TouchableOpacity 
          key={attraction.id} 
          style={styles.card}
          onPress={() => navigation.navigate('Details', { item: attraction })}
        >
          <Image source={{ uri: attraction.image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{attraction.title}</Text>
            <Text style={styles.description}>{attraction.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});

export default AttractionsScreen;
