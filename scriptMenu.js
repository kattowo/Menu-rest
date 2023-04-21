

   new Vue({
    el: "#menus-picker",
    data: {
        menuCategories: [
            "Dinner",
            "Lunch",				
            "Brunch",
            "kids",
            "Happy Hour",
            "Drinks",
            "Dessert",				
            
       
        ],
        currentTab: "Dinner"
    },
    methods:{
        toggleTab: function(clickedMenu){
            this.currentTab = clickedMenu;
        }
    }
});