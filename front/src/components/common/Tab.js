import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Tab = () => (
  <Tabs defaultActiveKey="1" centered size="large">
    <TabPane tab="심의정보" key="1">
      심의정보
    </TabPane>
  </Tabs>
);

export default Tab;
