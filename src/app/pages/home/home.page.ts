import {Component} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(public actionSheetController: ActionSheetController) {
    }

    async presentActionSheet() {

        // (add
        // pigs, move pigs and sale pigs)
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
}
