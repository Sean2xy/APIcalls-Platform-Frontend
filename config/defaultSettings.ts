import { Settings as LayoutSettings } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Teemo API',
  pwa: false,
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_1abiI_wHzhubK9ObapAXY0dFn26kmYCMw&usqp=CAU',
  iconfontUrl: '',
};

export default Settings;
