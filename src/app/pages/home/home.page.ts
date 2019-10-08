import {Component} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {UserApiService} from '../../services/user-api.service';
import {Result} from '../../models/models';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    private hide: boolean = true;
    alert: any;
    private userArray: Result[];

    constructor( private router: Router,private userApiService: UserApiService, public actionSheetController: ActionSheetController, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.userApiService.getUsers().subscribe(data => {
                this.userArray = data.results;
                console.log(this.userArray);
                this.mapToNewArray(this.userArray);
            }
        );
    }

    navigateToLogBook()
    {

        this.router.navigate(['/log-book', { data: "LogBook" }]);
    }


    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Manage Pigs',
            buttons: [{
                text: 'Add Pigs',
                role: 'destructive',
                icon: 'add',
                handler: () => {
                    console.log('add clicked');
                }
            }, {
                text: 'Move Pigs',
                icon: 'move',
                handler: () => {
                    console.log('move clicked');
                }
            }, {
                text: 'Sale Pigs',
                icon: 'cash',
                handler: () => {
                    console.log('cashsale clicked');
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

    isHide(i: any) {
        if (i === 1) {
            return true;
        } else {
            return false;
        }
    }

    checkShowHide(i: number) {
       if(i===0)
       {
           return true;
       }
        if (!this.hide) {
            return true;
        }
        else if(this.hide){
            return false;
        }


    }

    private mapToNewArray(userArray: Result[]) {
        let newUserArray;
        console.log(userArray)
        // for(let index=0;userArray.length)
    }
}
