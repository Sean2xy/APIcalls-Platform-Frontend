import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
const Footer: React.FC = () => {
  const defaultMessage = 'Sean';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Temmo API',
          title: 'Temmo API',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/Sean2xy',
          blankTarget: true,
        },
        {
          key: 'Sean',
          title: 'Sean',
          href: 'https://github.com/Sean2xy',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
