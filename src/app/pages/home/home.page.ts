import {Component} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {UserApiService} from '../../services/user-api.service';
import {Result} from '../../models/models';
import {LoadingService} from '../../services/loading.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    private hide: boolean = false;
    alert: any;
    private userArray: Result[];

    constructor(public loading: LoadingService,private router: Router, private userApiService: UserApiService, public actionSheetController: ActionSheetController, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.loading.present();
        this.userApiService.getUsers().subscribe(data => {
                this.userArray = data.results;
                console.log(this.userArray);
                this.loading.dismiss()
            },
            err =>{ console.log('HTTP Error', err),this.loading.dismiss()}
        );
    }

    navigateToLogBook() {

        this.router.navigate(['/log-book', {data: 'LogBook'}]);
    }


    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Manage Pigs',
            buttons: [{
                text: 'Add Pigs',
                role: 'destructive',
                icon: 'add',
                handler: () => {
                    console.log('Add Pigs clicked');
                }
            }, {
                text: 'Move Pigs',
                icon: 'move',
                handler: () => {
                    console.log('Move Pigs clicked');
                }
            }, {
                text: 'Sale Pigs',
                icon: 'cash',
                handler: () => {
                    console.log('Sale Pigs clicked');
                }
            }
            ]
        });
        await actionSheet.present();
    }

    showHide(hide) {
        console.log(hide);
        this.hide = !hide;
    }

    checkShowHide(i: number) {
        if (i === 0 || !this.hide) {
            return true;
        } else if (this.hide) {
            return false;
        }
    }

    toggleNotification(alert) {
        this.alert = alert;
        console.log("Show Notification ",this.alert);
    }

    messageFunc(i: number) {
        console.log("messege ", i)
    }

    callFunc(i: number) {
        console.log("call ", i)
    }
}
