import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LandingPageService } from 'service/landing-page.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})

export class LandingPagePage implements OnInit {
  public gerUsers: any;

  constructor(
    // private modalController: ModalController,
    private LandingPageService: LandingPageService
  ) { }

  ngOnInit() {
    this.renderUsers();
  }

  renderUsers(){
    this.LandingPageService.getUsers().subscribe(
      (item: any) => {
      this.gerUsers = item.map((item: any) => item);
      console.log("USer:",this.gerUsers);
    }, 
    (err:any) => {
      console.error('Error fetching User  data:', err);
    });
  }

  // getProductRender() {
  //   this.productService.getProducts().subscribe(
  //     (res: any) => {
  //       this.productData = res.data.map((item: any) => item);
  //       console.log('Product lists:', this.productData);
  //     },
  //     (err: any) => {
  //       console.error('Error fetching current store data:', err);
  //     }
  //   );
  // }

  clickToExplore(){
    const click = document.getElementById('noniWhat')
    if(click){
      click.scrollIntoView({behavior: 'smooth'})
    }
  }

}
