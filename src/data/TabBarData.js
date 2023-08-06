import CalllistScreen from '../Screens/CalllistScreen';
import ChatlistScreen from '../Screens/ChatlistScreen';
import StatusScreen from '../Screens/StatusScreen';

export const TabBarData = [
  {
    id: 1,
    route: ChatlistScreen,
    name: 'Chats',
  },
  {
    id: 2,
    route: StatusScreen,
    name: 'Status',
  },
  {
    id: 3,
    route: CalllistScreen,
    name: 'Calls',
  },
];
