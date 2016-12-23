import { Component } from '@angular/core';

@Component({

    selector: 'my-app',
    template: `
    <div className="row">
        <div className="col-sm-12">
            <div class="jumbotron">
                <h1>TodoApp using Angular2</h1>
                <button class="btn btn-primary" (click)=counter()>ClickMe</button>
            </div>
        </div>
    </div>
    `
})

export class AppComponent {
    test = 'test';

    counter() {
        console.log('click event is trigered');
    }
}
