import React, { Component } from 'react';
import Helpdesk from './dashboard/Helpdesk';
import Tech from './dashboard/Tech';
import { Row , Container as ContainerBoot, Col, Jumbotron } from 'react-bootstrap';

class Dashboard extends Component {
    render () {
        return (
            <div>
                <ContainerBoot>
                    <Row className="show-grid">
                        <Col md={3}>
                            <Jumbotron style={{padding: 10}} className="text-center">
                                {/*Displaying logged in user's image*/}
                                <img src={this.props.user.photoURL} alt="profile" className="img-responsive img-circle" style={{padding:20}} />
                                <h4 className="text-uppercase">Hello</h4>
                                <h3>{this.props.user.displayName}</h3>
                            </Jumbotron>
                        </Col>
                        <Col md={9}>
                            {/*Routing user based on its type*/}
                            {this.props.type === 'helpdesk' ? (
                                   /*If user type is helpdesk opening Help Desk component*/
                                    <Helpdesk />
                                )
                                : this.props.type === 'tech' ? (
                                    <Tech user={this.props.user} />
                                )
                                :null}
                        </Col>
                    </Row>
                </ContainerBoot>
            </div>
        )
    }
}

export default Dashboard;