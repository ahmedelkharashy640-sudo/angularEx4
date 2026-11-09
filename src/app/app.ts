import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {

   images : string[] = [
   "1.jpg",
   "2.jpg",
   "3.jpg",
   "4.jpg",
   "5.jpg",
   "6.jpg",
   "7.jpg",
   "8.jpg",
   "9.jpg",
   ];
   isPopupActive=false;
  //  popup! : HTMLElement ;  //! (!) not null mean return it but null
   popup : HTMLElement | null =null;

   popupImgEle !: HTMLImageElement;

   currentImgIndex : number = 0;

  openPopup(popupEle : HTMLElement, popupImg : HTMLImageElement, currentImg : HTMLImageElement)
   {
    this.popup = popupEle;
    this.popupImgEle = popupImg;
    this.currentImgIndex =Number(currentImg.getAttribute('data-index'));
    popupEle.classList.add("active");
    setTimeout(function(){
      popupEle.classList.add("show");
    },1)

    this.updateImg(currentImg.src)
   }

   closePopup()
   {
    this.popup?.classList.remove("show");
    setTimeout( () =>{
      this.popup?.classList.remove("active");
    },500)
   }
   stop(e:Event)
   {
    e.stopPropagation();
   }

   updateImg( src : string)
   {
      this.popupImgEle.src =src;
   }

   nextImg()
   {
    this.currentImgIndex = ++this.currentImgIndex % this.images.length;
    let newImg =this.images[this.currentImgIndex],
        newSrc = `assets/images/${newImg}`;
     this.popupImgEle.src = newSrc;
   }
   prevImg()
   {
    this.currentImgIndex =( --this.currentImgIndex + this.images.length) % this.images.length;
    let newImg =this.images[this.currentImgIndex],
        newSrc = `assets/images/${newImg}`;
     this.popupImgEle.src = newSrc;
   }

   changeImg(index : number)
   {
    this.currentImgIndex = index;
    let newSrc = this.images[this.currentImgIndex];
    this.updateImg(`assets/images/${newSrc}`);
   }
}

