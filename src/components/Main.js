import React from 'react';
import {Link} from 'react-router-dom';

const Main = (props) => {
    return (
        <div>
            성수타운 전체 동입니다.
            <ul>
                <li><Link to="/product/1">101동</Link></li>
            </ul>
        </div>
    );
};

export default Main;