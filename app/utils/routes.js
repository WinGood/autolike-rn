import HomePage from '../components/HomePage';
import DetailPage from '../components/DetailPage';
import FirmPage from '../components/FirmPage';
import Garage from '../components/Garage';
import GarageFilledPage from '../components/GarageFilledPage';
import AuthPage from '../components/AuthPage';
import MapPage from '../components/MapPage';
import SearchPage from '../components/SearchPage';
import SearchPageTest from '../components/SearchPageTest';
import SettingsPage from '../components/SettingsPage';
import UserLikesPage from '../components/UserLikesPage';

const routes = {
  home: {
    drawerUnlock: true,
    initialRoute: true,
    subToolbar: true,
    title: 'Главная',
    component: HomePage,
    children: {
      detail: {
        title: 'Категории',
        component: DetailPage,
        subToolbar: true,
        children: {
          search: {
            title: 'Результаты поиска',
            component: SearchPage,
            children: {
              firm: {
                title: 'Фирма',
                actions: true,
                component: FirmPage,
                children: {
                  map: {
                    title: 'Фирма на карте',
                    hideNavBar: true,
                    component: MapPage
                  }
                }
              },
              onMap: {
                title: 'Фирмы на карте',
                hideNavBar: true,
                component: MapPage
              }
            }
          }
        }
      }
    }
  },
  search: {
    title: 'Результаты поиска',
    component: SearchPage,
    // initialRoute: true,
  },
  userLikes: {
    title: 'Мои лайки',
    drawerUnlock: true,
    // initialRoute: true,
    component: UserLikesPage
  },
  garage: {
    title: 'Мои авто',
    drawerUnlock: true,
    // initialRoute: true,
    component: Garage
  },
  auth: {
    title: 'Форма входа',
    hideNavBar: true,
    // initialRoute: true,
    component: AuthPage
  },
  settings: {
    title: 'Настройки',
    actions: true,
    drawerUnlock: true,
    component: SettingsPage
  }
}

export {routes as definedRoutes};