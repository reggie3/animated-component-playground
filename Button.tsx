import * as React from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import {
  TouchableOpacity,
  TapGestureHandler,
  TapGestureHandlerProperties,
  TapGestureHandlerStateChangeEvent,
  State,
  GestureHandlerStateChangeNativeEvent,
  TapGestureHandlerEventExtra
} from "react-native-gesture-handler";
import { ButtonColors, ButtonBorderColors } from "./colors";
import { BORDER_WIDTH, BORDER_RADIUS } from "./styles";
import Animated from "react-native-reanimated";
import { useState } from "react";
import { useComponentLayout } from "./useComponentLayout";

export interface ButtonProps {
  children: React.ReactElement;
  disabled?: boolean;
  light?: boolean;
  info?: boolean;
  primary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  dark?: boolean;
  onPress: () => void;
  rounded?: boolean;
  testID?: string;
}

const defaultProps = {
  primary: true
};

const { add, sub, Value, cond, eq, set } = Animated;

const DOT_WIDTH = 20;
const offsetX = new Value(DOT_WIDTH / 2);
const offsetY = new Value(DOT_WIDTH / 2);

export const Button: React.SFC<ButtonProps> = props => {
  const [layout, onLayout] = useComponentLayout();

  const state = new Value(State.UNDETERMINED);
  const translationX = new Value(0);
  const translationY = new Value(0);
  const opacity = new Value(0);
  /* const gestureHandler = onGestureEvent({
    state,
    translationX,
    translationY
  }); */

  const getBackgroundColor = (): ButtonColors => {
    const { light, info, primary, success, warning, danger, dark } = props;
    if (light) {
      return ButtonColors.LIGHT;
    }
    if (info) {
      return ButtonColors.INFO;
    }
    if (primary) {
      return ButtonColors.PRIMARY;
    }
    if (success) {
      return ButtonColors.SUCCESS;
    }
    if (warning) {
      return ButtonColors.WARNING;
    }
    if (danger) {
      return ButtonColors.DANGER;
    }
    if (dark) {
      return ButtonColors.DARK;
    }
    return ButtonColors.PRIMARY;
  };
  const getBorderColor = (): ButtonColors => {
    const { light, info, primary, success, warning, danger, dark } = props;
    if (light) {
      return ButtonBorderColors.LIGHT;
    }
    if (info) {
      return ButtonBorderColors.INFO;
    }
    if (primary) {
      return ButtonBorderColors.PRIMARY;
    }
    if (success) {
      return ButtonBorderColors.SUCCESS;
    }
    if (warning) {
      return ButtonBorderColors.WARNING;
    }
    if (danger) {
      return ButtonBorderColors.DANGER;
    }
    if (dark) {
      return ButtonBorderColors.DARK;
    }
    return ButtonBorderColors.PRIMARY;
  };

  const getRounded = (): ViewStyle => {
    if (props.rounded) {
      return { borderRadius: layout.height / 2 };
    }
    return {};
  };

  const getDisabled = (): ViewStyle => {
    if (props.disabled) {
      return { backgroundColor: ButtonColors.DISABLED };
    }
    return {};
  };

  const onTap = (event: TapGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      console.log(event.nativeEvent.absoluteX, event.nativeEvent.absoluteY);
      console.log(event.nativeEvent.x, event.nativeEvent.y);
      console.log(event.nativeEvent);
    }
  };

  const { disabled, children, onPress, testID } = props;

  const onGestureEvent = ({
    nativeEvent
  }: {
    nativeEvent: GestureHandlerStateChangeNativeEvent &
      TapGestureHandlerEventExtra;
  }) => {
    console.log(nativeEvent);
    state.setValue(nativeEvent.state);
    translationX.setValue(nativeEvent.x);
    translationY.setValue(nativeEvent.y);
  };

  const withOffset = (
    value: Animated.Node<number>,
    state: Animated.Value<State>,
    offset: Animated.Value<number> = new Value(0)
  ) => {
    cond(
      eq(state, State.END),
      [set(offset, add(offset, value)), offset],
      add(offset, value)
    );
  };

  const translateX = withOffset(translationX, state, offsetX);
  const translateY = withOffset(translationY, state, offsetY);

  return (
    <View style={{ borderColor: "orange", borderWidth: 2 }}>
      <>
        <TapGestureHandler onHandlerStateChange={onGestureEvent}>
          <View
            onLayout={onLayout}
            style={
              {
                ...styles.button,
                backgroundColor: getBackgroundColor(),
                borderColor: getBorderColor(),
                ...getRounded(),
                ...getDisabled()
              } as ViewStyle
            }
            testID={testID ?? ""}
          >
            {children}
          </View>
        </TapGestureHandler>
        <Animated.View
          style={
            ({
              ...StyleSheet.absoluteFillObject,
              width: 20,
              height: 20,
              borderRadius: 10,
              backgroundColor: "orange",
              transform: [{ translateX }, { translateY }]
            } as unknown) as ViewStyle
          }
        />
      </>
    </View>
  );
};

const baseButton: ViewStyle = {
  alignItems: "center",
  borderWidth: BORDER_WIDTH,
  borderRadius: BORDER_RADIUS,
  justifyContent: "center",
  paddingVertical: 10,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  opacity: 0.1
};

export const styles = StyleSheet.create({
  button: {
    ...baseButton
  },
  buttonDisabled: {
    ...baseButton,
    backgroundColor: ButtonColors.LIGHT
  }
});

export default Button;
