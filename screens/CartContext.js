import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from '../context/CartContext'; // Assuming you have a context setup

const CartScreen = ({ navigation }) => {
  const { cartItems, totalAmount } = useContext(CartContext);

  const handleCheckout = () => {
    // Handle checkout functionality here
    console.log("Proceeding to checkout");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ตะกร้าสินค้า</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>ไม่มีสินค้าในตะกร้า</Text>
      ) : (
        cartItems.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemQuantity}>จำนวน: {item.quantity}</Text>
            <Text style={styles.itemPrice}>ราคา: {item.price * item.quantity} ฿</Text>
          </View>
        ))
      )}

      <Text style={styles.totalText}>รวมทั้งหมด: {totalAmount} ฿</Text>

      <TouchableOpacity style={styles.button} onPress={handleCheckout}>
        <Text style={styles.buttonText}>ดำเนินการชำระเงิน</Text>
      </TouchableOpacity>

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
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 16,
    color: '#555',
  },
  itemPrice: {
    fontSize: 16,
    color: '#ff0000',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: '#aaa',
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

export default CartScreen;
