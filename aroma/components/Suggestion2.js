import React, { PureComponent } from 'react';
import { Constants } from 'expo';
import { Platform, StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native';

export default class Suggestion2 extends PureComponent {
    state = {
        object: '',
        body: '',
        min_percent: 0,
        max_percent: 0,
    };

    //_handlePress
    render() {
        return (
            <View style={styles.inner_container}>
                <View style={styles.title}>
                    <Text style={text_styles.title}>精油濃度比例建議</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.field}>
                        <View style={styles.title}>
                            <Text style={text_styles.subtitle}>使用對象</Text>
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                style={{width: 150, height: 30, borderColor: 'red', borderWidth: 1}}
                                keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'phone-pad'}
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => this.setState({ object: text })}
                                value={this.state.object} />
                        </View>
                    </View>
                    <View style={styles.field}>
                        <View style={styles.title}>
                            <Text style={text_styles.subtitle}>使用部位</Text>
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                style={{width: 150, height: 30, borderColor: 'red', borderWidth: 1}}
                                keyboardType='phone-pad'
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => this.setState({ body: text })}
                                value={this.state.body} />
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
