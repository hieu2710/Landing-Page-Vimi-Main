import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LandingPageService } from 'service/landing-page.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {
  public gerUsers: any;
  name!: string;
  phone!: string;
  InforUserName: string = '';
  InforUserPhone: number = 0;
  public renderInforUser: any;
  constructor(
    private LandingPageService: LandingPageService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    // this.getInforUser();
  }

  // getInforUser() {
  //   this.LandingPageService.getUsers().subscribe(
  //     (res: any) => {
  //       this.renderInforUser = res.map((item: any) => item);
  //       console.log('Infor User:', this.renderInforUser);
  //     },
  //     (error: any) => {
  //       console.error('Error fetching Infor User data:', error);
  //     }
  //   );
  // }

  async submitInfor() {
    if (!this.name || !this.phone) {
      const alert = await this.alertController.create({
        header: 'Thông báo',
        message: 'Vui lòng điền đầy đủ thông tin.',
        buttons: ['OK'],
      });
      await alert.present();
    } else if (!/^\d+$/.test(this.phone)) {
      const alert = await this.alertController.create({
        header: 'Thông báo',
        message: 'Số điện thoại không hợp lệ. Vui lòng nhập lại.',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      const inforUser = {
        name: this.name,
        phone: this.phone,
      };
      console.log('inforUser', inforUser);
      this.LandingPageService.sendInforUser(inforUser).subscribe(
        async (response) => {
          console.log('Infor:', response);
          this.name = '';
          this.phone = '';
          const alert = await this.alertController.create({
            header: 'Cảm ơn bạn!',
            message:
              'Đã gửi thông tin tư vấn thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể. Cảm ơn bạn đã quan tâm đến sản phẩm của chúng tôi!',
            buttons: ['OK'],
          });
          await alert.present();
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }

  clickToExplore() {
    const click = document.getElementById('noniWhat');
    if (click) {
      click.scrollIntoView({ behavior: 'smooth' });
    }
  }

  clickToAdvise() {
    const click = document.getElementById('advise');
    if (click) {
      click.scrollIntoView({ behavior: 'auto' });
    }
  }

  openGoogleMaps() {
    const address = 'Số 3, đường 34A, phường An Phú, quận 2, TP.Hồ Chí Minh';
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

    window.open(googleMapsUrl, '_blank');
  }
}
