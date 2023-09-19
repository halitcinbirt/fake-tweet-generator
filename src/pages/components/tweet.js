import React from 'react';
import { useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const Tweet = ({formData, avatarImage}) => {

    const tweetCardRef = useRef(null);

    const handleExport = async () => {
        try {
            const canvas = await html2canvas(tweetCardRef.current);
            canvas.toBlob((blob) => {
                saveAs(blob, 'fake-tweet.png');
            });
        } catch (error) {
            console.error('Export Error:', error);
        }
    };

    const avatar = avatarImage;
    const userName = formData.username;
    const name = formData.name;
    const like = formData.like;
    const thread = formData.thread;
    const stats = formData.stats;
    const retweet = formData.retweet;
    const message = formData.message;
    const hours = formData.hours;
    const device = formData.device;
    const date = formData.date;


    return (
        <div>
            <div id={'tweetCard'} className={'tweet-card'} ref={tweetCardRef}>
                <div className={'tweet-header'}>
                    <div className={'person'}>
                        <div className={'avatar'}>
                            <img src={avatar} className={'img-fluid'} />
                        </div>
                        <div className={'text'}>
                            <strong>{name}</strong>
                            <span>@{userName}</span>
                        </div>
                    </div>
                </div>
                <div className={'tweet-body'}>
                    {message}
                </div>
                <div className={'tweet-device'}>
                    <div className={'data'}>
                        <div className={'hours'}>{hours}</div>
                        <div>·</div>
                        <div className={'date'}>{date}</div>
                        <div>·</div>
                    </div>
                    <div className={'device'}>Twitter for {device}</div>
                </div>
                <div className={'tweet-stats'}>
                    <div className={'item'}>
                        <div className={'icon'}>
                            <img src={'stats.svg'} />
                        </div>
                        <div className={'number'}>
                            {stats}
                        </div>
                    </div>
                    <div className={'item'}>
                        <div className={'icon'}>
                            <img src={'thread.svg'} />
                        </div>
                        <div className={'number'}>
                            {thread}
                        </div>
                    </div>
                    <div className={'item'}>
                        <div className={'icon'}>
                            <img src={'retweet.svg'} />
                        </div>
                        <div className={'number'}>
                            {retweet}
                        </div>
                    </div>
                    <div className={'item'}>
                        <div className={'icon'}>
                            <img src={'like.svg'} />
                        </div>
                        <div className={'number'}>
                            {like}
                        </div>
                    </div>
                    <div className={'item'}>
                        <div className={'icon'}>
                            <img src={'share.svg'} />
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleExport} className={'btn btn-primary mt-3'}>Export Image</button>
        </div>
    );
};

export default Tweet;
