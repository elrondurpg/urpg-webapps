import { Component, OnInit, ViewChild } from '@angular/core';
import { ObjectDelta } from 'src/app/models/ObjectDelta';
import { ObjectModel } from 'src/app/models/ObjectModel';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { plainToClass } from 'class-transformer';
import { AppModule } from 'src/app/app.module';
import { HeaderComponent } from '../header/header.component';
import { EditPaneDataDefinition } from 'src/app/models/EditPaneDataDefinition';

@Component({
  selector: 'urpg-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export abstract class ResourceComponent<ModelClass extends ObjectModel, DeltaClass extends ObjectDelta> implements OnInit {
  
  protected service:RestService;
  protected dataDefinition:EditPaneDataDefinition;

  names = [];
  model:ModelClass = undefined;
  delta:DeltaClass;
  editType = "update";

  @ViewChild('header', {static: false})
  header:HeaderComponent;

  constructor(
    protected title:string,
    protected api:string,
    protected modelType: new () => ModelClass,
    protected deltaType: new () => DeltaClass,
    protected route:ActivatedRoute
  ) { 
    this.service = AppModule.injector.get(RestService);

    this.api = api;
    this.delta = new this.deltaType();
  }

  ngOnInit() {
    this.loadNames();
    this.route.params.subscribe(params => {
      if (params['name']) {
        this.findByName(params['name']);
      }
    });
  }

  loadNames() {
    this.service.get(this.api).subscribe(names => this.names = names);
  }

  create() {
    this.editType = "create";
    this.delta = new this.deltaType();
  }

  findByName(name) {
    this.editType = "update";
    this.delta = new this.deltaType();
    this.service.getByName(this.api, name).subscribe(model => {
      this.model = plainToClass(this.modelType, model);
      console.log(this.model);
    });
  }

  save() {
    console.log(this.delta);
    if (this.editType == "update") {
      this.service.put(this.api, this.model.dbid, this.delta).subscribe(
        model => this.showSuccessMessage(model),
        error => this.showErrorMessage(error));
    }
    else if (this.editType == "create") {
      this.service.post(this.api, this.delta).subscribe(
        model => this.showSuccessMessage(model),
        error => this.showErrorMessage(error)
      );
    }
  }

  showSuccessMessage(model) {
    this.loadNames();
    this.header.clearMessage();
    this.header.showSuccessMessage(`${this.modelType.name} ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new this.deltaType();
    this.model = plainToClass(this.modelType, model);
  }

  showErrorMessage(error) {
    this.header.clearMessage();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map(message => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.header.showErrorMessageArray(`${this.modelType.name} could not be ${this.editType}d.`, messages);
    }
    else {
      this.header.showErrorMessage(`${this.modelType.name} could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }
}
