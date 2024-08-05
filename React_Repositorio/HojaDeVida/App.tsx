import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = { uri: 'https://image.slidesdocs.com/responsive-images/docs/plant-line-with-color-blocks-of-pink-and-purple-page-border-background-word-template_ef9f6986e2__1131_1600.jpg' };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Valentina Andrade Paez</Text>
        
        <View style={styles.contentContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Información de Contacto</Text>
            <View style={styles.infoContainer}>
              <Text style={styles.sectionText}>Email: <br />
              paezvalentina330@gmail.com </Text>
              <Text style={styles.sectionText}>Teléfono: 
               3002495873</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Perfil</Text>
            <Text style={styles.sectionText}>Soy Técnico en programación 
              de Software, tengo conocimientos en Html, css, Pyhton, Java,
              JavaScript y creación de bases de datos en MYSQL.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Educación</Text>
            <Text style={styles.sectionText}>-Tecnólogo en Analisis y Desarrollo
              de Software. <br />  
              -Técnico en programación de Software.
            </Text>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Habilidades</Text>
            <Text style={styles.sectionText}>Liderazgo <br />
            Comunicación <br />
            Trabajo en equipo <br />
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'pink',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    maxWidth: '70%',
  },
  contentContainer: {
    backgroundColor: '#FFB6C1',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    maxWidth: '90%',
    alignItems: 'center',
    
  },
  section: {
    marginBottom: 20,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  infoContainer: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default App;
