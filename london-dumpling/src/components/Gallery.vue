<template>
    <div class="bg-color">
        <div class=" pt-5 pb-5 text-center">
            <h2 class="pb-4" id="about">Gallery</h2>
            <swiper
                :modules="modules"
                :breakpoints="{ 
                    320:{ slidesPerView:1.5 }, 
                    600:{ slidesPerView:2.5 }, 
                    900:{ slidesPerView:3.5 },
                    1440:{ slidesPerView:4.5 },
                    2000:{ slidesPerView:5.5 }
                }"
                :space-between="20"
                
                :pagination="{ clickable: true }"
                :scrollbar="{ draggable: true }"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
                
                <swiper-slide>
                    <img src="../assets/gallery1.png">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/gallery2.png">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/gallery3.png">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/gallery4.png">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/gallery5.png">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/gallery6.png">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/gallery7.png">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/gallery8.png">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/gallery9.png">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/gallery10.png">
                </swiper-slide>
            </swiper>

        </div>
    </div>
</template>   

<script>
     // import Swiper core and required modules
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    // Import Swiper styles
    import 'swiper/css';
    //   import 'swiper/css/navigation';
    // import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';

    export default {
        components: {
        Swiper,
        SwiperSlide,
        },
        setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y],
        };
        },
    };
</script>

<style scope type="text/css">

    img {
        width: 100%;
        height: auto;
        margin-bottom: 25px;
    }

    .swiper-scrollbar {
        background-color: #C3C3C3;
    }

    .swiper-scrollbar-drag {
        background-color: #000;
    }

</style>