/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CardView from "./src/containers/CardView";
import StatsView from "./src/containers/StatsView";

/*
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});
*/

type Props = {};
export default class App extends Component<Props> {
  state = {
    mode: "stats-view"
  };
  render() {
    const { mode } = this.state;
    return (
      <View style={styles.container}>
        <LinearGradient colors={["#515362", "#2e2d3b"]} style={[styles.box]}>
          {mode === "card-view" ? (
            <CardView action={() => this.setState({ mode: "stats-view" })} />
          ) : (
            <StatsView action={() => this.setState({ mode: "card-view" })} />
          )}
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start'
	},
	headerText: {
		fontSize: 20
	},
	box: {
		position: 'absolute',
		alignItems: 'flex-start',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}
});
