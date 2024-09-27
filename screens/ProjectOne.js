import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const data = {
  categories: [
    { id: '2', title: 'ที่เที่ยว', icon: 'camera-outline' },
    { id: '4', title: 'ที่พัก', icon: 'bed-outline' },
  ],
  flashDeals: [
    { id: '1', title: 'คอร์สโอมากาเสะ 18 items', discount: '30%', price: '82,999', image: 'https://www.ktc.co.th/pub/media/Article/03/japanese-restaurants-must-try-menu-1200x630.webp' },
    { id: '2', title: 'คอร์สอาหาร', discount: '20%', price: '69,999', image: 'https://image.posttoday.com/media/content/2022/05/15/AC367CF2496019AAB2C28889AFC69FBB.jpg' },
    { id: '3', title: 'คอร์ของหวาน', discount: '20%', price: '1,200', image: 'https://www.knowhowbake.in.th/wp-content/uploads/2018/10/IMG_1353.jpg' },
  ],
  recommended: [
    { id: '1', title: 'โอมากาเสะ', image: 'https://image.posttoday.com/media/content/2018/02/23/D9332289BF2B429A9A2C38A6AAF4E961.jpg' },
    { id: '2', title: 'บุฟเฟ่ต์', image: 'https://meunlan.com/wp-content/uploads/2022/01/%E0%B8%9A%E0%B8%B8%E0%B8%9F%E0%B9%80%E0%B8%9F-1.jpg' },
    { id: '3', title: 'ร้านดัง', image: 'https://img.wongnai.com/p/1920x0/2020/01/07/19266c07408e4e46ac08749c2b0ec377.jpg' },
    { id: '4', title: 'ก๋วยเตี๋ยว', image: 'https://inwfile.com/s-gg/6nmj6a.jpg' },
    { id: '5', title: 'ตามสั่ง', image: 'https://img.wongnai.com/p/1920x0/2019/10/17/c2d161ed95f54126a9c2c3b2b4fd1f5f.jpg' },
  ],
};

const ProjectOne = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Search Bar */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search-outline" size={24} color="#aaa" />
        <TextInput
          style={styles.searchBar}
          placeholder="ร้านอาหาร, เครื่องดื่ม, เป๋า, บ้าน..."
        />
        <Ionicons name="person-outline" size={24} color="#aaa" />
      </View>

      {/* Main Scroll View */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Top Image Slider */}
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
          {[ 
            'https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2023/10/thai-food-served-dining-table-tradition-northeast-food-isaan-delicious-plate-with-fresh-vegetables-FI.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14JI-0ldDtg93Rm269sBdHh31ZoykesYFFg&s',
            'https://artralux.co.th/wp-content/uploads/2023/07/%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B5%E0%B8%99.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14JI-0ldDtg93Rm269sBdHh31ZoykesYFFg&s'
          ].map((uri, index) => (
            <Image key={index} source={{ uri }} style={styles.topImage} />
          ))}
        </ScrollView>

        {/* Categories Icons */}
        <View style={styles.categoryContainer}>
          {data.categories.map((category) => (
            <TouchableOpacity 
              key={category.id} 
              style={styles.categoryItem}
              // ปรับการนำทางตามหน้า "ที่พัก" และ "ที่เที่ยว"
              onPress={() => {
                if (category.title === 'ที่พัก') {
                  navigation.navigate('Accommodation');
                } else if (category.title === 'ที่เที่ยว') {
                  navigation.navigate('Attractions');
                }
              }}
            >
              <Ionicons name={category.icon} size={30} color="#ff8c00" />
              <Text style={styles.categoryText}>{category.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Flash Deals */}
        <View style={styles.flashDealsContainer}>
          <Text style={styles.flashDealsTitle}>Flash Deals</Text>
          <Text style={styles.flashDealsTimer}>00 : 16 : 30</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.flashDeals.map((deal) => (
              <TouchableOpacity 
                key={deal.id} 
                style={styles.flashDealItem}
                onPress={() => navigation.navigate('Details', { item: deal })}  // นำทางไปยังหน้ารายละเอียด
              >
                <Image source={{ uri: deal.image }} style={styles.dealImage} />
                <View style={styles.dealTextContainer}>
                  <Text style={styles.dealTitle}>{deal.title}</Text>
                  <Text style={styles.dealPrice}>ลด {deal.discount} จาก {deal.price} ฿</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Popular Categories */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>หมวดหมู่ฮิต</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.recommended.map((item) => (
              <TouchableOpacity 
                key={item.id} 
                style={styles.recommendedItem}
                onPress={() => navigation.navigate('Details', { item })}  // นำทางไปยังหน้ารายละเอียด
              >
                <Image source={{ uri: item.image }} style={styles.recommendedImage} />
                <Text style={styles.recommendedText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Recommended For You */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>แนะนำสำหรับคุณ</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.recommended.map((item) => (
              <TouchableOpacity 
                key={item.id} 
                style={styles.recommendedItem}
                onPress={() => navigation.navigate('Details', { item })}  // นำทางไปยังหน้ารายละเอียด
              >
                <Image source={{ uri: item.image }} style={styles.recommendedImage} />
                <Text style={styles.recommendedText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  topImage: {
    width: 300,
    height: 200,
    marginRight: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
  },
  flashDealsContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
  flashDealsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  flashDealsTimer: {
    fontSize: 16,
    color: '#ff0000',
    marginVertical: 5,
  },
  flashDealItem: {
    marginRight: 10,
  },
  dealImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  dealTextContainer: {
    padding: 5,
  },
  dealTitle: {
    fontSize: 14,
  },
  dealPrice: {
    fontSize: 12,
    color: '#ff0000',
  },
  sectionContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recommendedItem: {
    marginRight: 10,
  },
  recommendedImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  recommendedText: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ProjectOne;
