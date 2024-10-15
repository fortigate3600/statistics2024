<!DOCTYPE html>
<html lang="it">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <!-- Swiper CSS -->
        <link rel="stylesheet" href="test_code/style/swiper-bundle.min.css">
        <!-- Swiper JS -->
        <script src="test_code/script/swiper-bundle.min.js"></script>

        <title>Ajojo & Zafferano</title>
        <link rel="icon" href="logo.png" type="image/x-icon">
        <style>

            *{
                font-family: "Poppins", sans-serif;
            }
            body{
                background-color: #f8fadd;
                min-height: 100vh;
                min-width: 582px;
            }
            .material-symbols-outlined {
                font-variation-settings:
                'FILL' 0,
                'wght' 400,
                'GRAD' 0,
                'opsz' 24
            }
            .navbgr{
                background-color: #f8fadd;
                height: 5rem;
                width: 100%;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 10;
            }
            .nav{
                background-color: #333;
                height: 4.5rem;
                width: 98%;
                position: relative;
                top: 1rem;
                left: 1%;
                text-align: left;
                display: flex;
                align-items: center;
                border-radius: 10px;
                gap: 1.5rem;
            }
            .nav a{
                font-weight: 500;
                font-style: normal;
                font-size: 30px;
                position: relative;
                border-radius: 10px;
                color: white;
                text-decoration: none;
                transition: all 0.2s;
            }
            .nav a:not(.MainLogo){
                padding:0.8rem 0;
            }
            .nav a:not(.MainLogo):hover{
                text-decoration: underline; 
                scale: 1.1;
                transition: all 0.5s;
            }
            .nav a:is(.MainLogo):hover{
                margin-right: 1.5rem;
                transition: all 0.5s;
                .logo_img{
                    scale: 0.8;
                    transition: all 0.5s;
                }
                .logo_title {
                    left:0rem;
                    color: white;
                    transition: all 0.5s;
                }
                .logo_title p{
                    color: white;
                    transition: all 0.2s;
                }
            }
            .ProfiloLink{
                margin-left: auto;
                margin-right: 1.5rem;
            }
            .MainLogo{
                margin-left: 1rem;
                margin-right: -6.5rem;
                display: flex;
                gap:0.2rem;
                align-items: center;
                justify-content: center;
                transition: all 0.5s;
            }
            .logo_img{
                z-index: 2;
                width: 70px;
                height: 70px;
                transition: all 0.5s;
            }
            .logo_title{
                position: relative;
                left:-5rem;
                transition: all 0.5s;
            }
            .logo_title p{
                display: flex;
                flex-direction: column;
                gap: 0rem;
                margin:0;
                margin-right: 1rem;   
                padding:0;
                top:0;
                bottom:0;
                font-size: 20px;
                position: relative;
                color:#333;
                transition: all 0.2s;
            }
            .logo_title .ajojo_{
                top:0.3rem
            }
            .logo_title .zafferano_{
                top: -0.3rem;
                left: 1.5rem;
            }
            .consigliati-div{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .antipasti-div{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .primi-div{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .title-section{
                text-align: left;
                margin-left: 1rem;
            }

            /* SLIDER */
            .slide-container{
                max-width: 1400px;
                width: 100%;
                padding: 30px 0;
                padding-top:0;
                margin-bottom:0;
            }
            .slide-content-style{
                padding: 20px 14px;
                margin: 0 40px;  
                overflow: hidden;   
                margin-bottom:0;
            }
            .slide-content-style_mini{
                padding: 20px 14px;
                margin: 0 10px;  
                overflow: hidden;   
            }
            .card{
                width: 420px;
                height: 365px;
                border-radius: 5%;
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
                transition: all 0.2s;
            }
            .card_mini{
                width: 250px;
                height: 215px;
                border-radius: 5%;
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
                transition: all 0.2s;
            }
            .card-border{
                width: 420px;
                height: 365px;
                border-radius: 5%;
                background-color: white;
                border: 4px solid #333;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .card-border_mini{
                width: 250px;
                height: 215px;
                border-radius: 5%;
                background-color: white;
                border: 3px solid #333;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .card:hover,
            .card_mini:hover{
                scale: 1.03;
                transition: all 0.2s;
            }
            .image-content{
                margin-top: 2.5%;
                margin-left: 2.5%;
            }
            .card-image{
                position: relative;
                width: 95%;
                height: auto;
                border-radius: 5%;
            }
            .card-image_mini{
                position: relative;
                width: 95%;
                height: auto;
                border-radius: 5%;
            }
            .card-image .card-img{
                height: 100%;
                width: 100%;
                object-fit: cover;
                border-radius: 5%;
                border: 4px solid #333;
            }
            .card-image_mini .card-img_mini{
                height: 100%;
                width: 100%;
                object-fit: cover;
                border-radius: 5%;
                border: 3px solid #333;
            }
            .card-content{
                width: 94%;
                height: 4rem;
                position: relative;
                bottom:10px;
                text-align: left;
                display: flex;
                align-items: center;
                gap: 1.5rem;
            }
            .card-content_mini{
                width: 94%;
                height: 2rem;
                position: relative;
                bottom:6px;
                text-align: left;
                display: flex;
                align-items: center;
                gap: 0.7rem;
            }
            .name{
                font-size: 22px;
                font-weight: 600;
                color: black;
            }
            .name_mini{
                font-size: 15px;
                font-weight: 600;
                color: black;
            }
            .timer{
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 0.2rem;
            }
            .timer_mini{
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 0.2rem;
                scale:0.8;
            }
            .flag{
                position: relative;
                margin-left: auto;
            }
            .swiper-BtnDiv{
                margin-top:-12rem;
                text-align: left;
                display: flex;
                align-items: center;
            }
            .swiper-navBtn{
                z-index: 5;
                color: #333;
                transition: all 0.3s ease;
                position: relative;
            }
            .swiper-navBtn:hover{
                color: #222;
                scale: 1.1;
            }
            .swiper-button-next{
                margin-left:auto;
            }
            .swiper-button-prev{
                margin-left:0;
            }
            .swiper-pagination{
                z-index: 5;
                position: relative;
                margin-top:12rem;
            }
            .swiper-pagination-bullet{
                background-color:#333;
                opacity: 0.5;                
            }
            .swiper-pagination-bullet-active{
                background-color:#333;
                opacity: 1;                
            }

            /* FORM LOGIN / REGISTRAZIONE */
            .modal {
                display: none;
                position: fixed;
                z-index: 11;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                background-color: rgba(0, 0, 0, 0.8);
            }
            .form {
                margin: 15% auto;
                margin-top: 0%;
                top: 15%;
                padding: 20px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                max-width: 400px;
                padding: 20px;
                border-radius: 20px;
                position: relative;
                background-color: #e8e8e8;
                color: #fff;
                border: 5px solid #111;
            }
            .title {
                font-size: 28px;
                font-weight: 600;
                letter-spacing: -1px;
                position: relative;
                display: flex;
                align-items: center;
                padding-left: 30px;
                color: #ed6700;
            }
            .title::before {
                width: 18px;
                height: 18px;
            }
            .title::after {
                width: 18px;
                height: 18px;
                animation: pulse 1s linear infinite;
            }
            .title::before,
            .title::after {
                position: absolute;
                content: "";
                height: 16px;
                width: 16px;
                border-radius: 50%;
                left: 0px;
                background-color: #ed6700;
            }
            .message, 
            .signin {
                font-size: 14.5px;
                color: #333;
            }
            .signin {
                text-align: center;
            }
            .signin a {
                color: #ed6700;
                text-decoration: none;
            }
            .signin a:hover {
                text-decoration: underline;
            }
            .flex {
                display: flex;
                width: 97.5%;
                gap: 20px;
            }
            .form label {
                position: relative;
            }
            .form label .input {
                background-color: #fff;
                color: #333;
                width: 95%;
                padding: 20px 05px 05px 10px;
                outline: 0;
                border: 1px solid rgba(105, 105, 105, 0.397);
                border-radius: 10px;
            }
            .form label .input + span {
                color: #333;
                position: absolute;
                left: 10px;
                top: 0px;
                font-size: 0.9em;
                cursor: text;
                transition: 0.3s ease;
            }
            .form label .input:placeholder-shown + span {
                top: 12.5px;
                font-size: 0.9em;
            }
            .form label .input:focus + span,
            .form label .input:valid + span {
                color: #ed6700;
                top: 0px;
                font-size: 0.7em;
                font-weight: 600;
            }
            .input {
                font-size: medium;
            }
            .submit {
                border: none;
                outline: none;
                padding: 10px;
                border-radius: 10px;
                color: #fff;
                font-size: 16px;
                transform: .3s ease;
                background-color: #ed6700;
                transition: all 0.3s ease;
            }
            .submit:hover {
                background-color: #ed4f00;
                transition: all 0.3s ease;
            }
            @keyframes pulse {
                from {
                    transform: scale(0.9);
                    opacity: 1;
                }

                to {
                    transform: scale(1.8);
                    opacity: 0;
                }
            }

        </style>
    </head>
    <body>

    <?php session_start();?>    
        

        <div class="navbgr">
            <div class="nav">
                <a class="MainLogo" href="">
                    <img src="logo.png" class="logo_img">
                    <div class="logo_title">
                        <p class="ajojo_">Ajojo &</p>
                        <p class="zafferano_">Zafferano</p>
                    </div>
                </a>
                <a class="FrigoLink" href="frigo.php">Frigorifero</a>
                <a class="RicettarioLink" href="ricettario.php">Ricettario</a>
                <a class="ProfiloLink" id="profileBtn" href="profilo.php">Profilo</a>
                <a class="ProfiloLink" id="loginBtn" href="#">Accedi</a>
            </div>
        </div>

        <?php
        if(isset($_SESSION['user'])){
            echo "<script>document.getElementById('profileBtn').style.display = 'block';</script>";
            echo "<script>document.getElementById('loginBtn').style.display = 'none';</script>";
        } 
        else{
            echo "<script>document.getElementById('profileBtn').style.display = 'none';</script>";
            echo "<script>document.getElementById('loginBtn').style.display = 'block';</script>";
        }
        ?>




        <br><br><br>
        <h1 class="title-section">Piatti Consigliati</h1>
        <div class="consigliati-div">
            <div class="slide-container">
                <div class="slide-content slide-content-style">
                    <div class="card-wrapper swiper-wrapper">

                        <div class="card swiper-slide">
                            <div class="card-border">
                                <div class="image-content">
                                    <div class="card-image">
                                        <img src="immaginiricette/carbonara.jpg" alt="" class="card-img"  id="carbonara">
                                    </div>
                                </div>
                                <div class="card-content">
                                    <h2 class="name">Carbonara</h2>
                                    <div class="timer">
                                        <span class="material-symbols-outlined">
                                            timer
                                        </span>
                                        <p class="time">30'</p>
                                    </div>
                                    <div class="flag">
                                        <span class="material-symbols-outlined" style="display:none;" id="piccante">
                                            local_fire_department
                                        </span>
                                        <span class="material-symbols-outlined" style="display:none;" id="glutenfree">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-7.999 13.416A17.93 17.93 0 0 1 24 42c-9.941 0-18-8.059-18-18c0-4.738 1.83-9.048 4.823-12.263l3.97 3.97a1 1 0 0 0 1.414-1.414l-3.942-3.942A17.93 17.93 0 0 1 24 6c9.941 0 18 8.059 18 18c0 4.61-1.734 8.817-4.584 12.001l-8.545-8.544A5.73 5.73 0 0 0 31 23l-2.162.34A5.72 5.72 0 0 0 25 25.766v-2.923l1.162-.183A5.73 5.73 0 0 0 31 17l-2.162.34A5.72 5.72 0 0 0 25 19.766V18l.465-.465a5 5 0 0 0 0-7.07L24 9l-1.464 1.464a5 5 0 0 0 0 7.071L23 18v1.766a5.72 5.72 0 0 0-3.838-2.426L17 17a5.73 5.73 0 0 0 4.838 5.66l1.162.183v2.923a5.72 5.72 0 0 0-3.838-2.426L17 23a5.73 5.73 0 0 0 4.838 5.66l1.162.183v2.923a5.72 5.72 0 0 0-3.838-2.426L17 29a5.73 5.73 0 0 0 4.838 5.66l1.162.183V38h2v-3.547a1.78 1.78 0 0 0 1.162.207a5.73 5.73 0 0 0 4.15-2.935zm-7.907-7.907l-1.057-1.058a6 6 0 0 1-.875.209L25 28.843v2.923a5.73 5.73 0 0 1 3.094-2.257" clip-rule="evenodd"/></svg>
                                        </span>
                                        <span class="material-symbols-outlined" style="display:none;" id="fit">
                                            exercise
                                        </span>
                                        <span class="material-symbols-outlined" style="display:none;" id="stellato">
                                            hotel_class
                                        </span>
                                        <span class="material-symbols-outlined" style="display:none;" id="vegan">
                                            eco
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card swiper-slide">
                            <div class="card-border">
                                <div class="image-content">
                                    <div class="card-image">
                                        <img src="immaginiricette/ajojo_e_peperoncino.jpg" alt="" class="card-img" id="ajojo">
                                    </div>
                                </div>
                                <div class="card-content">
                                    <h2 class="name">Ajojo e Peperoncino</h2>
                                    <div class="timer">
                                        <span class="material-symbols-outlined">
                                            timer
                                        </span>
                                        <p class="time">30'</p>
                                    </div>
                                    <div class="flag">
                                        <span class="material-symbols-outlined" id="piccante">
                                            local_fire_department
                                        </span>
                                        <span class="material-symbols-outlined" style="display:none;" id="glutenfree">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-7.999 13.416A17.93 17.93 0 0 1 24 42c-9.941 0-18-8.059-18-18c0-4.738 1.83-9.048 4.823-12.263l3.97 3.97a1 1 0 0 0 1.414-1.414l-3.942-3.942A17.93 17.93 0 0 1 24 6c9.941 0 18 8.059 18 18c0 4.61-1.734 8.817-4.584 12.001l-8.545-8.544A5.73 5.73 0 0 0 31 23l-2.162.34A5.72 5.72 0 0 0 25 25.766v-2.923l1.162-.183A5.73 5.73 0 0 0 31 17l-2.162.34A5.72 5.72 0 0 0 25 19.766V18l.465-.465a5 5 0 0 0 0-7.07L24 9l-1.464 1.464a5 5 0 0 0 0 7.071L23 18v1.766a5.72 5.72 0 0 0-3.838-2.426L17 17a5.73 5.73 0 0 0 4.838 5.66l1.162.183v2.923a5.72 5.72 0 0 0-3.838-2.426L17 23a5.73 5.73 0 0 0 4.838 5.66l1.162.183v2.923a5.72 5.72 0 0 0-3.838-2.426L17 29a5.73 5.73 0 0 0 4.838 5.66l1.162.183V38h2v-3.547a1.78 1.78 0 0 0 1.162.207a5.73 5.73 0 0 0 4.15-2.935zm-7.907-7.907l-1.057-1.058a6 6 0 0 1-.875.209L25 28.843v2.923a5.73 5.73 0 0 1 3.094-2.257" clip-rule="evenodd"/></svg>
                                        </span>
                                        <span class="material-symbols-outlined" style="display:none;" id="fit">
                                            exercise
                                        </span>
                                        <span class="material-symbols-outlined" style="display:none;" id="stellato">
                                            hotel_class
                                        </span>
                                        <span class="material-symbols-outlined" id="vegan">
                                            eco
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card swiper-slide">
                            <div class="card-border">
                                <div class="image-content">
                                    <div class="card-image">
                                        <img src="immaginiricette/amatriciana.jpg" alt="" class="card-img" id="amatriciana">
                                    </div>
                                </div>
                                <div class="card-content">
                                    <h2 class="name">Amatriciana</h2>
                                    <div class="timer">
                                        <span class="material-symbols-outlined">
                                            timer
                                        </span>
                                        <p class="time">30'</p>
                                    </div>
                                    <div class="flag">
                                        <span class="material-symbols-outlined" style="display:none;" id="piccante">
                                            local_fire_department
                                        </span>
                                        <span class="material-symbols-outlined" style="display:none;" id="glutenfree">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-7.999 13.416A17.93 17.93 0 0 1 24 42c-9.941 0-18-8.059-18-18c0-4.738 1.83-9.048 4.823-12.263l3.97 3.97a1 1 0 0 0 1.414-1.414l-3.942-3.942A17.93 17.93 0 0 1 24 6c9.941 0 18 8.059 18 18c0 4.61-1.734 8.817-4.584 12.001l-8.545-8.544A5.73 5.73 0 0 0 31 23l-2.162.34A5.72 5.72 0 0 0 25 25.766v-2.923l1.162-.183A5.73 5.73 0 0 0 31 17l-2.162.34A5.72 5.72 0 0 0 25 19.766V18l.465-.465a5 5 0 0 0 0-7.07L24 9l-1.464 1.464a5 5 0 0 0 0 7.071L23 18v1.766a5.72 5.72 0 0 0-3.838-2.426L17 17a5.73 5.73 0 0 0 4.838 5.66l1.162.183v2.923a5.72 5.72 0 0 0-3.838-2.426L17 23a5.73 5.73 0 0 0 4.838 5.66l1.162.183v2.923a5.72 5.72 0 0 0-3.838-2.426L17 29a5.73 5.73 0 0 0 4.838 5.66l1.162.183V38h2v-3.547a1.78 1.78 0 0 0 1.162.207a5.73 5.73 0 0 0 4.15-2.935zm-7.907-7.907l-1.057-1.058a6 6 0 0 1-.875.209L25 28.843v2.923a5.73 5.73 0 0 1 3.094-2.257" clip-rule="evenodd"/></svg>
                                        </span>
                                        <span class="material-symbols-outlined" style="display:none;" id="fit">
                                            exercise
                                        </span>
                                        <span class="material-symbols-outlined" style="display:none;" id="stellato">
                                            hotel_class
                                        </span>
                                        <span class="material-symbols-outlined" style="display:none;" id="vegan">
                                            eco
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card swiper-slide">
                            <div class="card-border">
                                <div class="image-content">
                                    <div class="card-image">
                                        <img src="immaginiricette/puntarelle.jpg" alt="" class="card-img" id="puntarelle">
                                    </div>
                                </div>
                                <div class="card-content">
                                    <h2 class="name">Puntarelle</h2>
                                    <div class="timer">
                                        <span class="material-symbols-outlined">
                                            timer
                                        </span>
                                        <p class="time">30'</p>
                                    </div>
                                    <div class="flag">
                                        <span class="material-symbols-outlined" style="display:none;" id="piccante">
                                            local_fire_department
                                        </span>
                                        <span class="material-symbols-outlined" id="glutenfree">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-7.999 13.416A17.93 17.93 0 0 1 24 42c-9.941 0-18-8.059-18-18c0-4.738 1.83-9.048 4.823-12.263l3.97 3.97a1 1 0 0 0 1.414-1.414l-3.942-3.942A17.93 17.93 0 0 1 24 6c9.941 0 18 8.059 18 18c0 4.61-1.734 8.817-4.584 12.001l-8.545-8.544A5.73 5.73 0 0 0 31 23l-2.162.34A5.72 5.72 0 0 0 25 25.766v-2.923l1.162-.183A5.73 5.73 0 0 0 31 17l-2.162.34A5.72 5.72 0 0 0 25 19.766V18l.465-.465a5 5 0 0 0 0-7.07L24 9l-1.464 1.464a5 5 0 0 0 0 7.071L23 18v1.766a5.72 5.72 0 0 0-3.838-2.426L17 17a5.73 5.73 0 0 0 4.838 5.66l1.162.183v2.923a5.72 5.72 0 0 0-3.838-2.426L17 23a5.73 5.73 0 0 0 4.838 5.66l1.162.183v2.923a5.72 5.72 0 0 0-3.838-2.426L17 29a5.73 5.73 0 0 0 4.838 5.66l1.162.183V38h2v-3.547a1.78 1.78 0 0 0 1.162.207a5.73 5.73 0 0 0 4.15-2.935zm-7.907-7.907l-1.057-1.058a6 6 0 0 1-.875.209L25 28.843v2.923a5.73 5.73 0 0 1 3.094-2.257" clip-rule="evenodd"/></svg>
                                        </span>
                                        <span class="material-symbols-outlined" id="fit">
                                            exercise
                                        </span>
                                        <span class="material-symbols-outlined" style="display:none;" id="stellato">
                                            hotel_class
                                        </span>
                                        <span class="material-symbols-outlined" style="display:none;" id="vegan">
                                            eco
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="swiper-BtnDiv">
                    <div class="swiper-button-prev swiper-navBtn"></div>
                    <div class="swiper-button-next swiper-navBtn"></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>

        <br><br>

        <h1 class="title-section">Antipasti</h1>
        <div class="antipasti-div">
            <div class="slide-container">
                <div class="slide-content2 slide-content-style_mini">
                    <div class="card-wrapper swiper-wrapper">
                        
                        <div class="card_mini swiper-slide">
                            <div class="card-border_mini">
                                <div class="image-content">
                                    <div class="card-image_mini">
                                        <img src="immaginiricette/carbonara.jpg" alt="" class="card-img_mini"  id="carbonara">
                                    </div>
                                </div>
                                <div class="card-content_mini">
                                    <h2 class="name_mini">Carbonara</h2>
                                    <div class="timer_mini">
                                        <span class="material-symbols-outlined">
                                            timer
                                        </span>
                                        <p class="time">30'</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card_mini swiper-slide">
                            <div class="card-border_mini">
                                <div class="image-content">
                                    <div class="card-image_mini">
                                        <img src="immaginiricette/ajojo_e_peperoncino.jpg" alt="" class="card-img_mini" id="ajojo">
                                    </div>
                                </div>
                                <div class="card-content_mini">
                                    <h2 class="name_mini">Ajojo e Peperoncino</h2>
                                    <div class="timer_mini">
                                        <span class="material-symbols-outlined">
                                            timer
                                        </span>
                                        <p class="time">30'</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card_mini swiper-slide">
                            <div class="card-border_mini">
                                <div class="image-content">
                                    <div class="card-image_mini">
                                        <img src="immaginiricette/amatriciana.jpg" alt="" class="card-img_mini" id="amatriciana">
                                    </div>
                                </div>
                                <div class="card-content_mini">
                                    <h2 class="name_mini">Amatriciana</h2>
                                    <div class="timer_mini">
                                        <span class="material-symbols-outlined">
                                            timer
                                        </span>
                                        <p class="time">30'</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card_mini swiper-slide">
                            <div class="card-border_mini">
                                <div class="image-content">
                                    <div class="card-image_mini">
                                        <img src="immaginiricette/puntarelle.jpg" alt="" class="card-img_mini" id="puntarelle">
                                    </div>
                                </div>
                                <div class="card-content_mini">
                                    <h2 class="name_mini">Puntarelle</h2>
                                    <div class="timer_mini">
                                        <span class="material-symbols-outlined">
                                            timer
                                        </span>
                                        <p class="time">30'</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card_mini swiper-slide">
                            <div class="card-border_mini">
                                <div class="image-content">
                                    <div class="card-image_mini">
                                        <img src="immaginiricette/tiramisu.jpg" alt="" class="card-img_mini" id="tiramisu">
                                    </div>
                                </div>
                                <div class="card-content_mini">
                                    <h2 class="name_mini">tiramisu</h2>
                                    <div class="timer_mini">
                                        <span class="material-symbols-outlined">
                                            timer
                                        </span>
                                        <p class="time">30'</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card_mini swiper-slide">
                            <div class="card-border_mini">
                                <div class="image-content">
                                    <div class="card-image_mini">
                                        <img src="immaginiricette/puntarelle.jpg" alt="" class="card-img_mini" id="puntarelle">
                                    </div>
                                </div>
                                <div class="card-content_mini">
                                    <h2 class="name_mini">Puntarelle3</h2>
                                    <div class="timer_mini">
                                        <span class="material-symbols-outlined">
                                            timer
                                        </span>
                                        <p class="time">30'</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <br><br>
        
        <h1 class="title-section">Primi Piatti</h1>
        <div class="primi-div">
            <div class="slide-container">
                <div class="slide-content3 slide-content-style_mini">
                    <div class="card-wrapper swiper-wrapper">
                        
                        <div class="card_mini swiper-slide">
                            <div class="card-border_mini">
                                <div class="image-content">
                                    <div class="card-image_mini">
                                        <img src="immaginiricette/carbonara.jpg" alt="" class="card-img_mini"  id="carbonara">
                                    </div>
                                </div>
                                <div class="card-content_mini">
                                    <h2 class="name_mini">Carbonara</h2>
                                    <div class="timer_mini">
                                        <span class="material-symbols-outlined">
                                            timer
                                        </span>
                                        <p class="time">30'</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card_mini swiper-slide">
                            <div class="card-border_mini">
                                <div class="image-content">
                                    <div class="card-image_mini">
                                        <img src="immaginiricette/ajojo_e_peperoncino.jpg" alt="" class="card-img_mini" id="ajojo">
                                    </div>
                                </div>
                                <div class="card-content_mini">
                                    <h2 class="name_mini">Ajojo e Peperoncino</h2>
                                    <div class="timer_mini">
                                        <span class="material-symbols-outlined">
                                            timer
                                        </span>
                                        <p class="time">30'</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card_mini swiper-slide">
                            <div class="card-border_mini">
                                <div class="image-content">
                                    <div class="card-image_mini">
                                        <img src="immaginiricette/amatriciana.jpg" alt="" class="card-img_mini" id="amatriciana">
                                    </div>
                                </div>
                                <div class="card-content_mini">
                                    <h2 class="name_mini">Amatriciana</h2>
                                    <div class="timer_mini">
                                        <span class="material-symbols-outlined">
                                            timer
                                        </span>
                                        <p class="time">30'</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card_mini swiper-slide">
                            <div class="card-border_mini">
                                <div class="image-content">
                                    <div class="card-image_mini">
                                        <img src="immaginiricette/puntarelle.jpg" alt="" class="card-img_mini" id="puntarelle">
                                    </div>
                                </div>
                                <div class="card-content_mini">
                                    <h2 class="name_mini">Puntarelle</h2>
                                    <div class="timer_mini">
                                        <span class="material-symbols-outlined">
                                            timer
                                        </span>
                                        <p class="time">30'</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card_mini swiper-slide">
                            <div class="card-border_mini">
                                <div class="image-content">
                                    <div class="card-image_mini">
                                        <img src="immaginiricette/puntarelle.jpg" alt="" class="card-img_mini" id="puntarelle">
                                    </div>
                                </div>
                                <div class="card-content_mini">
                                    <h2 class="name_mini">Puntarelle2</h2>
                                    <div class="timer_mini">
                                        <span class="material-symbols-outlined">
                                            timer
                                        </span>
                                        <p class="time">30'</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card_mini swiper-slide">
                            <div class="card-border_mini">
                                <div class="image-content">
                                    <div class="card-image_mini">
                                        <img src="immaginiricette/puntarelle.jpg" alt="" class="card-img_mini" id="puntarelle">
                                    </div>
                                </div>
                                <div class="card-content_mini">
                                    <h2 class="name_mini">Puntarelle3</h2>
                                    <div class="timer_mini">
                                        <span class="material-symbols-outlined">
                                            timer
                                        </span>
                                        <p class="time">30'</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        

        <!--Modal ad apparizione dei tasti login e signin-->

        <!-- Modal di login -->
        <div id="loginModal" class="modal">
            <form class="form" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                <input type="hidden" name="tipo" value="login">
                <p class="title">Login </p>
                <p style="display:none;" id="erroreLogin"> credenziali errate </p>
                <label>
                    <input class="input" type="text" id="usernameLogin" name="usernameLogin" placeholder="" required="">
                    <span>Username</span>
                </label> 
                    
                <label>
                    <input class="input" type="password" id="passwordLogin" name="passwordLogin" placeholder="" required="">
                    <span>Password</span>
                </label>
                <button class="submit" value="Accedi">Accedi</button>
                <p class="signin">Non hai un account ? <a href="#" onclick="document.getElementById('registerModal').style.display='block';
                                                                            document.getElementById('loginModal').style.display='none';
                                                                            document.getElementById('erroreLogin').style.display = 'none'; document.getElementById('erroreSignin').style.display = 'none';">Registrati</a> </p>
            </form>
        </div>
        
                    
                    

        <!-- Modal di registrazione -->
        <div id="registerModal" class="modal">
            <form class="form" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                <input type="hidden" name="tipo" value="registrazione">
                <p class="title">Registrazione </p>
                <p style="display:none;" id="erroreSignin"> errore registrazione </p>
                <p class="message">Registrati ora per avere accesso al servizio completo </p>
                    <div class="flex">
                    <label>
                        <input class="input" type="text" id="nome"  name="nome" placeholder="" required="">
                        <span>Nome</span>
                    </label>
            
                    <label>
                        <input class="input" type="text" id="cognome"  name="cognome" placeholder="" required="">
                        <span>Cognome</span>
                    </label>
                </div>  
                        
                <label>
                    <input class="input" type="text" id="username"  name="username" placeholder="" required="">
                    <span>Username</span>
                </label> 
                    
                <label>
                    <input class="input" type="password" id="password"  name="password" placeholder="" required="">
                    <span>Password</span>
                </label>
                <button class="submit" value="Registrati">Registrati</button>
                <p class="signin">Hai già un account ? <a href="#" onclick="document.getElementById('loginModal').style.display='block'; document.getElementById('registerModal').style.display='none';document.getElementById('erroreSignin').style.display = 'none';">Login</a> </p>
            </form>
        </div>

        <script>
            // Funzioni php

            function inviaForm(event) {
                // form nascosta 
                var form = document.createElement("form");
                form.setAttribute("method", "post");
                form.setAttribute("action", "ricettario.php");

                // input nascosto con il nome della ricetta
                var input = document.createElement("input");
                input.setAttribute("type", "hidden");
                input.setAttribute("name", "ricetta");
                input.setAttribute("value", event.target.id);

                // Aggiunta input alla form e submit
                form.appendChild(input);
                document.body.appendChild(form);
                form.submit();
            }

            // Aggiungi un evento di click a tutte le immagini
            var CardsRicette = document.getElementsByClassName("card");
            for (var i = 0; i < CardsRicette.length; i++) {
                // salva in una variabile l'id della card cliccata
                CardsRicette[i].addEventListener("click", inviaForm);
            }

            // Funzione slider ricette
            var swiper_consigliati = new Swiper('.slide-content', {
                slidesPerView: 3,
                spaceBetween: 20,
                loop: true,
                centerSlides: 'true',
                fade: 'true',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    DynamicBullets: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    985: {
                        slidesPerView: 2,
                    },
                    1416: {
                        slidesPerView: 3,
                    },
                },
            });

            var swiper_antipasti = new Swiper('.slide-content2', {
                slidesPerView: 5,
                spaceBetween: 20,
                loop: true,
                centerSlides: 'true',
                fade: 'true',
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                    },
                    835: {
                        slidesPerView: 3,
                    },
                    1100: {
                        slidesPerView: 4,
                    },
                    1416: {
                        slidesPerView: 5,
                    },
                },
            });

            var swiper_primi = new Swiper('.slide-content3', {
                slidesPerView: 5,
                spaceBetween: 20,
                loop: true,
                centerSlides: 'true',
                fade: 'true',
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                    },
                    835: {
                        slidesPerView: 3,
                    },
                    1100: {
                        slidesPerView: 4,
                    },
                    1416: {
                        slidesPerView: 5,
                    },
                },
            });

            // funzione per ridurre il fontsize della nav a in base ai breakpoint
            var nav = document.querySelector('.nav');
            var nav_a = document.querySelectorAll('.nav a');
            var logo_title_p = document.querySelectorAll('.logo_title p');

            function adapt_size(){
                if(window.outerWidth < 890 && window.outerWidth > 590){
                    var newgap = 0.5 + (window.outerWidth-590)/60*0.2;
                    var newfontnav = 20 + (window.outerWidth-590)/60*2;
                    var newfontlogo = 15 + (window.outerWidth-590)/60;

                    nav.style.gap = newgap+'rem';   //0.5 + (width-590)/60*0.2
                    nav_a.forEach(element => {
                        element.style.fontSize = newfontnav+'px';  //20 + (width-590)/60*2
                    });
                    logo_title_p.forEach(element => {
                        element.style.fontSize = newfontlogo+'px'; //15 + (width-590)/60*1
                    });
                }
                else if(window.outerWidth <= 590 && window.outerWidth >= 0){
                    nav.style.gap = '0.5rem';
                    nav_a.forEach(element => {
                        element.style.fontSize = '20px';
                    });
                    logo_title_p.forEach(element => {
                        element.style.fontSize = '15px';
                    });
                }
                else{
                    nav.style.gap = '1.5rem';
                    nav_a.forEach(element => {
                        element.style.fontSize = '30px';
                    });
                    logo_title_p.forEach(element => {
                        element.style.fontSize = '20px';
                    });
                }
            }
            window.addEventListener('resize', function() {
                adapt_size();
            });
            adapt_size();

            // Funzioni modal Login/Signin
            // Fa apparire il modal del login
            document.getElementById('loginBtn').addEventListener('click', function(event) {
                document.getElementById('loginModal').style.display = 'block';
            });

            // Chiudi il modal cliccando fuori
            window.onclick = function(event) {
                if (event.target == document.getElementById('loginModal')) {
                    document.getElementById('loginModal').style.display = "none";
                    document.getElementById('erroreLogin').style.display = "none";
                    document.getElementById('erroreSignin').style.display = "none";
                }
                if (event.target == document.getElementById('registerModal')) {
                    document.getElementById('registerModal').style.display = "none";
                    document.getElementById('erroreLogin').style.display = "none";
                    document.getElementById('erroreSignin').style.display = "none";
                }
            } 
        </script>
    </body>

    <?php
        // IL CODICE PHP GERSTISCE IL LOGIN/REGISTRAZIONE E IL PROFILO
        //DATABASE:
        $dbconn = pg_connect("host=localhost port=5432 dbname=ajojo user=postgres2 password=biar") 
        or die('Could not connect: ' . pg_last_error()); 
        
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $tipo = $_POST['tipo'];
            //CASO LOGIN
            if($tipo == "login"){
                $username = $_POST['usernameLogin'];
                $password = $_POST['passwordLogin'];
                $query = "SELECT * FROM utenti WHERE username = '$username' AND password = '$password'";
                $result = pg_query($dbconn, $query);
                
                if ($result) {
                    if (pg_num_rows($result) > 0) {
                        if(!isset($_SESSION['user'])){               
                            $_SESSION['user'] = $username;
                            echo "<script>location.reload();</script>";
                        }
                    } 
                    else {
                        //echo "Nome utente o password non validi.";
                        echo "<script>
                        document.getElementById('loginModal').style.display = 'block';
                        document.getElementById('erroreLogin').style.display = 'block';
                        </script>";
                    }
                }
                else {
                    echo "Errore nella ricerca dell'utente: " . pg_last_error($dbconn);
                }
                pg_free_result($result);
            }
            //CASO REGISTRAZIONE
            if($tipo == "registrazione"){
                $username = $_POST['username'];
                $password = $_POST['password'];
                $nome = $_POST['nome'];
                $cognome = $_POST['cognome'];
                if(!isset($_POST['isvegan'])) $isvegan="false"; else
                    $isvegan = $_POST['isvegan'];
                if(!isset($_POST['intgluten'])) $intgluten = "false"; else
                    $intgluten = $_POST['intgluten'];  
                $query="select * from utenti where username='$username'";
                $result=pg_query($dbconn, $query);
                if(pg_num_rows($result)>0){
                    echo "
                    <script>
                    document.getElementById('registerModal').style.display = 'block';
                    document.getElementById('erroreSignin').style.display = 'block';
                    </script>";
                } else { 
                    if($username==""||$password=="")
                        echo "Registrazione fallita<br>inserisci i dati correttamente";
                    else{
                        $query="insert into utenti values ('$username','$nome','$cognome','$password',$isvegan,$intgluten); ";
                        pg_query($dbconn, $query);
                        echo "registrazione avvenuta con successo";
                    }
                }
            }
        }
        pg_close($dbconn);    
        ?>
</html>