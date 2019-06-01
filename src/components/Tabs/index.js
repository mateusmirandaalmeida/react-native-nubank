import React from 'react'

import { Container, TabsContainer, TabItem, TabText } from './styles'

import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Tabs({ translateY }) {
    return (
        <Container style={{
            transform: [
                {
                    translateY: translateY.interpolate({
                        inputRange: [0, 320],
                        outputRange: [0, 30],
                        extrapolate: 'clamp',
                    })
                }
            ],
            opacity: translateY.interpolate({
                inputRange: [0, 320],
                outputRange: [1, 0.5],
                extrapolate: 'clamp',
            })
        }}>
            <TabsContainer>
                <TabItem>
                    <Icon name="person-add" size={24} color="#FFF"></Icon>
                    <TabText>Indicar amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="chat-bubble-outline" size={24} color="#FFF"></Icon>
                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-downward" size={24} color="#FFF"></Icon>
                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-upward" size={24} color="#FFF"></Icon>
                    <TabText>Transferir</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="lock" size={24} color="#FFF"></Icon>
                    <TabText>Bloquear cartão</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    )
}