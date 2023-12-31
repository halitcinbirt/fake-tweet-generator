import React from 'react';

const Form = ({handleChange}) => {
    return (
        <div className={'mt-3'}>
            <div className={'form-element'}>
                <form className={'row'}>
                    <div className={'form-group mb-3 col-6'}>
                        <label htmlFor={'username'} className={'d-block mb-2'}>Username</label>
                        <input type={'text'} id={'username'} name={'username'} onChange={handleChange} className={'form-control'} />
                    </div>
                    <div className={'form-group mb-3 col-6'}>
                        <label htmlFor={'name'} className={'d-block mb-2'}>Name</label>
                        <input type={'text'} id={'name'} name={'name'} onChange={handleChange} className={'form-control'} />
                    </div>
                    <div className={'form-group mb-3 col-6'}>
                        <label htmlFor={'stats'} className={'d-block mb-2'}>Stats</label>
                        <input type={'text'} id={'stats'} name={'stats'} onChange={handleChange} className={'form-control'} />
                    </div>
                    <div className={'form-group mb-3 col-6'}>
                        <label htmlFor={'thread'} className={'d-block mb-2'}>Thread</label>
                        <input type={'text'} id={'thread'} name={'thread'} onChange={handleChange} className={'form-control'} />
                    </div>
                    <div className={'form-group mb-3 col-6'}>
                        <label htmlFor={'retweet'} className={'d-block mb-2'}>Retweet</label>
                        <input type={'text'} id={'retweet'} name={'retweet'} onChange={handleChange} className={'form-control'} />
                    </div>
                    <div className={'form-group mb-3 col-6'}>
                        <label htmlFor={'like'} className={'d-block mb-2'}>Like</label>
                        <input type={'text'} id={'like'} name={'like'} onChange={handleChange} className={'form-control'} />
                    </div>
                    <div className={'form-group mb-3 col-12'}>
                        <label htmlFor={'message'} className={'d-block mb-2'}>Message</label>
                        <textarea id={'message'} name={'message'} onChange={handleChange} className={'form-control'}></textarea>
                    </div>
                    <div className={'form-group mb-3 col-6'}>
                        <label htmlFor={'hours'} className={'d-block mb-2'}>Hours</label>
                        <input type={'text'} id={'hours'} name={'hours'} onChange={handleChange} className={'form-control'} />
                    </div>
                    <div className={'form-group mb-3 col-6'}>
                        <label htmlFor={'date'} className={'d-block mb-2'}>Date</label>
                        <input type={'text'} id={'date'} name={'date'} onChange={handleChange} className={'form-control'} />
                    </div>
                    <div className={'form-group mb-3 col-12'}>
                        <label htmlFor={'device'} className={'d-block mb-2'}>Device</label>
                        <input type={'text'} id={'device'} name={'device'}  onChange={handleChange} className={'form-control'} />
                    </div>
                    <div className={'form-group mb-3 col-12'}>
                        <label htmlFor={'avatar'} className={'d-block mb-2'}>Avatar</label>
                        <input type={'file'} id={'avatar'} name={'avatar'}  onChange={handleChange} className={'form-control'} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
