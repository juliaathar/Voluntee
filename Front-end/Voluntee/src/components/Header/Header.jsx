
import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { View, StyleSheet } from "react-native";
import api from "../../service/ApiService";
import { userDecodeToken } from "../../utils/Auth";
import { HeaderContainer, ImagePerfil, MenuHam } from "./Style";
import { FontAwesome5 } from "@expo/vector-icons";
import IconLogoAzulSvg from "../LogoAzulSvg/IconLogoAzulSvg";
import IconLogoBrancoSvg from "../LogoBrancoSvg/IconLogoBrancoSvg";

export const HeaderHome = ({ alter = false, onPress, navigation }) => {
  const [fotoPerfil, setFotoPerfil] = useState(null);

  async function carregarPerfil() {
    try {
      const token = await userDecodeToken();
      const response = await api.get(`/Usuario/Id?id=${token.id}`);
      setFotoPerfil(response.data.foto);
      console.log(response.data);
      console.log(fotoPerfil); 
    } catch (error) {
      console.log(`Erro no Header: ${error}`);
    }
  }

  useFocusEffect(
    useCallback(() => {
      carregarPerfil();
    }, [])
  );

  return (
    <HeaderContainer>
      <MenuHam onPress={onPress}>
        <FontAwesome5
          name="bars"
          size={30}
          color={alter ? "#FBFBFB" : "#0066FF"}
        />
      </MenuHam>

      {alter ? (
        <IconLogoBrancoSvg width="120" height="50" />
      ) : (
        <IconLogoAzulSvg width="120" height="50" />
      )}

      <MenuHam onPress={() => navigation.navigate("Perfil")}>
        <View style={styles.imageContainer}>
          {fotoPerfil ? (
            <ImagePerfil
              source={{ uri: fotoPerfil }}
              style={styles.image}
            />
          ) : (
            <ImagePerfil
              source={require("../../assets/images/pfpdefault.png")}
              style={styles.image}
            />
          )}
        </View>
      </MenuHam>
    </HeaderContainer>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 50,
    elevation: 5, 
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    backgroundColor: "#fbfbfb", 
  },
  image: {
    width: 50, 
    height: 50, 
    borderRadius: 50, 
  },
});

