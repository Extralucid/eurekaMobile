import { View, Text, TouchableOpacity, ScrollView, FlatList, SafeAreaView, StyleSheet, Animated, Dimensions, Platform } from 'react-native'
import React, { useRef, useState } from 'react'
import { VictoryPie } from "victory-native";
import ScalableScreen from '@navigation/ScalableScreen'
import McVectorIcon from '@components/McVectorIcon/McVectorIcon'
import McText from '@components/McText/McText'
import Svg from 'react-native-svg';
import styled from 'styled-components/native';
import McImage from '@components/McImage/McImage';
import Images from '@constants/Images';

const Invitee = ({ animatedStyle, theme }) => {

    // Dummy data
    const confirmStatus = 'C';
    const pendingStatus = 'P';

    let categoriesData = [
        {
            id: 1,
            name: "Risques Tech",
            icon: 'cogs',
            color: theme.colors.yellow,
            expenses: [
                {
                    id: 1,
                    title: "Tuition Fee",
                    description: "Tuition fee",
                    location: "ByProgrammers' tuition center",
                    total: 100.00,
                    status: pendingStatus
                },
                {
                    id: 2,
                    title: "Arduino",
                    description: "Hardward",
                    location: "ByProgrammers' tuition center",
                    total: 30.00,
                    status: pendingStatus
                },
                {
                    id: 3,
                    title: "Javascript Books",
                    description: "Javascript books",
                    location: "ByProgrammers' Book Store",
                    total: 20.00,
                    status: confirmStatus
                },
                {
                    id: 4,
                    title: "PHP Books",
                    description: "PHP books",
                    location: "ByProgrammers' Book Store",
                    total: 20.00,
                    status: confirmStatus
                }
            ],
        },
        {
            id: 2,
            name: "Risques Divers",
            icon: 'cogs',
            color: theme.colors.lightBlue,
            expenses: [
                {
                    id: 5,
                    title: "Vitamins",
                    description: "Vitamin",
                    location: "ByProgrammers' Pharmacy",
                    total: 25.00,
                    status: pendingStatus,
                },

                {
                    id: 6,
                    title: "Protein powder",
                    description: "Protein",
                    location: "ByProgrammers' Pharmacy",
                    total: 50.00,
                    status: confirmStatus,
                },

            ],
        },
        {
            id: 3,
            name: "Incendie",
            icon: 'car',
            color: theme.colors.darkgreen,
            expenses: [
                {
                    id: 7,
                    title: "Toys",
                    description: "toys",
                    location: "ByProgrammers' Toy Store",
                    total: 25.00,
                    status: confirmStatus,
                },
                {
                    id: 8,
                    title: "Baby Car Seat",
                    description: "Baby Car Seat",
                    location: "ByProgrammers' Baby Care Store",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 9,
                    title: "Pampers",
                    description: "Pampers",
                    location: "ByProgrammers' Supermarket",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 10,
                    title: "Baby T-Shirt",
                    description: "T-Shirt",
                    location: "ByProgrammers' Fashion Store",
                    total: 20.00,
                    status: pendingStatus,
                },
            ],
        },
        {
            id: 4,
            name: "Automobile",
            icon: 'ambulance',
            color: theme.colors.peach,
            expenses: [
                {
                    id: 11,
                    title: "Skin Care product",
                    description: "skin care",
                    location: "ByProgrammers' Pharmacy",
                    total: 10.00,
                    status: pendingStatus,
                },
                {
                    id: 12,
                    title: "Lotion",
                    description: "Lotion",
                    location: "ByProgrammers' Pharmacy",
                    total: 50.00,
                    status: confirmStatus,
                },
                {
                    id: 13,
                    title: "Face Mask",
                    description: "Face Mask",
                    location: "ByProgrammers' Pharmacy",
                    total: 50.00,
                    status: pendingStatus,
                },
                {
                    id: 14,
                    title: "Sunscreen cream",
                    description: "Sunscreen cream",
                    location: "ByProgrammers' Pharmacy",
                    total: 50.00,
                    status: pendingStatus,
                },
            ],
        },
        {
            id: 5,
            name: "Transports",
            icon: 'cogs',
            color: theme.colors.purple,
            expenses: [
                {
                    id: 15,
                    title: "Gym Membership",
                    description: "Monthly Fee",
                    location: "ByProgrammers' Gym",
                    total: 45.00,
                    status: pendingStatus,
                },
                {
                    id: 16,
                    title: "Gloves",
                    description: "Gym Equipment",
                    location: "ByProgrammers' Gym",
                    total: 15.00,
                    status: confirmStatus,
                },
            ],
        },
        {
            id: 6,
            name: "Credit Caution",
            icon: 'user',
            color: theme.colors.red,
            expenses: [
                {
                    id: 17,
                    title: "T-Shirt",
                    description: "Plain Color T-Shirt",
                    location: "ByProgrammers' Mall",
                    total: 20.00,
                    status: pendingStatus,
                },
                {
                    id: 18,
                    title: "Jeans",
                    description: "Blue Jeans",
                    location: "ByProgrammers' Mall",
                    total: 50.00,
                    status: confirmStatus,
                },
            ],
        },
        {
            id: 7,
            name: "RC",
            icon: 'cogs',
            color: theme.colors.purple,
            expenses: [
                {
                    id: 17,
                    title: "T-Shirt",
                    description: "Plain Color T-Shirt",
                    location: "ByProgrammers' Mall",
                    total: 20.00,
                    status: pendingStatus,
                },
                {
                    id: 18,
                    title: "Jeans",
                    description: "Blue Jeans",
                    location: "ByProgrammers' Mall",
                    total: 50.00,
                    status: confirmStatus,
                },
            ],
        },
        {
            id: 8,
            name: "Autres",
            icon: 'cogs',
            color: theme.colors.purple,
            expenses: [
                {
                    id: 17,
                    title: "T-Shirt",
                    description: "Plain Color T-Shirt",
                    location: "ByProgrammers' Mall",
                    total: 20.00,
                    status: pendingStatus,
                },
                {
                    id: 18,
                    title: "Jeans",
                    description: "Blue Jeans",
                    location: "ByProgrammers' Mall",
                    total: 50.00,
                    status: confirmStatus,
                },
            ],
        }
    ]
    const categoryListHeightAnimationValue = useRef(new Animated.Value(115)).current;
    const { width, height } = Dimensions.get("window");
    const [viewMode, setViewMode] = useState('chart');
    const [categories, setCategories] = useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showMoreToggle, setShowMoreToggle] = useState(false);
    const renderNavbar = () => {
        return (
            <View style={{
                flexDirection: 'row',
                height: 40,
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                paddingHorizontal: 20,
                backgroundColor: theme.colors.background
            }}>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    width: 50
                }} onPress={() => {
                    console.log('Back');
                }}>
                    <McVectorIcon type='FontAwesome'
                        name='long-arrow-left'
                        color={theme.colors.text2}
                        size={30}
                    ></McVectorIcon>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    width: 50
                }} onPress={() => {
                    console.log('More');
                }}>
                    <McVectorIcon type='FontAwesome'
                        name='ellipsis-h'
                        color={theme.colors.text2}
                        size={30}></McVectorIcon>
                </TouchableOpacity>
            </View>
        );
    }

    const renderHeader = () => {
        return (
            <View style={{
                backgroundColor: theme.colors.background
            }}>
                <HeaderSection style={{ marginTop: 30 }}>
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
            </View>
        );
    }

    const renderCategoriesHeader = () => {
        return (
            <View style={{
                flexDirection: 'row',
                padding: 24,
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View>
                    <McText style={{
                        color: theme.colors.text2, lineHeight: 22,
                        fontSize: 16,
                    }}>Categories</McText>
                    <McText style={{
                        color: theme.colors.darkgray, lineHeight: 22,
                        fontSize: 14,
                    }}>{categories.length} Total</McText>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 50,
                        width: 50,
                        backgroundColor: viewMode == "chart" ? theme.colors.primary : theme.colors.secondary,
                        borderRadius: 25,
                    }}
                        onPress={() => { setViewMode('chart') }}>
                        <McVectorIcon type='FontAwesome' name='bar-chart' size={20} color={viewMode == 'chart' ? theme.colors.white : theme.colors.darkgray}></McVectorIcon>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 50,
                        width: 50,
                        backgroundColor: viewMode == "list" ? theme.colors.primary : theme.colors.secondary,
                        borderRadius: 25,
                    }}
                        onPress={() => { setViewMode('list'); }}>
                        <McVectorIcon type='FontAwesome' name='list' size={20} color={viewMode == 'list' ? theme.colors.white : theme.colors.darkgray}></McVectorIcon>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    const renderCategoriesList = () => {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: 5,
                    paddingVertical: 12,
                    paddingHorizontal: 24,
                    borderRadius: 5,
                    backgroundColor: theme.colors.background,
                    ...styles.shadow
                }}
                    onPress={() => setSelectedCategory(item)}>
                    <McVectorIcon type={'FontAwesome'} name={item.icon} size={20} color={item.color} />
                    <McText style={{
                        marginLeft: 8,
                        color: theme.colors.text2,
                        lineHeight: 22,
                        fontSize: 14
                    }}>{item.name}</McText>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ paddingHorizontal: 19 }}>
                <Animated.View style={{ height: categoryListHeightAnimationValue }}>
                    <FlatList data={categories}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        numColumns={2}
                        scrollEnabled={false}
                    />
                </Animated.View>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    marginVertical: 8,
                    justifyContent: 'center'
                }}
                    onPress={() => {
                        if (showMoreToggle) {
                            Animated.timing(categoryListHeightAnimationValue, {
                                toValue: 115,
                                duration: 300,
                                useNativeDriver: false
                            }).start();
                        } else {
                            Animated.timing(categoryListHeightAnimationValue, {
                                toValue: 250.5,
                                duration: 300,
                                useNativeDriver: false
                            }).start();
                        }
                        setShowMoreToggle(!showMoreToggle)
                    }}>
                    <McText style={{ lineHeight: 22, fontSize: 14 }}>{showMoreToggle ? "Moins" : "Plus"}</McText>
                    <McVectorIcon type={'FontAwesome'} name={showMoreToggle ? 'angle-up' : 'angle-down'} size={20} style={{ marginLeft: 5, width: 15, height: 15, alignSelf: 'center' }} />
                </TouchableOpacity>
            </View>
        );
    }

    const renderIncomingExpensesTitle = () => {
        return (
            <View style={{ padding: 24, backgroundColor: theme.colors.lightGray2 }}>
                <McText style={{ color: theme.colors.primary, lineHeight: 22, fontSize: 16 }}>Nos produits</McText>
                <McText style={{ color: theme.colors.darkgray, lineHeight: 22, fontSize: 14 }}>12 Total</McText>
            </View>
        )
    }
    const renderIncomingExpenses = () => {
        let allExpenses = selectedCategory ? selectedCategory.expenses : [];
        // Filter pending expenses
        let incomingExpenses = allExpenses.filter(a => a.status == "P");


        const renderItem = ({ item, index }) => {
            return (
                <View style={{
                    width: 300,
                    marginRight: 24,
                    marginLeft: index == 0 ? 24 : 0,
                    marginVertical: 12,
                    borderRadius: 12,
                    backgroundColor: theme.colors.boxBackground,
                    ...styles.shadow
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 24
                    }}>
                        <View style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: theme.colors.lightGray,
                            alignItems: "center",
                            justifyContent: 'center',
                            marginRight: 8
                        }}>
                            <McVectorIcon type={'FontAwesome'} name={selectedCategory.icon} color={selectedCategory.color} size={30} />
                        </View>
                        <McText style={{
                            color: selectedCategory.color,
                            lineHeight: 22,
                            fontSize: 16
                        }}>{selectedCategory.name}</McText>
                    </View>
                    {/**Expenses description */}
                    <View style={{ paddingHorizontal: 24 }}>
                        <McText style={{ lineHeight: 30, fontSize: 22, fontWeight: 'bold', }}>{item.title}</McText>
                        <McText style={{ lineHeight: 22, fontSize: 16, color: theme.colors.darkgray, flexWrap: 'wrap' }}>{item.description}</McText>

                        {/**Location */}
                        <McText style={{ marginTop: 24, lineHeight: 22, fontWeight: 'bold', fontSize: 14 }}>Location</McText>
                        <View style={{ flexDirection: 'row' }}>
                            <McVectorIcon type={'FontAwesome'} name={'map-marker'} size={20} color={theme.colors.darkgray} style={{ marginRight: 5 }} />
                            <McText style={{
                                marginBottom: 8,
                                color: theme.colors.darkgray,
                                lineHeight: 22,
                                fontSize: 14
                            }}>{item.location}</McText>
                        </View>
                    </View>
                    {/**Price */}
                    <View style={{
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomStartRadius: 12,
                        borderBottomEndRadius: 12,
                        backgroundColor: selectedCategory.color
                    }}>
                        <McText style={{
                            color: theme.colors.white,
                            fontSize: 16,
                            lineHeight: 22
                        }}>CONFIRM {item.total.toFixed(2)} XOF</McText>
                    </View>
                </View>
            )
        }
        return (
            <View>
                {renderIncomingExpensesTitle()}
                {
                    incomingExpenses.length > 0 &&
                    <FlatList data={incomingExpenses}
                        renderItem={renderItem}
                        keyExtractor={(item) => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false} />
                }
                {
                    incomingExpenses.length == 0 &&
                    <View style={{ justifyContent: "center", alignItems: "center", height: 300 }}>
                        <McText style={{ color: theme.colors.primary, fontSize: 16, lineHeight: 22 }}>Pas de données</McText>
                    </View>
                }
            </View>
        )
    }

    const processCategoryDataToDisplay = () => {
        // filter expenses with "Confirmed " Status
        let chartdata = categories.map((item) => {
            let confirmExpenses = item.expenses.filter(a => a.status == "C");
            var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0);

            return {
                name: item.name,
                y: total,
                expenseCount: confirmExpenses.length,
                color: item.color,
                id: item.id
            }
        })

        //Filter out categories with no data
        let filterChartData = chartdata.filter(a => a.y > 0);

        // Calculate the total expenses
        let totalExpenses = filterChartData.reduce((a, b) => a + (b.y || 0), 0);

        //Calculate percentage and repopulate chart data
        let finalChartData = filterChartData.map((item) => {
            let percentage = (item.y / totalExpenses * 100);
            return {
                label: `${percentage.toFixed(0)}`,
                y: Number(item.y),
                expenseCount: item.expenseCount,
                color: item.color,
                name: item.name,
                id: item.id
            }
        })
        return finalChartData;
    }

    function setSelectCategoryByName(name) {
        let category = categories.filter(a => a.name == name)
        setSelectedCategory(category[0]);
    }

    const renderChart = () => {

        let chartData = processCategoryDataToDisplay()
        let colorScales = chartData.map((item) => item.color)
        let totalExpenseCount = chartData.reduce((a, b) => a + (b.expenseCount || 0), 0)

        console.log("Check Chart")
        console.log(chartData)

        if (Platform.OS == 'ios') {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <VictoryPie

                        data={chartData}
                        labels={(datum) => `${datum.y.toFixed(0)}`}
                        radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? width * 0.4 : width * 0.4 - 10}
                        innerRadius={70}
                        labelRadius={({ innerRadius }) => (width * 0.4 + innerRadius) / 2.5}
                        style={{
                            labels: { fill: "white", lineHeight: 36, fontSize: 30 },
                            parent: {
                                ...styles.shadow
                            },
                        }}
                        width={width * 0.8}
                        height={width * 0.8}
                        colorScale={colorScales}
                        events={[{
                            target: "data",
                            eventHandlers: {
                                onPress: () => {
                                    return [{
                                        target: "labels",
                                        mutation: (props) => {
                                            let categoryName = chartData[props.index].name
                                            setSelectCategoryByName(categoryName)
                                        }
                                    }]
                                }
                            }
                        }]}

                    />

                    <View style={{ position: 'absolute', top: '42%', left: "42%" }}>
                        <Text style={{ lineHeight: 36, fontSize: 30, textAlign: 'center' }}>{totalExpenseCount}</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16, textAlign: 'center' }}>Expenses</Text>
                    </View>
                </View>

            )
        }
        else {
            // Android workaround by wrapping VictoryPie with SVG
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Svg width={width} height={width} style={{ width: "100%", height: "auto" }}>

                        <VictoryPie
                            standalone={false} // Android workaround
                            data={chartData}
                            labels={(datum) => `${datum.y.toFixed(0)}`}
                            radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? width * 0.4 : width * 0.4 - 10}
                            innerRadius={70}
                            labelRadius={({ innerRadius }) => (width * 0.4 + innerRadius) / 2.5}
                            style={{
                                labels: { fill: "white", lineHeight: 22, fontSize: 16 },
                                parent: {
                                    ...styles.shadow
                                },
                            }}
                            width={width}
                            height={width}
                            colorScale={colorScales}
                            events={[{
                                target: "data",
                                eventHandlers: {
                                    onPress: () => {
                                        return [{
                                            target: "labels",
                                            mutation: (props) => {
                                                let categoryName = chartData[props.index].name
                                                setSelectCategoryByName(categoryName)
                                            }
                                        }]
                                    }
                                }
                            }]}

                        />
                    </Svg>
                    <View style={{ position: 'absolute', top: '42%', left: "42%" }}>
                        <Text style={{ lineHeight: 36, fontSize: 30, textAlign: 'center' }}>{totalExpenseCount}</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16, textAlign: 'center' }}>Produits</Text>
                    </View>
                </View>
            )
        }

    }

    function renderExpenseSummary() {
        let data = processCategoryDataToDisplay()

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    height: 40,
                    paddingHorizontal: 1,
                    borderRadius: 10,
                    backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? item.color : theme.colors.white
                }}
                onPress={() => {
                    let categoryName = item.name
                    setSelectCategoryByName(categoryName)
                }}
            >
                {/* Name/Category */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View
                        style={{
                            width: 20,
                            height: 20,
                            backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? theme.colors.white : item.color,
                            borderRadius: 5
                        }}
                    />

                    <Text style={{ marginLeft: 8, color: (selectedCategory && selectedCategory.name == item.name) ? theme.colors.white : theme.colors.primary, lineHeight: 22, fontSize: 16 }}>{item.name}</Text>
                </View>

                {/* Expenses */}
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ color: (selectedCategory && selectedCategory.name == item.name) ? theme.colors.white : theme.colors.primary, lineHeight: 22, fontSize: 16 }}>{item.y.toFixed(0)} XOF </Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <View style={{ padding: 24 }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    horizontal={false}
                    scrollEnabled={false}
                    keyExtractor={item => `${item.id}`}
                />
            </View>

        )
    }
    return (
        <ScalableScreen>
            <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
                {/** Nav bar section */}
                {renderNavbar()}
                {/** Header section */}
                {renderHeader()}
                {/**Categories sections */}
                {renderCategoriesHeader()}

                <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                    {
                        viewMode == 'list' &&
                        <View>
                            {renderCategoriesList()}
                            {renderIncomingExpenses()}
                        </View>
                    }
                    {
                        viewMode == 'chart' &&
                        <View>
                            {renderChart()}
                            {renderExpenseSummary()}
                        </View>
                    }
                </ScrollView>
            </View>
        </ScalableScreen>
    )
}

const HeaderSection = styled.View`
  margin: 0px 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }
})

export default Invitee