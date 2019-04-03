import React, { Component } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { Container, Header, Content, Icon, Right, Title, Left, Body, Card, CardItem, Thumbnail, Text, Accordion } from 'native-base';


export class CoursesScreen extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Header style={{backgroundColor:'#7e1d31'}}>
                    <Left>
                        <Icon style={{color: '#fff'}} name='menu' onPress={() => this.props.navigation.openDrawer()}/>
                    </Left>
                    <Body>
                        <Title style={{color: '#fff'}}>Master Piano</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../assets/Logo.png')} />
                                <Body>
                                <Text>Les clés en musique</Text>
                                <Text note>January 28, 2019</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={require('../../assets/partitions/les_cles.jpg')} style={{height: 150, width: 350, flex: 1}}/>
                                <Text>
                                    La clé en musique désigne le nom de la note à laquelle elle fait référence. Il existe 3 clés : la clé de Fa, la clé d’Ut (pour Do) et la clé de Sol. Elles sont notées au début de la portée, sur la même ligne que la note dont elle porte le nom.
                                </Text>
                                <Text/>
                                <Text>
                                    La clé est un marqueur. Comme elle désigne une note, son objectif est de « fixer » les autres notes sur la portée dans l’ordre que l’on connaît : Do-Ré-Mi-Fa-Sol-La-Si.
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../assets/Logo.png')} />
                                <Body>
                                <Text>Portée théorique</Text>
                                <Text note>January 29, 2019</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={require('../../assets/partitions/la_portee_theorique_11_lignes.jpg')} style={{height: 200, width: 350, flex: 1}}/>
                                <Text>
                                    Afin de représenter l’échelle des sons, la portée théorique aurait pu contenir 11 lignes mais son usage aurait été difficile, l’œil détectant mal la hiérarchie des notes sur autant de lignes. On a préféré scinder ce bloc en deux, 2 portées de 5 lignes. La 6ème ligne est fictive.
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b24d5a'
    }
})

export default CoursesScreen
