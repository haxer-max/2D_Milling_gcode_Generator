<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
     <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" >

    <title>G code convertor</title>
    <style>

@import url(https://fonts.googleapis.com/css?family=Hind:700);

 
.abc{
    font-family: 'Hind', sans-serif;
	font-size: 400%;
	color: rgb(255, 255, 255);
	background: #0056a6;
	text-align: center;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
    box-shadow: 8px 8px 8px 8px rgba(0, 0, 0, 0.2), 0 8px 20px 0 rgba(0, 0, 0, 0.19);
}
span {
	color: transparent;
	animation: blur 10s ease-out infinite;
	-webkit-animation: blur 10s ease-out infinite;
}

span:nth-child(1) {
	animation-delay: 0.1s;
	-webkit-animation-delay: 0.1s;
}
span:nth-child(2) {
	animation-delay: 0.2s;
	-webkit-animation-delay: 0.2s;
}
span:nth-child(3) {
	animation-delay: 0.3s;
	-webkit-animation-delay: 0.3s;
}
span:nth-child(4) {
	animation-delay: 0.4s;
	-webkit-animation-delay: 0.4s;
}
span:nth-child(5) {
	animation-delay: 0.5s;
	-webkit-animation-delay: 0.5s;
}
span:nth-child(6) {
	animation-delay: 0.6s;
	-webkit-animation-delay: 0.6s;
}
span:nth-child(7) {
	animation-delay: 0.7s;
	-webkit-animation-delay: 0.7s;
}

@keyframes blur {
	0%		{text-shadow:  0 0 100px #fff; opacity:0;}
	5%		{text-shadow:  0 0 90px #fff;}
	15%		{opacity: 1;}
	20%		{text-shadow:  0 0 0px #fff;}
	80%		{text-shadow:  0 0 0px #fff;}
	85%		{opacity: 1;}
	95%		{text-shadow:  0 0 90px #fff;}
	100%	{text-shadow:  0 0 100px #fff; opacity:0;}
}

@-webkit-keyframes blur {
	0%		{text-shadow:  0 0 100px #fff; opacity:0;}
	5%		{text-shadow:  0 0 90px #fff;}
	15%		{opacity: 1;}
	20%		{text-shadow:  0 0 0px #fff;}
	80%		{text-shadow:  0 0 0px #fff;}
	85%		{opacity: 1;}
	95%		{text-shadow:  0 0 90px #fff;}
	100%	{text-shadow:  0 0 100px #fff; opacity:0;}
}

.card {
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19);
}
   
        
		</style>
		 <link href="k.css" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
		<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="assets/img/logo.png" alt=""></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><p style="font-family: 'Staatliches', cursive;font-size: 26px;">Dcoumentation</p></a>
              </li>
             <p></p>
              </ul>
           
          </div>
        </div>
      </nav>

     
      <div id="wish">
          <div class ="abc">
        <span>Welcome</span> 
        <span>to</span> 
        <span>Our ME225 project</span> 
        <br>
        <span></span> 
        <span></span> 
        <span id="curyear"></span> 
        <span></span>
        </div>
       </p>
      
       <div class ="container my-3">
        <div class="card" style="margin-left:10px;margin-top:10px;margin-right:10px;">
          
          <div class="card-body" style="background-color: yellow;">
            <h5 class="card-title" style="text-align: center;">Dveloped by : -</h5>
           
            <p style="font-family: 'Pacifico', cursive; text-align: center;
            "> 
             Gyanendra Prakash</p>
            <p style="font-family: 'Pacifico', cursive; text-align: center;
            "> 
             Atharva Shrawage</p>
            <p style="font-family: 'Pacifico', cursive; text-align: center;
            "> 
          Prathamesh Kanbaskar</p>
            
          
           
		  </div>
		  
		  <br>
		  <hr>


		 
			 
					
							
		
							</div>
							</div>
							</div>
							</div>
							</div>
