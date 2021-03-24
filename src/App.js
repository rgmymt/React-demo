import React from 'react';
import { Link } from 'react-router-dom'
import './App.sass';
import * as Icon from "@ant-design/icons";
import {Menu} from "antd";
const { SubMenu } = Menu;

const router = [
  {
    path: '/home',
    name: '首页',
    icon: 'HomeOutlined'
  },
  {
    path: '/example',
    name: '示例',
    icon: 'FileTextOutlined'
  },
  {
    path: '/subMenuEp',
    name: '子级示例',
    icon: 'OrderedListOutlined',
    children: [
      {
        path: '/sub1',
        name: '子级1',
        icon: 'CopyOutlined'
      },
      {
        path: '/sub2',
        name: '子级2',
        icon: 'CopyOutlined'
      }
    ]
  }
]

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }

  // toggleCollapsed = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   });
  // };

  render (){
    return (
      <div className="App">
        <div className="header">
          <div className="title">
            XXXX系统
          </div>
          <Icon.PoweroffOutlined/>
        </div>
        <div className="content">
          <Menu
            defaultSelectedKeys={['/home']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            {router.map((item,index)=>{
              if(item.children){
                return(
                    <SubMenu key={item.path} icon={React.createElement(Icon[item.icon])} title={item.name}>
                      {item.children.map(subItem=>{
                        return(
                          <Menu.Item key={subItem.path} icon={React.createElement(Icon[subItem.icon])}>
                            <Link to={subItem.path}>
                              {subItem.name}
                            </Link>
                          </Menu.Item>
                        )
                      })}
                    </SubMenu>
                  )
              }else {
                return(
                  <Menu.Item key={item.path} icon={React.createElement(Icon[item.icon])}>
                    <Link to={item.path}>
                      {item.name}
                    </Link>
                  </Menu.Item>
                )
              }
            })}
          </Menu>
          <div className="subPage">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
