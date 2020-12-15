let app = new Vue ({
  el: ".container",
  data: {
    counter: 0,
    slides: [
      "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
      "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
      "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
      "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"
    ],
  },

  created: function () {
    setInterval(this.next, 3000)
  },

 // funzioni per scorrere avanti e indietro;
  methods: {
    next(){
      this.counter++;
      if (this.counter > (this.slides.length -1)) {
      this.counter = 0;
    }
   },
   prev(){
     this.counter--
     if (this.counter < 0) {
      this.counter = this.slides.length -1;
     }
   }
 },

});
