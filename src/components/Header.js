import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { IconButton } from '@material-ui/core'

const Header = ({backButton}) => {
    const history = useHistory()

    return (
        <div className="header">
            {
                backButton?(
                <IconButton onClick={()=> history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header__icon"/>
                </IconButton>
                ):(
                <IconButton >
                    <PersonIcon fontSize="large" className="header__icon"/>
                </IconButton>
                   
                )
            }
            
            <Link to="/">
                <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" alt="header"/>
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon fontSize="large" className="header__icon"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
