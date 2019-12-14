import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom'
import Photo from './Photo';
import NoReults from './NoResults';

class Gallery extends PureComponent {
    componentDidMount = () => {
        this.props.history.listen(location => this.props.search(location.pathname.replace(/[^\w\s]/gi, '').replace("search", '')));
        this.props.search(this.props.text);
}

render() {
    const results = this.props.data;
    let gallery;
    if(results.length) {
        gallery = results.map(photo =>
            <Photo key={photo.id} url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`} pathId={photo.id}/>    
        );
    } else {
        gallery = <NoResults/>
    }

    return (
        <ul className="photo-list">
            {this.props.loading ? <h3>Loading image gallery...</h3> : gallery}

        </ul>
    );
}

}//end 

export default withRouter(Gallery);