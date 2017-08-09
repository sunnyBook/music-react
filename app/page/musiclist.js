import React from 'react';
import MusicListItem from '../components/musiclistitem.js';
import { Link } from "react-router"

let MusicList = React.createClass({
    render() {
        let listEle = null;
        listEle = this.props.musicList.map((item) => {
            return <MusicListItem
                focus={item === this.props.currentMusicItem}
                key={item.id}
                musicItem={item}
            >
                {item.title}
            </MusicListItem>
        })

        return (
            <div>
                <ul>
                    {listEle}
                </ul>
                <Link
                    className="row"
                    to="/"
                    style={{
                        color:'#3385ff',
                        margin: '20px',
                    }}
                >
                    返回上一級
                </Link>
            </div>
        )
    }
});

export default MusicList;