var app = new Vue({
    el: '#app',
    data:{
        api_key: '7f4da88722dde7f8c871dbd866be4f50',
        url_base: 'https://api.openweathermap.org/data/2.5/',
        query: '',
        weather: {}   
    },
    methods:{
        fetchWeather(e){
            if (e.key == "Enter"){
              fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
                .then(res => {
                  return res.json();
                }).then(this.setResults);
            }
        },
        setResults(results){
            this.weather = results;
        },
        calendar(){
            var d = new Date();
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var days = ["Moday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
            var day = days[d.getDay()];
            var date = d.getDate();
            var month = months[d.getMonth()];
            var year = d.getFullYear();
  
            return `${day} ${date} ${month} ${year}`
        }   
    }
})