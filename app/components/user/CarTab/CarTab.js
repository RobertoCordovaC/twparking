/* @flow */
import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';
import _ from 'lodash';
import { scale } from 'react-native-size-matters';
import withContext from '../../../context/WithContext';
import InputForm from '../../_common/InputForm/InputForm';
import Plate from './Plate';
import TWText from '../../_common/TWText/TWText';
import type { GlobalContext } from '../../../context/types';
import TWButton from '../../_common/TWFormControls/TWButton';

type Props = {
  context?: GlobalContext,
};
type State = {
  car: Object,
};

const carSampleOne = require('./images/car_sample_1.png');
const carSampleTwo = require('./images/car_sample_2.png');
const carSampleThree = require('./images/car_sample_3.png');
const carSampleFour = require('./images/car_sample_4.png');
const carSampleFive = require('./images/car_sample_5.png');

const vehicles = [carSampleOne, carSampleTwo, carSampleThree, carSampleFour, carSampleFive];

class CarTab extends Component<Props, State> {
  static defaultProps = {
    context: null,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      car: {},
    };
  }

  componentDidMount() {
    const { context } = this.props;
    const { user } = context;
    const { car } = user;
    car.vehicle = _.sample(vehicles);
    this.setState({ car });
  }

  render() {
    const { context } = this.props;
    const { car } = this.state;
    return (
      <ScrollView
        style={{
          paddingHorizontal: '10%',
        }}
      >

        <View style={{ alignItems: 'center' }}>
          <View style={{ height: 130, marginTop: 40 }}>
            <Image source={car.vehicle} />
          </View>

          <Plate plate={car.plate} />

          <InputForm
            uppercase
            field={car.plate}
            i18nLabel="screens.user.cars.form.plate"
            i18nPlaceholder="screens.user.cars.form.platePlaceholder"
            onChangeText={(value) => {
              this.setState({ car: { ...car, plate: value } });
            }}
          />

          <InputForm
            field={car.brand}
            i18nLabel="screens.user.cars.form.brand"
            i18nPlaceholder="screens.user.cars.form.brandPlaceholder"
            onChangeText={(value) => {
              this.setState({ car: { ...car, brand: value } });
            }}
          />

          <InputForm
            field={car.model}
            i18nLabel="screens.user.cars.form.model"
            i18nPlaceholder="screens.user.cars.form.modelPlaceholder"
            onChangeText={(value) => {
              this.setState({ car: { ...car, model: value } });
            }}
          />

          <InputForm
            field={car.size}
            i18nLabel="screens.user.cars.form.size"
            i18nPlaceholder="screens.user.cars.form.sizePlaceholder"
            onChangeText={(value) => {
              this.setState({ car: { ...car, size: value } });
            }}
          />

          <View style={{ width: scale(200) }}>
            <TWButton
              i18n="commons.buttons.save"
              icon="save"
              uppercase
              onPress={() => { context.updateCar(car); }}
            />
          </View>

          <TWText weight="light" font="reenieBeanie" text="Pico y placa el dia Martes" size="title" style={{ marginVertical: 40 }} />
        </View>

      </ScrollView>
    );
  }
}

export default withContext(CarTab);
