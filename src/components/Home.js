import react from "react";

export default function Home (){
    return (
        <div> 
      <head>
	<title>ClEAN BARBERS</title>
	
</head>
    <section id="banner">
        <img src="logo.jpg" class="logo"></img>
        <div class="banner-text">
                <h1>Clean Barbers</h1>
                <p>Style your hair,Style your life</p>
        <div class="banner-btn">
            <a href="#"><span></span>Find Out</a>
            <a href="#"><span></span>Read More</a>
        </div>
        </div>
</section>
<div id="sideNav">
    <nav>
        <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">FEATURES</a></li>
            <li><a href="">TESTIMONIALS</a></li>
            <li><a href="">MEET US</a></li>
        </ul>
    </nav>
</div>
<div id="menuBtn">
    <img src="FB_IMG_2.jpg" id="menu"></img>
</div>
        </div>

    )
}