import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { AppModule } from 'src/app/app.module';
import { UrpgObjectModel } from 'src/app/models/ObjectModel';
import { RestService } from 'src/app/services/rest.service';
import { Breadcrumb, HeaderComponent, ModelDefinition } from 'zydeco-ts';

@Component({
  selector: 'urpg-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent<ModelClass extends UrpgObjectModel, DeltaClass extends UrpgObjectModel> implements OnInit {

  public service!        :RestService;
  public model!          :ModelClass;
  public delta!          :DeltaClass;

  public items           :any[]            = [];
  public complex         :boolean          = false;
  public breadcrumbs     :Breadcrumb[]     = [];
  public modelDefinition :ModelDefinition  = new ModelDefinition([]);
  public api             :string           = "";
  public editType        :string           = "update";
  public title           :string           = "";

  @ViewChild('header', {static: false})
  protected header!         :HeaderComponent;

  constructor(
    @Inject(null) protected modelType : new () => ModelClass,
    @Inject(null) protected deltaType : new () => DeltaClass,
    protected route     : ActivatedRoute
  ) { 
    this.service = AppModule.injector.get(RestService);
    this.delta    = new this.deltaType();
    this.breadcrumbs.push(new Breadcrumb("test", "Dashboard"), new Breadcrumb("test", "Configuration"));
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
    this.delta    = new this.deltaType();
  }

  load(param:any) {
    this.editType = "update";
    this.delta    = new this.deltaType();
    this.service.get(this.api, param).subscribe(model => {
      this.model = plainToClass(this.modelType, model);
      console.log(this.model);
    });
  }

  save() {
    console.log(this.delta);
    if (this.editType == "update") {
      this.service.put(this.api, this.model.getId(), this.delta).subscribe({
        next: model => this.showSuccessMessage(model),
        error: error => this.showErrorMessage(error)
      });
    }
    else if (this.editType == "create") {
      this.service.post(this.api, [], this.delta).subscribe({
        next: model => this.showSuccessMessage(model),
        error: error => this.showErrorMessage(error)
      });
    }
  }

  showSuccessMessage(model:any) {
    this.loadItems();
    this.header.clearMessage();
    this.header.showSuccessMessage(`${this.modelType.name} ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new this.deltaType();
    this.model = plainToClass(this.modelType, model);
  }

  showErrorMessage(error:any) {
    this.header.clearMessage();
    if (error.error.errors !== undefined) {
      let messages = error.error.errors.map((message:any) => {
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
