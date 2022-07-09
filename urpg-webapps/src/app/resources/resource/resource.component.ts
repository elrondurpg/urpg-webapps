import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ObjectDelta } from 'src/app/models/ObjectDelta';
import { UrpgObjectModel } from 'src/app/models/ObjectModel';
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
export abstract class ResourceComponent<ModelClass extends UrpgObjectModel, DeltaClass extends UrpgObjectModel> implements OnInit {
  
  protected service:RestService;
  protected dataDefinition:EditPaneDataDefinition;

  items = [];
  model:ModelClass = undefined;
  delta:DeltaClass;
  editType = "update";
  complex:boolean = false;

  @ViewChild('header', {static: false})
  header:HeaderComponent;

  constructor(
    @Inject("string") public title:string,
    @Inject("string") public api:string,
    @Inject("string") protected modelType: new () => ModelClass,
    @Inject("string") protected deltaType: new () => DeltaClass,
    protected route:ActivatedRoute
  ) { 
    this.service = AppModule.injector.get(RestService);

    this.api = api;
    this.delta = new this.deltaType();
  }

  ngOnInit() {
    this.loadItems();
    this.route.params.subscribe(params => {
      if (params['name']) {
        this.load(params['name']);
      }
    });
  }

  loadItems() {
    this.service.get(this.api).subscribe(items => this.items = items);
  }

  create() {
    this.editType = "create";
    this.delta = new this.deltaType();
  }

  load(param) {
    this.editType = "update";
    this.delta = new this.deltaType();
    this.service.get(this.api, param).subscribe(model => {
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
      this.service.post(this.api, null, this.delta).subscribe(
        model => this.showSuccessMessage(model),
        error => this.showErrorMessage(error)
      );
    }
  }

  showSuccessMessage(model) {
    this.loadItems();
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
