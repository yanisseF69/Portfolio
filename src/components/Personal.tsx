import personal from '../data/personal.json'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const Personal = () => (
    <div className="container mt-5 px-1" style={{textAlign: 'center'}}>
        <h1>Personal</h1>
        <br></br><br></br>
        <div className="container row align-items-center">
    
            <div className="col-md-6">
            {personal.desc.map((item) => (
                <h6 className='mb-4'>{item}</h6>
            ))}
            </div>

            <div className="col-md-5 text-center">
            
            <Swiper
                pagination={{
                dynamicBullets: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {personal.images.map((image, item) => (
                    <SwiperSlide
                        key={item}
                        style={{
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: "center",
                            height: "500px"
                        }}
                    >
                        <div>
                            <img
                                src={"images/personal/" + image.link}
                                alt={"Image " + item}
                                className="img-fluid rounded shadow"
                                style={{ maxWidth: "70%", marginBottom: "1rem"}}
                            />
                            <p>{image.legend}</p>
                            <br></br>
                        </div>
                        
                    </SwiperSlide>
                ))}
            </Swiper>
            
            </div>

        </div>
    </div>
)

export default Personal;
