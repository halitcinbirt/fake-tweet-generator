import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/form'
import Tweet from './components/tweet'
import {useState} from "react";

export default function Home() {
    const [avatarImage, setAvatarImage] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        stats: '',
        thread: '',
        retweet: '',
        like: '',
        message: '',
        date: '',
        device: '',
        hours: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const selectedFile = e.target.files ? e.target.files[0] : null;
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const fileDataURL = event.target.result;
                setAvatarImage(fileDataURL);
            };
            reader.readAsDataURL(selectedFile);
        }else{
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };
    return (
        <>
            <Head>
                <title>Fake Tweet Generator</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className={'container'}>
                    <div className={'row align-items-center justify-content-between'}>
                        <div className={'col-lg-3 col-md-6 col-12'}>
                            <Form formData={formData} handleChange={handleChange} />
                        </div>
                        <div className={'col-lg-8 col-md-7 col-12'}>
                            <Tweet formData={formData} avatarImage={avatarImage} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
