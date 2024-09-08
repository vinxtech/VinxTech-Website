import { Component, OnInit } from '@angular/core';

import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  
  description: string = "We're here to assist you 24/7 via email or live chat. Reach out to us for personalized solutions that meet your business needs."

  contactInfo: {photo:string, title:string, subTitle:string} []= [
    {photo:'assets/images/clock.svg', title:'Hours', subTitle:'24/7 for Email and Live Chat'},
    {photo:'assets/images/pin.svg', title:'Kingdom of Saudi Arabia, Riyadh', subTitle:"Located in the heart of Riyadh"},
    {photo:'assets/images/email.svg', title:'Email', subTitle:'vinxtech@vinxtech.com'},
  ];

  socialIcons: {photo:string} []= [
    {photo:'assets/images/facebook.svg'},
    {photo:'assets/images/instagram.svg'},
    {photo:'assets/images/x.svg'},
    {photo:'assets/images/linkedin.svg'}
  ];

  currentYear: number | undefined;

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

  sendEmail(event: Event) {
    event.preventDefault();  // Prevent default form submission
    
    emailjs.sendForm(
      'service_641dywc',  // Replace with your EmailJS Service ID
      'template_m5d61lv', // Replace with your EmailJS Template ID
      event.target as HTMLFormElement,
      'jYd2CghEip4P9lxc2'      // Replace with your EmailJS User ID (API Key)
    ).then(
      (result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Email sent successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send email. Try again.');
      }
    );
  }

}
