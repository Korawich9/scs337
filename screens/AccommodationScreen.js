import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const accommodations = [
  {
    id: '1',
    title: 'โรงแรมหรูในกรุงเทพ',
    description: 'ที่พักหรูใจกลางกรุงเทพฯ พร้อมสิ่งอำนวยความสะดวกครบครัน',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/e4/5c/0e/exterior.jpg?w=1200&h=-1&s=1',
  },
  {
    id: '2',
    title: 'วิลล่าส่วนตัวพัทยา',
    description: 'บ้านพักส่วนตัวพร้อมสระว่ายน้ำในพัทยา',
    image: 'https://image-tc.galaxy.tf/wijpeg-d84gkmxzzq10w67t8ivgwkt8e/u-pattaya-pool-villa-1-2c57c9_wide.jpg?crop=0%2C63%2C1200%2C675',
  },
  {
    id: '3',
    title: 'รีสอร์ทริมทะเลภูเก็ต',
    description: 'รีสอร์ทหรูพร้อมวิวทะเลสุดตระการตาในภูเก็ต',
    image: 'https://phuketvilla.net/wp-content/uploads/2021/06/%E0%B8%9E2-1.jpg',
  },
  // เพิ่มที่พักเพิ่มเติมที่นี่
];


const AccommodationScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {accommodations.map((item) => (
        <View key={item.id} style={styles.accommodationItem}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  accommodationItem: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});

export default AccommodationScreen;
