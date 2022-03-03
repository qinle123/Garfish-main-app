import Garfish from 'garfish';

export default () => {
  Garfish.run({
    basename: '/',
    domGetter: '#micro',
    apps: [
      {
        name: 'micro1',
        activeWhen: '/micro1',
        entry: 'https://terminal-config-center.biz.sheincorp.cn:3001/',
      },
      {
        name: 'micro2',
        activeWhen: '/micro2',
        entry: 'http://localhost:8080',
      },
    ],
  });
}