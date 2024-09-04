import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  cardsInfo: {title:string, subTitle:string} []= [
    {title:'Build a website', subTitle:"Bring your ideas to life with a custom-built website tailored to your brand. From design to deployment, we make it easy to create a professional online presence that stands out."},
    {title:'Manage your business', subTitle:"Streamline your business operations with our all-in-one platform. Manage client appointments, track inventory, and automate administrative tasks effortlessly."},
    {title:'Grow online', subTitle:"Expand your reach and engage with more customers. From digital marketing strategies to SEO optimization, we help you grow your online presence and drive business success."},
  ];

  scrollToBottom(): void {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth' // Adds smooth scrolling
    });
  }

}
