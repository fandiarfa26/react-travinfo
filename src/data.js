import AzzamImg from './assets/img/azzam.png';
import KoeImg from './assets/img/bintangkoe.png';
import DiengImg from './assets/img/dieng.png';
import LadjuImg from './assets/img/ladju.png';
import NahwaImg from './assets/img/nahwa.png';
import NeoImg from './assets/img/neo.png';
import QueenImg from './assets/img/queen.png';

import APVImg from './assets/img/car/apv.png';
import AvanzaImg from './assets/img/car/avanza.png';
import InnovaImg from './assets/img/car/innova.png';
import IsuzuImg from './assets/img/car/isuzuelf.png';
import LuxioImg from './assets/img/car/luxio.png';
import ML300Img from './assets/img/car/ml300.png';
import HiaceImg from './assets/img/car/hiace.png';

const data = {
    travel: [
        {
            id: 'travID1',
            name: 'Nahwa Travel',
            image: NahwaImg,
            address: 'Jl. Letjen Sutoyo V No.36, Lowokwaru',
            contact: '0822-2114-7774',
            website: 'https://nahwatravel.co.id/',
            schedules: [
                '03.00','05.00','07.00','09.00','11.00','13.00','15.00','17.00'
            ],
            have_cars: [
                'Avanza','Luxio','APV'
            ],
            have_destination: [
                {
                    id: 'destID1',
                    from: 'Malang',
                    to: 'Juanda',
                    price: 90000
                },
                {
                    id: 'destID2',
                    from: 'Malang',
                    to: 'Surabaya',
                    price: 110000
                },
                {
                    id: 'destID3',
                    from: 'Batu',
                    to: 'Juanda',
                    price: 110000
                },
                {
                    id: 'destID4',
                    from: 'Batu',
                    to: 'Surabaya',
                    price: 130000
                },
            ]
        },
        {
            id: 'travID2',
            name: 'Ladju Trans Travel',
            image: LadjuImg,
            address: 'Jl. Rajekwesi 8 Kawi Atas, Klojen',
            contact: '0812-3958-8546',
            website: 'http://www.ladjutrans.com/',
            schedules: [
                '17.00','18.00'
            ],
            have_cars: [
                'Isuzu Elf'
            ],
            have_destination: [
                {
                    id: 'destID5',
                    from: 'Malang',
                    to: 'Denpasar',
                    price: 200000
                },
            ]
        },
        {
            id: 'travID3',
            name: 'Bintang KOE Travel',
            image: KoeImg,
            address: 'Jl. Ikan Lumba-Lumba No.23, Tunjungsekar, Lowokwaru',
            contact: '0851-0313-0401',
            schedules: [
                '10.00','16.00'
            ],
            have_cars: [
                'Avanza','Luxio','APV'
            ],
            have_destination: [
                {
                    id: 'destID6',
                    from: 'Malang',
                    to: 'Ponorogo',
                    price: 85000
                },
            ]
        },
        {
            id: 'travID4',
            name: 'Neo Travel',
            image: NeoImg,
            address: 'Jl. Cengger Ayam Dalam III No.6, Lowokwaru',
            contact: '0851-0002-5050',
            website: 'http://travelblitar.com/',
            schedules: [
                '05.00','10.00','13.00','15.00','20.00'
            ],
            have_cars: [
                'Mitsubishi L300','Isuzu Elf','Toyota Hiace'
            ],
            have_destination: [
                {
                    id: 'destID7',
                    from: 'Malang',
                    to: 'Blitar',
                    price: 60000
                },
            ]
        },
        {
            id: 'travID5',
            name: 'Azzam Travel',
            image: AzzamImg,
            address: 'Jl. Ronggo Lawe No.kav.27, Kesatrian, Blimbing',
            contact: '0822-4545-6078',
            schedules: [
                '05.00','07.00','15.00','20.00'
            ],
            have_cars: [
                'Avanza','Luxio','APV','Innova','Isuzu Elf','Toyota Hiace'
            ],
            have_destination: [
                {
                    id: 'destID8',
                    from: 'Malang',
                    to: 'Magetan',
                    price: 100000
                },
                {
                    id: 'destID9',
                    from: 'Malang',
                    to: 'Madiun',
                    price: 90000
                },
                {
                    id: 'destID10',
                    from: 'Malang',
                    to: 'Nganjuk',
                    price: 80000
                },
            ]
        },
        {
            id: 'travID6',
            name: 'Dieng Travel',
            image: DiengImg,
            address: 'Jl. Jaksa Agung Suprapto No.60, 3, Rampal Celaket, Klojen',
            contact: '0811-3430-085',
            website: 'https://diengtravel.id/',
            schedules: [
                "03.00", "04.00", "05.00", "07.00", "08.00", "09.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "17.00", "19.00", "20.00",
            ],
            have_cars: [
                'Innova','Toyota Hiace'
            ],
            have_destination: [
                {
                    id: 'destID11',
                    from: 'Malang',
                    to: 'Surabaya',
                    price: 90000
                },
                {
                    id: 'destID12',
                    from: 'Malang',
                    to: 'Kediri',
                    price: 65000
                },
                {
                    id: 'destID13',
                    from: 'Malang',
                    to: 'Madiun',
                    price: 80000
                },
                {
                    id: 'destID14',
                    from: 'Malang',
                    to: 'Jogja',
                    price: 145000
                },
                {
                    id: 'destID15',
                    from: 'Malang',
                    to: 'Semarang',
                    price: 150000
                },
                {
                    id: 'destID16',
                    from: 'Malang',
                    to: 'Situbondo',
                    price: 105000
                },
                {
                    id: 'destID17',
                    from: 'Malang',
                    to: 'Madura',
                    price: 135000
                },
            ]
        },
        {
            id: 'travID7',
            name: 'Queen Travel',
            image: QueenImg,
            address: 'Jl. Ronggolawe kav 31, Rampal, Klojen',
            contact: '0812-3090-0050',
            website: 'https://www.queentravelmalang.co.id/',
            schedules: [
                "03.00", "07.00", "11.00", "15.00",
            ],
            have_cars: [
                'Innova'
            ],
            have_destination: [
                {
                    id: 'destID18',
                    from: 'Malang',
                    to: 'Juanda',
                    price: 100000
                },
                {
                    id: 'destID19',
                    from: 'Batu',
                    to: 'Juanda',
                    price: 130000
                },
                {
                    id: 'destID20',
                    from: 'Malang',
                    to: 'Surabaya',
                    price: 120000
                },
            ]
        },
    ],

    car: [
        {
            merk: 'APV',
            seat: 8,
            image: APVImg
        },
        {
            merk: 'Avanza',
            seat: 8,
            image: AvanzaImg
        },
        {
            merk: 'Innova',
            seat: 8,
            image: InnovaImg
        },
        {
            merk: 'Isuzu Elf',
            seat: 15,
            image: IsuzuImg
        },
        {
            merk: 'Luxio',
            seat: 8,
            image: LuxioImg
        },
        {
            merk: 'Mitsubishi L300',
            seat: 7,
            image: ML300Img
        },
        {
            merk: 'Toyota Hiace',
            seat: 16,
            image: HiaceImg
        },
    ]
}



export default data;