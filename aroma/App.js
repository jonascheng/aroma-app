import React, { PureComponent } from 'react';
import { Constants } from 'expo';
import { Platform, StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

class Calculator extends PureComponent {
    state = {
        capacity: '',
        percent: '',
        drops: 0,
    };

    _handleCalculate = (capacity, percent) => this.setState({ drops: parseInt(capacity, 10)*(parseInt(percent, 10)/100)*20 })

    render() {
        return (
            <View
                style={styles.inner_container}>
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
                                style={{width: 150, height: 30, borderColor: 'red', borderWidth: 1}}
                                keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'phone-pad'}
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => this.setState({ capacity: text })}
                                value={this.state.capacity} />
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
                                style={{width: 150, height: 30, borderColor: 'red', borderWidth: 1}}
                                keyboardType='phone-pad'
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => this.setState({ percent: text })}
                                value={this.state.percent} />
                        </View>
                        <View style={styles.unit}>
                            <Text style={text_styles.subtitle}>%</Text>
                        </View>
                    </View>

                    <View style={styles.field}>
                        <View style={styles.title}>
                            <Text style={text_styles.subtitle}>精油滴數</Text>
                        </View>
                        <Text style={text_styles.subtitle}>
                            {this.state.drops}
                        </Text>
                        <View style={styles.unit}>
                            <Text style={text_styles.subtitle}>滴</Text>
                        </View>
                    </View>

                    <View style={styles.field}>
                        <View style={styles.cal_btn}>
                            <Button title="計算"
                                onPress={() => this._handleCalculate(this.state.capacity, this.state.percent)} />
                        </View>
                        <View style={styles.clear_btn}>
                            <Button title="清除"
                                color='grey'
                                onPress={() => {this.setState({capacity: '', percent: ''})}} />
                        </View>
                    </View>
                </View>
                <View style={styles.ad}>
                    <Text>This is ad network</Text>
                </View>
            </View>
        );
    }
}

class Suggestion extends PureComponent {
    state = {
        object: 'adult',
        part: 'face',
        min_percent: 0,
        max_percent: 0,
    };

    minPercentMap = {
        'adult': { 'face': 0.5, 'body': 2, 'feet': 3 },
        'elder': { 'face': 0.25, 'body': 0.5, 'feet': 1.5 },
    };

    maxPercentMap = {
        'adult': { 'face': 1, 'body': 6, 'feet': 10 },
        'elder': { 'face': 0.5, 'body': 2, 'feet': 3 },
    };

    _handleSuggestion = (object, part) => this.setState(
        {object: object, part: part, min_percent: this.minPercentMap[object][part], max_percent: this.maxPercentMap[object][part]}
    )

    //_handlePress
    render() {
        return (
            <View
                style={styles.inner_container}
                onLayout={() => this._handleSuggestion(this.state.object, this.state.part)}
                >
                <View style={styles.title}>
                    <Text style={text_styles.title}>精油濃度比例建議</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.field}>
                        <View style={styles.title}>
                            <Text style={text_styles.subtitle}>使用對象</Text>
                        </View>
                        <View style={styles.dropdown}>
                            <Picker
                              selectedValue={this.state.object}
                              mode='dropdown'
                              style={styles.picker}
                              onValueChange={(itemValue, itemIndex) => this._handleSuggestion(itemValue, this.state.part)}
                              >
                                <Picker.Item label='一般成人' value='adult' />
                                <Picker.Item label='老人/兒童' value='elder' />
                            </Picker>
                        </View>
                        <View style={styles.unit}>
                            <Text style={text_styles.subtitle}> </Text>
                        </View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.title}>
                            <Text style={text_styles.subtitle}>使用部位</Text>
                        </View>
                        <View style={styles.dropdown}>
                            <Picker
                              selectedValue={this.state.part}
                              mode='dropdown'
                              style={styles.picker}
                              onValueChange={(itemValue, itemIndex) => this._handleSuggestion(this.state.object, itemValue)}
                              >
                                <Picker.Item label='臉部' value='face' />
                                <Picker.Item label='身體(脖子以下)' value='body' />
                                <Picker.Item label='腳底' value='feet' />
                            </Picker>
                        </View>
                        <View style={styles.unit}>
                            <Text style={text_styles.subtitle}> </Text>
                        </View>
                    </View>

                    <View style={styles.field}>
                        <View style={styles.title}>
                            <Text style={text_styles.subtitle}>建議精油濃度</Text>
                        </View>
                        <Text style={text_styles.subtitle}>
                            {this.state.min_percent}
                        </Text>
                        <View style={styles.unit}>
                            <Text style={text_styles.subtitle}>% ～</Text>
                        </View>
                        <Text style={text_styles.subtitle}>
                            {this.state.max_percent}
                        </Text>
                        <View style={styles.unit}>
                            <Text style={text_styles.subtitle}>%</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.ad}>
                    <Text>This is ad network</Text>
                </View>
            </View>
        );
    }
}

const CalculatorComponent = () => <Calculator />;
const SuggestionComponent = () => <Suggestion />;
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

  // Inherit any props passed to it;
  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    '1': CalculatorComponent,
    '2': SuggestionComponent,
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
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    flex: 1,
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
