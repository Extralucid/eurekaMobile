import McImage from '@components/McImage/McImage';
import McText from '@components/McText/McText';
import McVectorIcon from '@components/McVectorIcon/McVectorIcon';
import Images from '@constants/Images';
import ScalableScreen from '@navigation/ScalableScreen';
import dummyData from '../../Mock/Dummy';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

const Home = ({animatedStyle, theme}) => {
  //console.log(animatedStyle);

  return (
    <ScalableScreen>
      <View
        style={{
          paddingTop: 20,
        }}>
        {/** Section d'entete */}
        <HeaderSection>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <McImage source={Images.logo} style={{marginRight: 10}} />
            <McText secondary size={28} color={theme.colors.text1}>
              Ereuka
            </McText>
          </View>
          <McImage
            source={Images.union}
            style={{width: 19, height: 19, tintColor: theme.colors.text2}}
          />
        </HeaderSection>
        {/** Apercu du compte */}
        <HeaderSection style={{marginTop: 30}}>
          <McText semi size={16} color={theme.colors.text2}>
            Aperçu du compte
          </McText>
        </HeaderSection>
        <View
          style={{
            marginHorizontal: 25,
            marginTop: 20,
            height: 116,
            backgroundColor: theme.colors.boxBackground,
            borderRadius: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{marginLeft: 25}}>
            <McText semi size={24} color={theme.colors.text1}>
              1 500 000
            </McText>
            <McText size={16} color={theme.colors.text3}>
              Total Impayé
            </McText>
          </View>
          <TouchableOpacity
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              marginRight: 25,
              backgroundColor: theme.colors.primary,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <McImage source={Images.plus} />
          </TouchableOpacity>
        </View>
        {/** Apercu chauffeurs */}
        <HeaderSection style={{marginTop: 30}}>
          <McText semi size={16} color={theme.colors.text2}>
            Mes chauffeurs
          </McText>
          <McVectorIcon
            type="FontAwesome"
            size={23}
            name="qrcode"
            color={theme.colors.text2}
          />
        </HeaderSection>
        <View>
          <FlatList
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dummyData.SendMoneyRecords}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    marginTop: 20,
                    marginLeft: index === 0 ? 25 : 0,
                    marginRight:
                      index === dummyData.SendMoneyRecords.length - 1 ? 0 : 10,
                  }}>
                  {index === 0 ? (
                    <View
                      style={{
                        width: 52,
                        height: 120,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        style={{
                          height: 52,
                          width: 52,
                          borderRadius: 26,
                          backgroundColor: theme.colors.primary,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <McImage source={item.img} />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View
                      style={{
                        width: 110,
                        height: 120,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: theme.colors.boxBackground,
                        borderRadius: 12,
                      }}>
                      <View
                        style={{
                          width: 42,
                          height: 42,
                          borderRadius: 21,
                          borderWidth: 1,
                          borderColor: 'rgba(58, 66, 118, 0.2)',
                          backgroundColor: theme.colors.boxBackground,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <McImage source={item.avatar} />
                      </View>
                      <McText
                        size={16}
                        color={theme.colors.text3}
                        style={{marginTop: 16}}>
                        {item.name}
                      </McText>
                    </View>
                  )}
                </View>
              );
            }}></FlatList>
        </View>
        {/** Apercu des services */}
        <HeaderSection style={{marginTop: 20}}>
          <McText semi size={16} color={theme.colors.text2}>
            Les Services
          </McText>
          <McVectorIcon
            type="FontAwesome"
            size={23}
            name="cogs"
            color={theme.colors.text2}
          />
        </HeaderSection>
        <View>
          <View
            style={{
              marginTop: 20,
              marginHorizontal: 15,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            }}>
            {dummyData.Services?.map((item, index) => {
              return (
                <View
                  key={item.id}
                  style={{
                    height: 96,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: index === 0 || index === 4 ? 0 : 28,
                    marginTop: index > 3 ? 20 : 0,
                  }}>
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 12,
                      backgroundColor: theme.colors.boxBackground,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {/* <McImage source={item.img} /> */}
                    <McVectorIcon
            type="FontAwesome"
            size={23}
            name={item.img}
            color={theme.colors.text2}
          />
                  </View>
                  <McText
                    semi
                    size={10}
                    color={theme.colors.text3}
                    style={{
                      marginTop: 6,
                      width: 52,
                      textAlign: 'center',
                    }}>
                    {item.name}
                  </McText>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScalableScreen>
  );
};

const HeaderSection = styled.View`
  margin: 0px 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default Home;
