import { Component, Output, Input, EventEmitter } from "@angular/core";

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class headerComponent {
    collapsed = true;
    @Output() featureSelected = new EventEmitter<string>();
    getclick(feature: string) {
        // console.log(feature);
        this.featureSelected.emit(feature);
    }
}