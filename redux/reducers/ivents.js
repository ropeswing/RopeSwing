import guid from '../../util/guidMaker'

const intialState = { ivents:[
  { type:'movie', title: "Avengers: End Game", liked: true, outerCircle: 654, innerCircle: 34, image_url: "youTube.png", id:guid()},
  { type:'movie', title: "Lion King", liked: false, outerCircle: 349, innerCircle: 12, image_url: "ab",id:guid() },
  { type:'movie', title: "Once Upon a Time in Hollywood", liked: false, outerCircle: 3663, innerCircle: 18, image_url: "ab",id:guid() },
  { type:'movie', title: "Spider-Man: Far From Home", liked: true, outerCircle: 127, innerCircle: 42, image_url: "ab",id:guid() },
  { type:'movie', title: "Top Gun", liked: false, outerCircle: 110, innerCircle: 2, image_url: "ab",id:guid() },
  { type:'movie', title: "Crawl", liked: true, outerCircle: 65, innerCircle: 7, image_url: "ab",id:guid() },
  { type:'book', title: "Thinner", liked: true, outerCircle: 654, innerCircle: 34, image_url: "a",id:guid() },
  { type:'book', title: "Coma", liked: false, outerCircle: 349, innerCircle: 12, image_url: "ab",id:guid() },
  { type:'book', title: "Cinderella", liked: false, outerCircle: 3663, innerCircle: 18, image_url: "ab",id:guid() },
  { type:'book', title: "Game of Thrones", liked: true, outerCircle: 127, innerCircle: 42, image_url: "ab",id:guid() },
  { type:'book', title: "Smoke Screen", liked: false, outerCircle: 110, innerCircle: 2, image_url: "ab",id:guid() },
  { type:'book', title: "Deal with the Devil", liked: true, outerCircle: 65, innerCircle: 7, image_url: "ab",id:guid() },
  { type:'youtube', title: "Video 1", liked: true, outerCircle: 654, innerCircle: 34, image_url: "a",id:guid() },
  { type:'youtube', title: "Video 2", liked: false, outerCircle: 349, innerCircle: 12, image_url: "ab",id:guid() },
  { type:'youtube', title: "Video 3", liked: false, outerCircle: 3663, innerCircle: 18, image_url: "ab",id:guid() },
  { type:'youtube', title: "Video 4", liked: true, outerCircle: 127, innerCircle: 42, image_url: "ab",id:guid() },
  { type:'youtube', title: "Video 5", liked: false, outerCircle: 110, innerCircle: 2, image_url: "ab",id:guid() },
  // { type:'youtube', title: "Video 6", liked: true, outerCircle: 65, innerCircle: 7, image_url: "ab", key:"32" },
  // { type:'youtube', title: "Video 7", liked: true, outerCircle: 654, innerCircle: 34, image_url: "a", key:"13"},
  // { type:'youtube', title: "Video 8", liked: false, outerCircle: 349, innerCircle: 12, image_url: "ab", key:"15" },
  // { type:'youtube', title: "Video 9", liked: false, outerCircle: 3663, innerCircle: 18, image_url: "ab", key:"14" },
  // { type:'youtube', title: "Video 10", liked: true, outerCircle: 127, innerCircle: 42, image_url: "ab", key:"16" },
  // { type:'youtube', title: "Video 11", liked: false, outerCircle: 110, innerCircle: 2, image_url: "ab", key:"17" },
  // { type:'youtube', title: "Video 12", liked: true, outerCircle: 65, innerCircle: 7, image_url: "ab", key:"19" },
  // { type:'music', title: "Cake - Going the Distance", liked: true, outerCircle: 654, innerCircle: 34, image_url: "a", key:"7"},
  // { type:'music', title: "Offspring - Kids Aren't Alright", liked: false, outerCircle: 349, innerCircle: 12, image_url: "ab", key:"8" },
  // { type:'music', title: "Cinderella - Long Cold Winter", liked: false, outerCircle: 3663, innerCircle: 18, image_url: "ab", key:"9" },
  // { type:'music', title: "Guns and Roses - November Rain", liked: true, outerCircle: 127, innerCircle: 42, image_url: "ab", key:"10" },
  // { type:'music', title: "Toto - Africa", liked: false, outerCircle: 110, innerCircle: 2, image_url: "ab", key:"11" },
  // { type:'music', title: "Neil Diamond - America", liked: true, outerCircle: 65, innerCircle: 7, image_url: "ab", key:"12" },
  // { type:'fashion', title: "Coach Purse", liked: true, outerCircle: 654, innerCircle: 34, image_url: "a", key:"33"},
  // { type:'fashion', title: "Oakley Sunglasses", liked: false, outerCircle: 349, innerCircle: 12, image_url: "ab", key:"34" },
  // { type:'fashion', title: "Nike Shoes", liked: false, outerCircle: 3663, innerCircle: 18, image_url: "ab", key:"35" },
  // { type:'fashion', title: "Sam Edelman Roza Flats", liked: true, outerCircle: 127, innerCircle: 42, image_url: "ab", key:"36" },
  // { type:'fashion', title: "Lulus Lace Popover Wide Leg Jumpsuit", liked: false, outerCircle: 110, innerCircle: 2, image_url: "ab", key:"37" },
  // { type:'fashion', title: "BillABong Same Side Hooded Cover-Up Tunic", liked: true, outerCircle: 65, innerCircle: 7, image_url: "ab", key:"38" }
] };

export default ivents = (state = intialState, action) => {
  switch(action.type){
    case 'ivents/new':      
      return {...state, ivents: [...state.ivents, action.payload]}
   default:
      return state;
  };
};

