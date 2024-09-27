import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const attractions = [
  {
    id: '1',
    title: 'วัดพระแก้ว',
    description: 'สถานที่ท่องเที่ยวสำคัญใจกลางกรุงเทพฯ',
    image: 'https://img.kapook.com/u/2023/sutasinee/04/WatPhraKaew11.jpg',
  },
  {
    id: '2',
    title: 'เกาะล้าน',
    description: 'สถานที่ท่องเที่ยวธรรมชาติในพัทยา',
    image: 'https://www.ktc.co.th/pub/media/Travel-Story/Thailand/travel-koh-larn/tien-beach.webp',
  },
  {
    id: '3',
    title: 'เขาคิชฌกูฏ',
    description: 'สถานที่ท่องเที่ยวทางธรรมชาติและศาสนาในจันทบุรี',
    image: 'https://s359.kapook.com/pagebuilder/55da4952-0380-45f3-9528-84d59ae2a959.jpg',
  },
  // เพิ่มสถานที่ท่องเที่ยวเพิ่มเติมที่นี่
];


const AttractionsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {attractions.map((item) => (
        <View key={item.id} style={styles.attractionItem}>
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
  attractionItem: {
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

export default AttractionsScreen;
