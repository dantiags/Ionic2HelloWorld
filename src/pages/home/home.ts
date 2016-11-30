import {Component} from "@angular/core";  
import {GitHubService} from '../../app/services/github';
import {NavController} from 'ionic-angular';  
import {DetailsPage} from '../details/details';  

@Component({
    templateUrl: 'home.html',
    providers: [GitHubService]
})
export class HomePage {  
    public foundRepos;
    public username;

    constructor(private github: GitHubService,  private nav: NavController) {
    }

    getRepos() {
        this.github.getRepos(this.username).subscribe(
            data => {
                this.foundRepos = data.json();
            },
            err => console.error(err),
            () => console.log('getRepos completed')
        );
    }

    goToDetails(repo) {  
        
        this.nav.push(DetailsPage, { repository: repo });

    }
}