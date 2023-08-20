import { listInterfaceInfoByPageUsingGET } from '@/services/yuapi-backend/interfaceInfoController';
import {displayMyInterfaceInfoUsingGET} from "@/services/yuapi-backend/userInterfaceInfoController";
import { ShareAltOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import {history, useRequest} from '@umijs/max';
import { Card, Layout, List, message, Pagination, PaginationProps, Tooltip } from 'antd';
import Search from 'antd/es/input/Search';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react';
import indexStyle from './index.less';

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  height: '64px',
  paddingInline: '30%',
  lineHeight: '64px',
  color: '#fff',
  background: 'none',
};
const footerStyle: React.CSSProperties = {
  textAlign: 'center',
};

const contentStyle: React.CSSProperties = {
  minHeight: 120,
  lineHeight: '120px',
};

const Index: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [total, setTotal] = useState<number>(0);
  const [current, setCurrent] = useState<number>(1);
  const [list, setList] = useState<API.InterfaceInfoVO[]>([]);
  const { data: listData } = useRequest(() => {
    return displayMyInterfaceInfoUsingGET();
  });
  //
  // const onSearch = (value: string) => {
  //   setSearchText(value);
  //   loadData(value);
  // };

  // const onChange: PaginationProps['onChange'] = (pageNumber) => {
  //   console.log(pageNumber);
  //   setCurrent(pageNumber);
  //   loadData(searchText, pageNumber);
  // };
  //
  // const onSizeChange = (current: number, size: number) => {
  //   loadData(searchText, current, size);
  // };

  const CardInfo: React.FC<{
    totalNum: React.ReactNode;
    leftNum: React.ReactNode;
  }> = ({ totalNum, leftNum }) => (
    <div className={indexStyle.cardInfo}>
      <div>
        <p>已调用次数</p>
        <p>{totalNum}</p>
      </div>
      <div>
        <p>剩余调用次数</p>
        <p>{leftNum}</p>
      </div>
    </div>
  );

  return (
    <PageContainer>
      <Layout>
        {/*<Header style={headerStyle}>*/}
        {/*  <Search*/}
        {/*    size={'large'}*/}
        {/*    placeholder="请输入接口名称"*/}
        {/*    onSearch={onSearch}*/}
        {/*    enterButton*/}
        {/*  />*/}
        {/*</Header>*/}
        <Content style={contentStyle}>
          <List<API.InterfaceInfoVO>
            className={indexStyle.filterCardList}
            grid={{ gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
            dataSource={listData || []}
            loading={loading}
            renderItem={(item) => (
              <List.Item>
                <Card
                  hoverable
                  bodyStyle={{ paddingBottom: 20 }}
                  actions={[
                    <Tooltip title="分享" key="share">
                      <ShareAltOutlined />
                    </Tooltip>,
                    <Tooltip title="在线调用" key="share">
                      <div
                        onClick={() => {
                          history.push('/interface_info/' + item.id);
                        }}
                      >
                        在线调用
                      </div>
                    </Tooltip>,
                  ]}
                >
                  <Card.Meta title={item.name} />
                  <div>
                    <CardInfo totalNum={item.totalNum} leftNum={item.leftNum} />
                  </div>
                </Card>
              </List.Item>
            )}
          />
          {/*<Footer style={footerStyle}>*/}
          {/*  <Pagination*/}
          {/*    showQuickJumper*/}
          {/*    showSizeChanger*/}
          {/*    pageSizeOptions={[6, 10, 20, 30]}*/}
          {/*    current={current}*/}
          {/*    onShowSizeChange={onSizeChange}*/}
          {/*    defaultPageSize={6}*/}
          {/*    total={total}*/}
          {/*    onChange={onChange}*/}
          {/*  />*/}
          {/*</Footer>*/}
        </Content>
      </Layout>
    </PageContainer>
  );
};

export default Index;
