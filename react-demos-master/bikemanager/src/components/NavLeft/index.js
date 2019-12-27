import React from 'react'
import MenuConfig from './../../config/menuConfig'
import { Menu, Icon } from 'antd'
import './index.less'
const { SubMenu } = Menu


export default class NavLeft extends React.Component{

    //DOM渲染前加载菜单
    componentWillMount(){
        const menuTree = this.renderMenu(MenuConfig);
        this.setState({
            menuTree
        });
    }

    //根据权限配置数组递归渲染出Ant菜单
    renderMenu = (menuData)=>{
        return menuData.map((item)=>{
            if(item.children){
                return (
                    <SubMenu key={item.key} 
                            title={
                                <span>
                                <Icon type="mail" />
                            <span>{item.title}</span>
                                </span>
                            }>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.key} >{item.title}</Menu.Item>
            )
        })
    }

    render(){
        return (
            <div>
               <div className="logo">
                    <img src="/assets/logo-ant.svg"></img>
                    <h1>管理系统</h1>
               </div>
               <Menu theme="dark">
                    {this.state.menuTree}
               </Menu>
            </div>
        );
    }
}