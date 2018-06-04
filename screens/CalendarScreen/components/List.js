import { connect } from 'react-redux';
import React, { Component } from 'react';
import { actionCreators as weekReportActions } from '../../../redux/modules/weekReport';
import { ScrollView, View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { SimpleLineIcons, FontAwesome } from '@expo/vector-icons';

class List extends Component {
  state = {
    isLoading: false
  }

  constructor(props) {
    super(props);
    console.log(props);
    this._goWeek = this._goWeek.bind(this);
  }

  _goWeek = () => {
    this.setState({
      isLoading: true
    });
    const getResult = this.props.goWeek(this.props.accessToken, this.props.item);
    if (getResult) {
      console.log("getResult");
      this.props.navigation.navigate('Week', {updateDate: this.props.item.end_date});
    }
  }




// const List = props => {
  // console.log("list");
  // console.log(props);
  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.list}
          onPress={this._goWeek}
        >
          <View style={styles.textWrapper}>
            <Text style={styles.title}>보고일 {this.props.item.end_date}</Text>
            <Text style={styles.desc}>{this.props.item.weekName}</Text>
          </View>
          <View style={styles.iconWrapper}>
            {
              this.props.item.reportStatus ?
              (
                <View style={styles.circle}>
                  <FontAwesome
                    style={styles.nestedIcon}
                    color='#DF2F3C'
                    name='check'
                  />
                </View>
              )
              :
              (
                <View style={styles.circle} backgroundColor='#DF2F3C'>
                  <SimpleLineIcons
                    style={styles.nestedIcon}
                    color='#fff'
                    name='pencil'
                  />
                </View>
              )
            }
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  textWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
    // marginTop: 18
  },
  title: {
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#DF2F3C'
  },
  desc: {
    paddingRight: 10,
    fontSize: 12,
    color: 'rgba(223,47,60,50)'
  },
  iconWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  circle: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#DF2F3C',
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  nestedIcon: {
    fontSize: 12,
    // color: '#fff',
  }
});

export default List;
