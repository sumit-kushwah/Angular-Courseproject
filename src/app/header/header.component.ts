import { Component, Output, Input, EventEmitter } from "@angular/core";
import { DataStorageService } from '../shared/data-storage.service';

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class headerComponent {
    collapsed = true;

    constructor( private dataService: DataStorageService) {}
    
    onSaveData() {
        this.dataService.storeRecipes();
    }
    onFetcData() {
        this.dataService.fetchRecipes().subscribe();
    }
}