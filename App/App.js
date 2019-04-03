import { createSwitchNavigator, createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import {SignUpScreen, HomeScreen, AuthLoadingScreen, WelcomeScreen, LoginScreen, SettingsScren, CoursesScreen, PartitionsScreen, PianoScreen} from './Component/Screens';
import CustomDrawerComponent from './Component/CustomDrawerComponent';

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: HomeScreen
    },
    Piano: {
        screen: PianoScreen
    },
    Parametres: {
        screen: SettingsScren,
    },
    Cours: {
        screen: CoursesScreen
    },
    Partitions: {
        screen: PartitionsScreen
    },
    },
    {
        drawerPosition: 'left',
        drawerWidth: 300,
        contentComponent: CustomDrawerComponent,
        contentOptions: {
            activeTintColor :'#ffffff',
            inactiveTintColor :'#b24d5a',
            activeBackgroundColor :'#b24d5a',
            inactiveBackgroundColor :'#ffffff',
        }
    }
)

const AuthStack = createStackNavigator(
    { 
        Welcome: {
        screen: WelcomeScreen,
        navigationOptions: {
            header: null,
        }
        },
        SignUp: {
        screen: SignUpScreen,
        navigationOptions: {
            header: null,
        }
        },
        LogIn: {
        screen: LoginScreen,
        navigationOptions: {
            header: null,
        }
        },
        Home: {
        screen: AppDrawerNavigator,
        navigationOptions: {
            header: null,
        }
        }
    }
    );

    export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: {screen: AuthLoadingScreen},
        Auth: {screen: AuthStack},
    },
    {
        initialRouteName: 'AuthLoading',
    }
));

