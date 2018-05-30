<StatusBar
  translucent={true}
  barStyle="light-content"
/>

<Modal
  animationType="slide"
  transparent={false}
  visible={this.props.modalVisible}
>
  <Calendar {...props} />
</Modal>

<LinearGradient
  colors={['#DF2F3C', '#B22645']}
>
  <View style={style.navCalander}>
    <SimpleLineIcons
      style={style.navTop}
      name='calendar'
    />
    <Text style={style.navTop}>{this.props.weekName}</Text>
    <TouchableOpacity
      onPress={() => {
        props.setModalVisible(this.props.modalVisible);
      }}>
      <SimpleLineIcons
        style={style.navTop}
        name='arrow-down'
      />
    </TouchableOpacity>
  </View>
</LinearGradient>
