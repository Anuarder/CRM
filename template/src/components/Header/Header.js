import React from 'react'
import './Header.css'

// Components
import Navigation from '../Navigation/Navigation'

export default class Header extends React.Component{    
    render(){
        return (
            <div className="header-page">
                <Navigation></Navigation>
            </div>
        )
    }
}