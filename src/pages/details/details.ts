import { Component } from '@angular/core';  
import { NavController, NavParams } from 'ionic-angular';  
import {GitHubService} from '../../app/services/github';

@Component({
    templateUrl: 'details.html',
    providers: [GitHubService]
})
export class DetailsPage {  
    public readme = '';
    public repo;

    constructor(private github: GitHubService, 
                private nav: NavController, 
                private navParams: NavParams) {

        this.repo = navParams.get('repository');

        this.github.getDetails(this.repo).subscribe(
            data => this.readme = data.text(),
            err => {
                if (err.status == 404) {
                    this.readme = 'This repo does not have a README. :(';
                } else {
                    console.error(err);
                }
            },
            () => console.log('getDetails completed')
        );
    }
}