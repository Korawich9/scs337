import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
  const { item } = route.params; // ดึงข้อมูลที่ส่งมาจากหน้า ProjectOne
  const [quantity, setQuantity] = useState(1); // สถานะสำหรับจำนวนสินค้าในตะกร้า

  const handleAddToCart = () => {
    // ฟังก์ชันที่จะเพิ่มสินค้าในตะกร้า
    console.log(`เพิ่ม ${quantity} ${item.title} ลงในตะกร้า`); // คุณสามารถใช้การจัดการตะกร้าที่นี่
    // ตัวอย่างการเก็บข้อมูลในตะกร้า (คุณสามารถปรับใช้ตามที่คุณต้องการ)
    // อาจจะใช้ context หรือ state global ในการจัดการตะกร้า
  };

  const handleEditQuantity = (newQuantity) => {
    // ฟังก์ชันสำหรับแก้ไขจำนวนสินค้า
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <View style={styles.container}>
      {/* แสดงรูปภาพของรายการ */}
      <Image source={{ uri: item.image }} style={styles.image} />

      {/* แสดงชื่อและรายละเอียด */}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>

      {/* ปุ่มเพิ่มลดจำนวนสินค้า */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => handleEditQuantity(quantity - 1)}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity onPress={() => handleEditQuantity(quantity + 1)}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>

      {/* ปุ่มเพิ่มลงในตะกร้า */}
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>เพิ่มลงในตะกร้า</Text>
      </TouchableOpacity>

      {/* ปุ่มกลับ */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>กลับ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // สีพื้นหลัง
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    backgroundColor: '#007BFF', // สีน้ำเงิน
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    marginHorizontal: 10,
    minWidth: 40,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007BFF', // สีน้ำเงิน
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: '#aaa', // สีเทา
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
