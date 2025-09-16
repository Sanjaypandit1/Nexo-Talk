import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ImageSourcePropType } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';

// Try to import the image with error handling
let First_Image: string | ImageSourcePropType;
try {
  const FirstImageModule = require('@/assets/images/FirstImg.png');
  First_Image = Image.resolveAssetSource(FirstImageModule).uri;
} catch (error) {
  // Use a fallback image if the import fails
  First_Image = { uri: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' };
}

const { width, height } = Dimensions.get('window');

const Page = () => {
  const [imageError, setImageError] = useState(false);
  

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>NexoTalk</Text>
        <Text style={styles.tagline}>Connect instantly, stay connected</Text>
      </View>
      
      <View style={styles.imageContainer}>
        <View style={styles.circleBackground} />
        <Image 
          source={imageError ? { } : typeof First_Image === 'string' ? { uri: First_Image } : First_Image} 
          style={styles.circularImage} 
          resizeMode="cover"
          onError={handleImageError}
        />
        <View style={styles.imageOverlay} />
        <View style={styles.floatingMessage}>
          <Text style={styles.floatingMessageText}>Hello!</Text>
        </View>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to NexoTalk</Text>
        <Text style={styles.description}>
          Experience seamless messaging with friends, family, and colleagues. 
          Fast, secure, and designed for real connections.
        </Text>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.loginText}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.bottomDesign} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingTop: height * 0.06,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logo: {
    fontSize: 32,
    fontWeight: '800',
    color: '#2D5BFF',
    marginBottom: 5,
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  imageContainer: {
    width: width,
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: height * 0.03,
  },
  circleBackground: {
    position: 'absolute',
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: width * 0.35,
    backgroundColor: '#F0F5FF',
  },
  circularImage: {
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: width * 0.3,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    shadowColor: '#2D5BFF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 10,
  },
  imageOverlay: {
    position: 'absolute',
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: width * 0.3,
    backgroundColor: 'rgba(45, 91, 255, 0.1)',
  },
  floatingMessage: {
    position: 'absolute',
    bottom: 10,
    right: width * 0.15,
    backgroundColor: '#2D5BFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  floatingMessageText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#2D5BFF',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 14,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#2D5BFF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  footerText: {
    color: '#6B7280',
    fontSize: 14,
  },
  loginText: {
    color: '#2D5BFF',
    fontSize: 14,
    fontWeight: '600',
  },
  bottomDesign: {
    position: 'absolute',
    bottom: -100,
    left: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(45, 91, 255, 0.07)',
    zIndex: -1,
  },
});

export default Page;