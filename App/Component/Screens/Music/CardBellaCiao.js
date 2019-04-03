import React, { Component } from 'react';
import { Card, CardItem, Text, Right, Body, Thumbnail, Button, Icon } from 'native-base';
import { PlaySound, StopSound } from 'react-native-play-sound';

class CardBellaCiao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pause: true,
        };
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Thumbnail square large source={this.props.imageUri}/>
                    <Body style={{marginLeft: 10}}>
                        <Text>{this.props.nameArtist}</Text>
                        <Text>{this.props.nameSingle}</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => PlaySound('bella_ciao')}>
                            <Icon type="MaterialCommunityIcons" size={30} name='play'/>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        );
    }
}

export default CardBellaCiao;
