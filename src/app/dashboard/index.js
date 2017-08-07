import React from 'react'
import { Button, Icon, Carousel, WhiteSpace, WingBlank, List, Tabs, Badge, TabBar  } from 'antd-mobile'
import Fashare from 'react-icons/lib/fa/share-alt-square'
import Faheart from 'react-icons/lib/fa/heart'
import homeImg from './assets/TOP-STAR-LOGO.png'
import './theme/styles/index.scss'

const Item = List.Item;
const TabPane = Tabs.TabPane;

module.exports = class extends React.Component {

  state = {
    data: ['', '', ''],
    initialHeight: 200,
    disabled: false,
    selectedTab: 'redTab',
    hidden: false,
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  handleLongPress = (e) => {
    console.log('longpress toggled', e);
  }

  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <div>
        <WingBlank>
          <Carousel
            className="my-carousel"
            autoplay={false}
            infinite
            selectedIndex={1}
            swipeSpeed={35}
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {this.state.data.map(ii => (
              <a href="http://www.baidu.com" key={ii} style={hProp}>
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${ii || 'QcWDkUhvYIVEcvtosxMF'}.png`}
                  alt="icon"
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({
                      initialHeight: null,
                    });
                  }}
                />
              </a>
            ))}
          </Carousel>

          <WhiteSpace />

        </WingBlank>

        <List renderHeader={() => 'Basic Style'} className="my-list">
          <Item extra="DGdg5454165" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
            产品代号
          </Item>
        </List>

        <WhiteSpace />
          <Tabs defaultActiveKey="3" animated={false} onChange={(key) => console.log('onChange', key)} onTabClick={(key) => console.log('onTabClick', key)}>
            <TabPane tab="基本信息" key="1">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                <div>基本信息1</div> <div>基本信息2</div><div>基本信息3</div>
              </div>
            </TabPane>
            <TabPane tab="详情" key="2">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                 <div>详情1</div> <div>详情2</div><div>详情3</div>
              </div>
            </TabPane>
            <TabPane tab="评论" key="3">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                 <div>评论</div> <div>评论</div><div>评论</div>
              </div>
            </TabPane>
          </Tabs>
        <WhiteSpace />

        {/* 下方tabs  */}
        <div style={{ position: 'fixed', bottom: '0px', width: '100%', display: 'flex'}}>
          <Fashare style={{ flex: '1' }}/>
          <Faheart style={{ flex: '1' }}/>
          <Button type="primary" inline size="small" style={{ flex: '1' }}>收藏</Button>
          <Button type="primary" inline size="small" style={{ flex: '1' }}>购买</Button>
        </div>
      </div>
    );
  }
}
