import * as React from 'react';
import {Link} from 'react-router';

class CluboEditorHeader extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <div>
                <ul className='nav nav-tabs'>
                    <li role='presentation' className='active'><Link to='/topics/create'>Edit</Link></li>
                    <li role='presentation'> <Link to='/topics/create/preview'>Preview</Link></li>
                </ul>
                {children}
            </div>
        );
    }
}

export default CluboEditorHeader;



