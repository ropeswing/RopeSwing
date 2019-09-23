import guid from '../util/guidMaker'

function Ivent (dte=new Date(), title='Default Event', type='Default Type' ){
  this.id=guid(),
  this.date=new Date(),
  this.title=title,
  this.type=type,
  this.liked= true, 
  this.outerCircle= 0, 
  this.innerCircle= 0, 
  this.image_url= "a", 
  this.theKey=this.id
}


module.exports = Ivent;