import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { plainToClass, plainToClassFromExist } from 'class-transformer';
import { map, Observable } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { UrpgObjectModel } from 'src/app/models/v1/UrpgObjectModel';
import { RestService } from 'src/app/services/v1/rest.service';
import { AttributesComponent, Breadcrumb, HeaderComponent, ModelDefinition } from 'zydeco-ts';
import { Page } from '../model/Page';

@Component({
  selector: 'urpg-configuration',
  templateUrl: './configuration.component.html'
})
export class ConfigurationComponent<ModelClass extends UrpgObjectModel, DeltaClass extends UrpgObjectModel> implements OnInit {

  public service!        :RestService;
  public titleService!   :Title;
  public model!          :ModelClass;
  public delta!          :DeltaClass;

  public items           :any[]               = [];
  public complex         :boolean             = false;
  public breadcrumbs     :Breadcrumb[]        = [new Breadcrumb("test", "Dashboard"), new Breadcrumb("/urpg-webapps/configuration/", "Configuration")];
  public modelDefinition :ModelDefinition     = new ModelDefinition([]);
  public api             :string              = "";
  public editType        :string              = "update";
  public title           :string              = "";
  public itemInContext   :boolean             = false;
  public searchFilter    :string | undefined  = undefined;
  public loaded          :boolean             = false;

  @ViewChild('header', {static: false})
  protected header!         :HeaderComponent;

  @ViewChild('attributes', { static: false })
  protected attributes!     :AttributesComponent;

  constructor(
    @Inject(null) protected modelType : new () => ModelClass,
    @Inject(null) protected deltaType : new () => DeltaClass,
    protected route     : ActivatedRoute
  ) { 
    this.service = AppModule.injector.get(RestService);
    this.titleService = AppModule.injector.get(Title);
    this.delta    = new this.deltaType();
  }

  ngOnInit() {
    this.titleService.setTitle(this.title + " Configuration : URPG");
  }

  userLoaded() {
    this.loaded = true;
    this.loadItems();
    this.route.params.subscribe(params => {
      if (params['name']) {
        this.load(params['name']);
      }
    });
  }

  loadItems() {
    this.service.get(this.api).subscribe(items => {
        if (items['content'] == undefined) {
          this.loadItemsFromOldParadigm(items);
        }
        else {
          this.loadItemsFromNewParadigm(items)
        }
    });
  }

  private loadItemsFromOldParadigm(items) {
    this.items = items;
  }

  private loadItemsFromNewParadigm(items) {
    this.items = items['content'].map(item => item.name);
  }

  create(refresh:boolean = false) {
    this.editType = "create";
    this.itemInContext = true;
    this.model = new this.modelType();
    this.delta    = new this.deltaType();
    if (refresh) {
      this.modelDefinition.attributes.forEach(attributeDefinition => attributeDefinition.refresh());
    }
  }

  load(param:any, refresh:boolean = false) {
    this.itemInContext = true;
    this.editType = "update";
    this.delta    = new this.deltaType();
    this.service.get(this.api, param).subscribe(model => {
      this.model = plainToClass(this.modelType, model);
      console.log(this.model);
    });
    if (refresh) {
      this.modelDefinition.attributes.forEach(attributeDefinition => attributeDefinition.refresh());
    }
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
    this.header.showSuccessMessage(`${this.title} ${this.editType}d successfully!`);
    this.editType = "update";
    this.delta = new this.deltaType();
    this.model = plainToClass(this.modelType, model);
    console.log(this.model);
    this.modelDefinition.attributes.forEach(attributeDefinition => attributeDefinition.refresh());
  }

  showErrorMessage(error:any) {
    this.header.clearMessage();
    if (error.error == null) {
      if (error.status == 401) {
        this.header.showErrorMessage(`${this.title} could not be ${this.editType}d. Error: The current user is not logged in or does not have permission to perform the requested action.`);
      }
      else {
        this.header.showErrorMessage(`${this.title} could not be ${this.editType}d. Error: ${error.status} ${error.statusText}`);
      }
    }
    else if (error.error.errors !== undefined) {
      let messages = error.error.errors.map((message:any) => {
        return `Field "${message.field}": ${message.defaultMessage}.`;
      });
      this.header.showErrorMessageArray(`${this.title} could not be ${this.editType}d.`, messages);
    }
    else {
      this.header.showErrorMessage(`${this.title} could not be ${this.editType}d. Error: ${error.error.message}`);
    }
  }

  detectChanges() {
    return !this.delta.isEmpty();
  }

  onChange(attribute:string) {
  }

  configureNameObservableForApi(api:string, pathParams?: string[] | number | string, queryParams?:{ key:string, value:any }[]) : Observable<any> {
    return this.service.get(api, pathParams, queryParams).pipe(
      map(
        items => {
          let page = plainToClassFromExist(new Page<UrpgObjectModel>(UrpgObjectModel), items);
          return page.content.map(item => item.name);
        }
      )
    )
  }

}
