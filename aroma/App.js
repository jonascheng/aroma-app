import React, { PureComponent } from 'react';
import { Constants } from 'expo';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const Calculator = () =>
    <View style={styles.inner_container}>
        <View style={styles.title}>
            <Text style={text_styles.title}>精油濃度計算機</Text>
        </View>
        <View style={styles.content}>
            <View style={styles.field}>
                <View style={styles.title}>
                    <Text style={text_styles.subtitle}>容器容量</Text>
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={{width: 150, borderColor: 'gray', borderWidth: 1}}
                        placeholder="輸入容器容量"
                        underlineColorAndroid='transparent' />
                </View>
                <View style={styles.unit}>
                    <Text style={text_styles.subtitle}>ml</Text>
                </View>
            </View>
            <View style={styles.field}>
                <View style={styles.title}>
                    <Text style={text_styles.subtitle}>精油濃度</Text>
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={{width: 150, borderColor: 'gray', borderWidth: 1}}
                        placeholder="輸入精油濃度"
                        underlineColorAndroid='transparent' />
                </View>
                <View style={styles.unit}>
                    <Text style={text_styles.subtitle}>%</Text>
                </View>
            </View>

            <View style={styles.field}>
                <View style={styles.title}>
                    <Text style={text_styles.subtitle}>精油滴數</Text>
                </View>
                <View style={styles.input} />
                <View style={styles.unit}>
                    <Text style={text_styles.subtitle}>滴</Text>
                </View>
            </View>

            <View style={styles.field}>
                <View style={styles.cal_btn}>
                    <Button title="計算"
                        onPress={() => this._handlePress()} />
                </View>
                <View style={styles.clear_btn}>
                    <Button title="清除"
                        onPress={() => this._handlePress()} />
                </View>
            </View>

        </View>
        <View style={styles.ad}>
            <Text>This is ad network</Text>
        </View>
      </View>;

const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;

export default class App extends PureComponent {
  state = {
    index: 0,
    routes: [
      { key: '1', title: '濃度計算' },
      { key: '2', title: '濃度建議' },
      { key: '3', title: '精油資訊' },
    ],
  };

  _handleChangeTab = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    '1': Calculator,
    '2': SecondRoute,
    '3': SecondRoute,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.app_container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}

const text_styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 20,
    },
});

const styles = StyleSheet.create({
  app_container: {
    flex: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    //backgroundColor: 'red',
    marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
  },
  inner_container: {
    flex: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    //backgroundColor: 'red',
  },
  content: {
    flex: 6,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  ad: {
    flex: 5,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: 'pink',
  },

  field: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
  },
  input: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unit: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cal_btn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 10,
  },
  clear_btn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 10,
  },
});
