import Hero from './Hero';
import Navigation from './Navigation';
import Jurusan from './Jurusan';
import Tujuan1 from './../assets/Tujuan1.png'
import Tujuan2 from './../assets/Tujuan2.png'
import Tujuan3 from './../assets/Tujuan3.png'
import Stasiun from './Stasiun';
import Station1 from './../assets/Station1.png'
import Station2 from './../assets/Station2.png'
import Station3 from './../assets/Station3.png'
import Station4 from './../assets/Station4.png'
import Station5 from './../assets/Station5.jpg'
import Footer from './Footer';

const Main = () => {
    return (
        <div>
            <Navigation />
            <Hero />
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center my-5'>
                        <h1>Destinasi Wisata</h1>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-4'>
                        <Jurusan image={Tujuan1} judul="Jakarta" />
                    </div>
                    <div className='col-4'>
                        <Jurusan image={Tujuan2} judul="Yogyakarta" />
                    </div>
                    <div className='col-4'>
                        <Jurusan image={Tujuan3} judul="Semarang" />
                    </div>
                </div>
                <div className='row bg-dark'>
                    <div className='col-12 text-center my-5 bg-info'>
                        <h1>Pilihan Stasiun</h1>
                    </div>
                </div>
                <div className='row gap-3 mb-5'>
                    <div className='col-12'>
                        <Stasiun image={Station1} deskripsi="America" />
                    </div>
                    <div className='col-12'>
                        <Stasiun image={Station2} deskripsi="Tokyo" />
                    </div>
                    <div className='col-12'>
                        <Stasiun image={Station3} deskripsi="Turky" />
                    </div>
                    <div className='col-12'>
                        <Stasiun image={Station4} deskripsi="Korea" />
                    </div>
                    <div className='col-12'>
                        <Stasiun image={Station5} deskripsi="England" />
                    </div>
                </div>
            </div>
            <Footer footerbrand="Pondok Pesantren Qur'an dan IT Al-Mahir" copyright="Copyright All right reserved"/>
        </div>
    )
}

export default Main;