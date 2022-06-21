import {
  CommonActions,
  createNavigationContainerRef,
  DrawerActions,
  NavigationState,
  PartialState,
  Route,
  StackActions,
} from '@react-navigation/native';
import { RootStackParamList } from '@src/App';
type ResetState =
  | PartialState<NavigationState>
  | NavigationState
  | (Omit<NavigationState, 'routes'> & {
      routes: Omit<Route<string>, 'key'>[];
    });
export const navigationRef = createNavigationContainerRef<RootStackParamList>();
const navigate = (
  name: keyof RootStackParamList,
  params: RootStackParamList[typeof name],
): void => {
  if (navigationRef.isReady() && name) {
    const action = CommonActions.navigate({ name, params });
    navigationRef.dispatch(() => {
      return action;
    });
  }
};
const push = (
  name: keyof RootStackParamList,
  params: RootStackParamList[typeof name],
): void => {
  if (navigationRef && name) {
    const action = StackActions.push(name, params);
    navigationRef.dispatch(action);
  }
};
const goBack = (): void => {
  if (navigationRef) {
    const action = CommonActions.goBack();
    navigationRef.dispatch(action);
  }
};
const reset = (state: string | ResetState): void => {
  if (typeof state === 'string') {
    state = { routes: [{ name: state }] };
  }
  if (navigationRef) {
    const action = CommonActions.reset(state);
    navigationRef.dispatch(action);
  }
};
const toggleDrawer = (): void => {
  navigationRef.dispatch(DrawerActions.toggleDrawer());
};

const canGoBack = (): boolean => {
  return navigationRef.canGoBack() || false;
};

const getCurrentRouteName = (): string => {
  return navigationRef.getCurrentRoute()?.name || '';
};

const onStateChanged = (cb: () => void): (() => void) | undefined => {
  return navigationRef.addListener('state', cb);
};

const navigationService = {
  navigate,
  push,
  goBack,
  reset,
  toggleDrawer,
  canGoBack,
  getCurrentRouteName,
  onStateChanged,
};

export default navigationService;
