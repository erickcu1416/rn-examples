import { CompositeNavigationProp, NavigationHelpers, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export interface Props {
    navigation: CompositeNavigationProp<StackNavigationProp<ParamListBase, 'params'>, NavigationHelpers<ParamListBase>>;
};

export interface PropsHeader {
    navigation?: CompositeNavigationProp<StackNavigationProp<ParamListBase, 'params'>, NavigationHelpers<ParamListBase>>;
    title: string;
    noBackButton?: boolean;
    actions?: JSX.Element[];
};

export interface ActionsRightHeader {
}