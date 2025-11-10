<script>
  $('.meu-carrossel').slick({
    slidesToShow: 3,  
    slidesToScroll: 1,
    arrows: true, 
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
</script>
