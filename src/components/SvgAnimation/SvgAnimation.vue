<template>
    <div>
        <div class="container">
            <svg width="500" height="200" viewBox="0 0 500 200">
                <!-- transform="matrix(2 1 -1 2 50 0)" -->
                <rect 
                    class="rect"
                    x="5" 
                    y="5" 
                    width="100" 
                    height="50" 
                    fill="none" 
                    stroke="blue"
                    stroke-width="5"
                    >
               </rect>
            </svg>
        </div>
        <div class="container">
            <svg width="100" height="100" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="180" stroke-width="20" stroke="#d1d3d7" fill="transparent"></circle>
                <circle class="circle" cx="200" cy="200" r="180" 
                    stroke-width="20" stroke="#00a5e0" fill="transparent"
                    transform="matrix(0 -1 1 0 0 400)"></circle>
            </svg>
        </div>
        <div class="contianer">
            <svg viewBox="0 0 1024 1024" width="100" height="100">
                <path class="logo" d="M667.786667 117.333333C832.864 117.333333 938.666667 249.706667 938.666667 427.861333c0 138.250667-125.098667 290.506667-371.573334 461.589334a96.768 96.768 0 0 1-110.186666 0C210.432 718.368 85.333333 566.112 85.333333 427.861333 85.333333 249.706667 191.136 117.333333 356.213333 117.333333c59.616 0 100.053333 20.832 155.786667 68.096C567.744 138.176 608.170667 117.333333 667.786667 117.333333z m0 63.146667c-41.44 0-70.261333 15.189333-116.96 55.04-2.165333 1.845333-14.4 12.373333-17.941334 15.381333a32.32 32.32 0 0 1-41.770666 0c-3.541333-3.018667-15.776-13.536-17.941334-15.381333-46.698667-39.850667-75.52-55.04-116.96-55.04C230.186667 180.48 149.333333 281.258667 149.333333 426.698667 149.333333 537.6 262.858667 675.242667 493.632 834.826667a32.352 32.352 0 0 0 36.736 0C761.141333 675.253333 874.666667 537.6 874.666667 426.698667c0-145.44-80.853333-246.218667-206.88-246.218667z" p-id="2699"></path>
            </svg>
        </div>
        <div class="container">
            <svg class="line-container" viewBox="0 0 400 400" width="400" height="400">
                <line class="line" x1="0" y1="10" x2="400" y2="10" fill="none" stroke-width="10" stroke="red"></line>
            </svg>
        </div>
        <div class="container">
            <svg width="200" height="200">
                <rect x="0" y="0" fill="red" width="100" height="50">
                    <set attributeName="x" sttributeType="XML" to="10" begin="1s"></set>
                    <set attributeName="x" sttributeType="XML" to="20" begin="2s"></set>
                    <set attributeName="fill" sttributeType="XML" to="blue" begin="3s"></set>
                </rect>
            </svg>
            <svg width="200" height="200">
                <circle cx="0" cy="0" r="30" fill="blue" stroke="black" stroke-width="1">
                    <!-- <animate attributeName="cx" attributeType="XML" from="0" to="100" dur="1s" repeatCount="2" fill="freeze"></animate>
                    <animate attributeName="cy" attributeType="XML" from="0" to="50" dur="1s" repeatCount="2" fill="freeze"></animate>
                    <animate attributeName="fill" attributeType="XML" from="blue" to="red" dur="1s" repeatCount="2" fill="freeze"></animate> -->
                    <animateTransform attributeName="transform" attributeType="XML" begin="0" dur="3s" type="scale" from="1" to="2" repeatCount="2"></animateTransform>
                </circle>
            </svg>
            <svg width="200" height="200">
                <rect x="0" y="0" fill="red" width="10" height="10">
                    <animateMotion 
                        path="M10 10 L110 10 L110 110 L10 110 Z"
                        dur="5s"
                        rotate="auto"
                        fill="freeze"
                        repeatCount="2"
                    />
                </rect>
                <path d="M10 10 L110 10 L110 110 L10 110 Z" fill="none" stroke="green"></path>
            </svg>
        </div>
        <div class="container">
            <svg width="400" height="400">
                <polygon points="30 30 70 30 90 70 10 70" fill="#fcc" stroke="black">
                  <animate attributeName="points" attributeType="XML" to="50 30 70 50 50 90 30 50" dur="5s" fill="freeze" repeatCount="1" />
                </polygon>
            </svg>
        </div>
        <div class="container bg-grey">
            <svg width="400" height="400">
                <defs>
                    <mask id="test-mask">
                        <rect x="5" y="5" width="390" height="200" fill="#fff" opacity=".5"></rect>
                        <circle r="50" cx="150" cy="150"></circle>
                    </mask>
                    <linearGradient id="test-linear-gradient">
                        <stop offset="0%" stop-color="red" stop-opacity="1"></stop>
                        <stop offset="50%" stop-color="green"></stop>
                        <stop offset="100%" stop-color="blue" stop-opacity="0.5"></stop>
                    </linearGradient>
                    <radialGradient 
                        id="radial-gradient" 
                        cx="50%"
                        cy="50%"
                        fx="50%"
                        fy="50%"
                        r="50%">
                        <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
                        <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
                    </radialGradient>
                </defs>
                <!-- <rect x="5" y="5" width="390" height="390" fill="url(#radial-gradient)"></rect> -->
                <circle cx="200" cy="200" r="200" fill="url(#radial-gradient)"></circle>
                <!-- <rect x="5" y="5" width="390" height="390" fill="blue"
                    mask="url(#test-mask)">
                </rect> -->
            </svg>
        </div>
    </div>
</template>
<script>
    import {onMounted} from 'vue'
    export default{
        name:'SvgAnimation',
        setup(){
            onMounted(()=>{
                const logo = document.getElementsByClassName('logo')[0]
                console.log(logo.getTotalLength())
            })
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        svg {
            border: 1px solid #000;
        }
    }
    .rect {
        stroke-dasharray: 10;
    }
    .circle {
        animation: circle 5s linear infinite;
    }
    @keyframes circle {
        from {
            stroke-dasharray:0 1131;
        }
        to {
            stroke-dasharray:1131 0;
        }
    }
    .logo {
        fill:none;
        stroke:#333;
        stroke-width:5;
        animation:logo 5s linear 1 forwards;
    }
    
    @keyframes logo {
        0% {
            fill:white;
            stroke-dasharray: 4837;
            stroke-dashoffset: 4837;
        }
        50% {
            fill:white;
            stroke-dasharray: 4837;
            stroke-dashoffset: 0;
        }
        75% {
            fill:red;
            stroke:white;
        }
        100% {
            fill:blue;
            stroke:white;
        }
    }
    .line {
        stroke-dasharray: 400;
        stroke-dashoffset:400;
        transition: stroke-dashoffset .5s ease-out;
    }
    .line-container{
        &:hover {
            .line {
                stroke-dashoffset:0;
            }
        }
    }
    .bg-grey{
        background: #333;
    }
</style>