import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Sungsoo Town</h1>
            <ul>
                <li><Link to='/'>전체보기</Link></li>
                <li><Link to='/mart'>성수마트</Link></li>
                <li><Link to='/admin'>관리실</Link></li>
            </ul>
        </div>
    );
};

export default Header;