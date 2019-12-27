import React from 'react'
import { Row,Col } from 'antd'

import './index.less'
export default class Header extends React.Component{

    componentWillMount(){
        const username = "小学僧";
        this.setState({
            username
        })
    }
    render(){
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎，{this.state.username}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    首页>
                </Row>
            </div>
        );
    }
}