import React, { Component } from 'react';
import {Left, Body, Card, CardItem, Thumbnail, Text } from 'native-base';


class LesClesEnMusique extends Component {

    render() {
        return (
            <Card style={{flex: 0}}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={require('../../../assets/Logo.png')} />
                            <Body>
                            <Text>Les clés en musique</Text>
                            <Text note>January 28, 2019</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Image source={require('../../../assets/partitions/les_cles.jpg')} style={{height: 200, width: 350, flex: 1}}/>
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
        );
    }
}

export default LesClesEnMusique;
