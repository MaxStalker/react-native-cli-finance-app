import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
	ShadowContainer,
	CardContainer,
	VisaLogo,
	CardNumber,
	CardInfo,
	Label,
	Value
} from './styles';
export default class extends Component {
	state = {
		fontLoaded: false
	};

	render() {
		const { fontLoaded } = this.state;
		const { number, holder, expiry } = this.props;
		return (
			<ShadowContainer>
				<CardContainer
					colors={['#898c9b', '#4d5061']}
					start={{x:0, y:0}}
					end={{x:1, y:1}}
				>
					<CardNumber>{number}</CardNumber>
					<CardInfo>
						<View>
							<Label>Card Holder</Label>
							<Value>{holder}</Value>
						</View>
						<View>
							<Label>Expiry</Label>
							<Value>{expiry}</Value>
						</View>
					</CardInfo>
				</CardContainer>
			</ShadowContainer>
		);
	}
}
