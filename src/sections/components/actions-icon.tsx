import React from 'react';
import { TopNavigationAction } from '@ui-kitten/components';
import { BackIcon, EditIcon, MenuIcon, FacebookIcon, LookIcon } from './iconskt';

export const BackAction = (props) => (
    <TopNavigationAction {...props} icon={BackIcon}/>
);

export const EditAction = (props) => (
    <TopNavigationAction {...props} icon={EditIcon}/>
);

export const MenuAction = (props) => (
    <TopNavigationAction {...props} icon={MenuIcon}/>
);

export const FacebookAction = (props) => (
    <TopNavigationAction {...props} icon={FacebookIcon}/>
);

export const LookAction = (props) => (
    <TopNavigationAction {...props} icon={LookIcon}/>
);


