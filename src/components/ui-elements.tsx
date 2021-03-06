import React from 'react'
import './styles.css';

export const View: React.FC = (props) => (
    <div className="full-height ion-padding">
        {props.children}
    </div>
)

export const Inner: React.FC = (props) => (
    <div className="full-width">
        {props.children}
    </div>
)

export const MenuInner: React.FC = (props) => (
    <div className="menu-wrapper">
        {props.children}
    </div>
)